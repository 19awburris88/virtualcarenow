import useNewsletterSignup from '../hooks/useNewsletterSignup';

export default function Newsletter() {
  const { email, setEmail, submitted, loading, error, submit } = useNewsletterSignup('Newsletter section');

  return (
    <section className="section-newsletter">
      <div className="container">
        <div className="newsletter-inner">
          <div className="newsletter-copy">
            <p className="eyebrow newsletter-eyebrow">Stay in the Loop</p>
            <h2>Get the latest from Virtual Care Now</h2>
            <p>
              Subscribe to receive health tips, practice updates, and news from Dr. Grundy
              — delivered straight to your inbox.
            </p>
          </div>

          <div className="newsletter-form-wrap">
            {submitted ? (
              <div className="newsletter-success">
                <div className="newsletter-success-icon">
                  <CheckIcon />
                </div>
                <p className="newsletter-success-text">
                  You're subscribed! Thank you for joining the Virtual Care Now community.
                </p>
              </div>
            ) : (
              <form className="newsletter-form" onSubmit={submit}>
                <div className="newsletter-input-row">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="newsletter-input"
                    aria-label="Email address"
                  />
                  <button type="submit" className="btn btn-primary newsletter-btn" disabled={loading}>
                    {loading ? 'Subscribing…' : 'Subscribe'}
                  </button>
                </div>
                {error && <p className="newsletter-error">{error}</p>}
                <p className="newsletter-disclaimer">
                  No spam, ever. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
