import { useState } from 'react';

const INTAKEQ_URL = 'https://virtualcarenow.intakeq.com/booking?serviceId=226b8e05-ae9c-4858-a9b7-af7c3ba62ceb';

const EMPTY = { name: '', email: '', phone: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-contact">
      <div className="container">
        <div className="contact-inner">

          <div className="contact-form-col">

            {/* ── Book an appointment ── */}
            <p className="eyebrow contact-eyebrow">Book an Appointment</p>
            <h2>Ready to see Dr. Grundy?</h2>
            <p className="contact-subtext">
              Book your virtual visit online in minutes through our secure scheduling portal.
            </p>
            <a
              href={INTAKEQ_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white btn-lg contact-book-btn"
            >
              <CalendarIcon />
              Book Online Now
            </a>

            {/* ── Divider ── */}
            <div className="contact-section-divider">
              <span>or</span>
            </div>

            {/* ── General inquiry form ── */}
            <p className="contact-question-label">Have a question first?</p>
            <p className="contact-subtext contact-subtext-sm">
              Send a message and we'll get back to you within 1 business day.
            </p>

            {submitted ? (
              <div className="booking-success">
                <div className="booking-success-icon"><CheckIcon /></div>
                <h3>Message received!</h3>
                <p>We'll be in touch soon. To book an appointment, use the button above.</p>
                <button className="btn btn-white btn-lg" onClick={() => { setForm(EMPTY); setSubmitted(false); }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="booking-form" onSubmit={submit} noValidate>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Full Name <span className="req">*</span></label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handle} placeholder="Jane Smith" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email <span className="req">*</span></label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handle} placeholder="jane@email.com" />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="phone">Phone Number <span className="form-optional">(optional)</span></label>
                  <input id="phone" name="phone" type="tel" value={form.phone} onChange={handle} placeholder="(555) 000-0000" />
                </div>
                <div className="form-field">
                  <label htmlFor="message">Your Question <span className="req">*</span></label>
                  <textarea id="message" name="message" rows={4} required value={form.message} onChange={handle} placeholder="What would you like to know?" />
                </div>
                <button type="submit" className="btn btn-white btn-lg btn-full">
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="contact-info-col">
            <div className="contact-info-card">
              <div className="avail-badge contact-badge">
                <span className="avail-dot" />
                Accepting New Patients
              </div>
              <h3>Get in touch directly</h3>
              <p>Prefer to call or email? We're available 7 days a week.</p>
              <div className="contact-details">
                <a href="tel:18002805402" className="contact-detail">
                  <div className="contact-detail-icon"><PhoneIcon /></div>
                  <div>
                    <div className="contact-detail-label">Phone</div>
                    <div className="contact-detail-value">1-800-280-5402</div>
                  </div>
                </a>
                <a href="mailto:info@virtualcare-now.com" className="contact-detail">
                  <div className="contact-detail-icon"><MailIcon /></div>
                  <div>
                    <div className="contact-detail-label">Email</div>
                    <div className="contact-detail-value">info@virtualcare-now.com</div>
                  </div>
                </a>
                <div className="contact-detail">
                  <div className="contact-detail-icon"><ClockIcon /></div>
                  <div>
                    <div className="contact-detail-label">Hours</div>
                    <div className="contact-detail-value">Mon – Sun, 5:00 AM – 12:00 AM EST</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
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
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
