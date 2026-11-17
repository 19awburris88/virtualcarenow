import { useEffect, useRef, useState } from 'react';
import useNewsletterSignup, { SUBSCRIBED_KEY } from '../hooks/useNewsletterSignup';
import { CheckIcon } from './Newsletter';

const DISMISSED_KEY = 'vcn-newsletter-popup-dismissed';
const SHOW_DELAY_MS = 4000;
const DISMISS_DAYS = 14;

function shouldShow() {
  try {
    if (localStorage.getItem(SUBSCRIBED_KEY)) return false;
    const dismissedAt = Number(localStorage.getItem(DISMISSED_KEY));
    if (dismissedAt && Date.now() - dismissedAt < DISMISS_DAYS * 864e5) return false;
  } catch {
    // storage unavailable: show once per page load
  }
  return true;
}

export default function NewsletterPopup() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);
  const { email, setEmail, submitted, loading, error, submit } = useNewsletterSignup('Welcome popup');

  useEffect(() => {
    if (!shouldShow()) return;
    const t = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = e => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  function close() {
    setOpen(false);
    try {
      localStorage.setItem(DISMISSED_KEY, String(Date.now()));
    } catch {
      // ignore
    }
  }

  if (!open) return null;

  return (
    <div
      className="condition-modal-overlay"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-labelledby="newsletter-popup-title"
    >
      <div className="condition-modal newsletter-popup" onClick={e => e.stopPropagation()}>
        <button className="condition-modal-close" onClick={close} aria-label="Close">
          ×
        </button>

        {submitted ? (
          <div className="newsletter-popup-success">
            <div className="newsletter-success-icon">
              <CheckIcon />
            </div>
            <h3 id="newsletter-popup-title">You're on the list!</h3>
            <p>Watch your inbox for health tips, practice news, and exclusive deals from Dr. Grundy.</p>
            <button className="btn btn-primary newsletter-btn" onClick={close}>
              Continue to site
            </button>
          </div>
        ) : (
          <>
            <p className="eyebrow newsletter-eyebrow">Stay in the Loop</p>
            <h3 id="newsletter-popup-title">Get health tips &amp; exclusive deals</h3>
            <p>
              Join the Virtual Care Now newsletter for wellness tips, practice updates, and
              subscriber-only offers from Dr. Grundy.
            </p>
            <form className="newsletter-popup-form" onSubmit={submit}>
              <input
                ref={inputRef}
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="newsletter-popup-input"
                aria-label="Email address"
              />
              <button type="submit" className="btn btn-primary newsletter-btn" disabled={loading}>
                {loading ? 'Subscribing…' : 'Sign Me Up'}
              </button>
              {error && <p className="newsletter-error">{error}</p>}
            </form>
            <button type="button" className="newsletter-popup-decline" onClick={close}>
              No thanks
            </button>
            <p className="newsletter-popup-disclaimer">No spam, ever. Unsubscribe at any time.</p>
          </>
        )}
      </div>
    </div>
  );
}
