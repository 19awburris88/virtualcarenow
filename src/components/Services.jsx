import { useState, useEffect } from 'react';
import { CONDITIONS } from '../data/conditions';

const INTAKEQ_URL = 'https://virtualcarenow.intakeq.com/booking';

export default function Services() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) return;
    const onKey = e => { if (e.key === 'Escape') setActive(null); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <>
      <section id="services" className="section-services">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Virtual Health Offerings</p>
            <h2>Common conditions we treat</h2>
            <p>
              Dr. Grundy provides comprehensive virtual care for a wide range of
              acute and chronic conditions — all from the comfort of your home.
              Click any condition to learn more.
            </p>
          </div>

          <div className="services-grid">
            {CONDITIONS.map(c => (
              <button
                className="service-card"
                key={c.name}
                onClick={() => setActive(c)}
                aria-label={`Learn more about ${c.name}`}
              >
                <div className="service-check">
                  <CheckIcon />
                </div>
                <p>{c.name}</p>
                <ChevronIcon />
              </button>
            ))}
          </div>

          <div className="services-cta">
            <p>Don't see your condition listed? Contact us — we treat many more conditions virtually.</p>
            <a href="#contact" className="btn btn-primary">Ask About Your Condition</a>
          </div>
        </div>
      </section>

      {active && (
        <div
          className="condition-modal-overlay"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={active.name}
        >
          <div className="condition-modal" onClick={e => e.stopPropagation()}>
            <button
              className="condition-modal-close"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              ×
            </button>
            <span className="condition-modal-tag">Virtual Care Now</span>
            <h3>{active.name}</h3>
            <p>{active.description}</p>
            <div className="condition-modal-price">
              <strong>$75 flat fee</strong> per 15–30 minute visit · Includes history, exam,
              diagnosis, treatment plan (prescription if needed), and education. A follow-up
              virtual interaction included per visit.
            </div>
            <a
              href={INTAKEQ_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg btn-full"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      )}
    </>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg className="service-card-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
