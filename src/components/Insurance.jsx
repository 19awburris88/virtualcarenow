const pillars = [
  'Transparent pricing',
  'No surprise bills',
  'Affordable flat rates',
  'Insurance acceptance coming soon',
];

export default function Insurance() {
  return (
    <section id="insurance" className="section-insurance">
      <div className="container">
        <div className="insurance-card">
          <div className="insurance-icon">
            <CreditCardIcon />
          </div>
          <p className="eyebrow">Insurance & Pricing</p>
          <h2>Cash-based now.<br />Insurance options coming soon.</h2>
          <p>
            Virtual Care Now currently operates on an affordable self-pay model,
            ensuring transparent pricing with no surprise bills. Insurance
            acceptance is planned as a future enhancement to make care even more
            accessible.
          </p>
          <div className="insurance-pills">
            {pillars.map(p => (
              <div className="pill" key={p}>
                <CheckIcon className="pill-check" />
                {p}
              </div>
            ))}
          </div>
          <a href="#contact" className="btn btn-primary btn-lg" style={{ marginTop: '8px' }}>
            Ask About Pricing
          </a>
        </div>
      </div>
    </section>
  );
}

function CreditCardIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
