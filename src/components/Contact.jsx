import { useState } from 'react';

const REASONS = [
  'Cough, cold & flu symptoms',
  'Sore throat / sinus infection',
  'UTI treatment',
  'Allergies',
  'Pink eye (conjunctivitis)',
  'Rash or skin concern',
  'Medication refill',
  'Vitamin deficiency support',
  'Erectile dysfunction',
  'Health coaching',
  'Other',
];

const EMPTY = { name: '', email: '', phone: '', date: '', reason: '', notes: '' };

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
            <p className="eyebrow contact-eyebrow">Book an Appointment</p>
            <h2>Request a visit</h2>
            <p className="contact-subtext">
              Fill out the form and we'll confirm your appointment within 1 hour
              by email or phone.
            </p>

            {submitted ? (
              <div className="booking-success">
                <div className="booking-success-icon"><CheckIcon /></div>
                <h3>Request received!</h3>
                <p>We'll be in touch shortly to confirm your appointment. You can also call or email us directly.</p>
                <button className="btn btn-white btn-lg" onClick={() => { setForm(EMPTY); setSubmitted(false); }}>
                  Submit Another Request
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
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handle} placeholder="(555) 000-0000" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="date">Preferred Date</label>
                    <input id="date" name="date" type="date" value={form.date} onChange={handle} />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="reason">Reason for Visit</label>
                  <select id="reason" name="reason" value={form.reason} onChange={handle}>
                    <option value="">Select a reason…</option>
                    {REASONS.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="notes">Additional Notes</label>
                  <textarea id="notes" name="notes" rows={3} value={form.notes} onChange={handle} placeholder="Describe your symptoms or any other relevant details…" />
                </div>
                <button type="submit" className="btn btn-white btn-lg btn-full">
                  Schedule Appointment
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
