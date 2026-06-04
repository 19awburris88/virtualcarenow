export default function Contact() {
  return (
    <section id="contact" className="section-contact">
      <div className="container">
        <div className="contact-inner">
          <p className="eyebrow contact-eyebrow">Get Care Today</p>
          <h2>Ready to feel better?</h2>
          <p>
            Virtual Care Now is available 7 days a week from 5:00 AM to midnight
            EST. Reach out today to schedule your virtual appointment — same-day
            care is often available.
          </p>
          <div className="contact-actions">
            <a href="tel:18002805402" className="btn btn-white btn-lg">
              <PhoneIcon />
              Call 1-800-280-5402
            </a>
            <a href="mailto:info@virtualcare-now.com" className="btn btn-ghost-white btn-lg">
              <MailIcon />
              Email Us
            </a>
          </div>
          <div className="contact-hours">
            <ClockIcon />
            <span>Available Monday – Sunday &nbsp;·&nbsp; 5:00 AM – 12:00 AM EST</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
