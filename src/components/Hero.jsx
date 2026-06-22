import { PHONE, PHONE_HREF, EMAIL } from '../data/constants';

export default function Hero() {
  return (
    <section className="section-hero">
      <div className="hero-container">
        <div className="hero-copy">
          <p className="eyebrow">Dr. Jeni Grundy, DNP, AGPC NP-C</p>
          <h1>Your healthcare,<br className="hero-br" /> on time.</h1>
          <p className="hero-lead">
            Fast, affordable virtual urgent care from an experienced nurse practitioner —
            built for patients who need clear answers and convenient care now.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary btn-lg">Schedule a Virtual Appointment</a>
            <a href="#services" className="btn btn-ghost btn-lg">View Services</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <strong>Same-Day</strong>
              <span>Care Available</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <strong>7 Days</strong>
              <span>A Week</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <strong>19 Hours</strong>
              <span>Daily Coverage</span>
            </div>
          </div>
        </div>

        <div className="hero-aside">
          <div className="availability-card">
            <div className="avail-badge">
              <span className="avail-dot" />
              Accepting New Patients
            </div>
            <h3>Available Daily</h3>
            <div className="avail-schedule">
              <div className="avail-days">Monday – Sunday</div>
              <div className="avail-time">5:00 AM – 12:00 AM</div>
              <div className="avail-tz">Eastern Time</div>
            </div>
            <div className="avail-divider" />
            <div className="avail-contact">
              <a href={PHONE_HREF} className="avail-link">
                <PhoneIcon />
                {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="avail-link">
                <MailIcon />
                {EMAIL}
              </a>
            </div>
            <a href="#contact" className="btn btn-primary btn-full">Book a Visit Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
