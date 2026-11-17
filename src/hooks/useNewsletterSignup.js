import { useState } from 'react';

const NEWSLETTER_FORM_ID = import.meta.env.VITE_NEWSLETTER_FORM_ID;
export const SUBSCRIBED_KEY = 'vcn-newsletter-subscribed';

export default function useNewsletterSignup(source) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const markSubscribed = () => {
    setSubmitted(true);
    try {
      localStorage.setItem(SUBSCRIBED_KEY, '1');
    } catch {
      // storage unavailable: popup may show again, which is harmless
    }
  };

  const submit = async e => {
    e.preventDefault();
    setError('');
    setLoading(true);
    if (!NEWSLETTER_FORM_ID) {
      markSubscribed();
      setLoading(false);
      return;
    }
    try {
      const res = await fetch(`https://formspree.io/f/${NEWSLETTER_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, source, _subject: 'New Newsletter Subscriber' }),
      });
      if (res.ok) {
        markSubscribed();
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return { email, setEmail, submitted, loading, error, submit };
}
