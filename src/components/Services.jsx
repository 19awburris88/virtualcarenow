const conditions = [
  'Cough, cold & flu symptoms',
  'Sore throat',
  'Sinus infections',
  'Allergies',
  'Pink eye (conjunctivitis)',
  'UTI treatment',
  'Yeast infections',
  'Rashes & minor skin infections',
  'Medication refills — non-controlled',
  'Health coaching',
  'Vitamin deficiency support',
  'Provider referrals',
];

const additionalServices = [
  {
    title: 'Vitamin D Deficiency',
    description: 'Evaluation and management of low vitamin D levels, including lab review and supplementation guidance.',
  },
  {
    title: 'Vitamin B-12 Deficiency',
    description: 'Assessment of B-12 deficiency symptoms and lab results with personalized treatment recommendations.',
  },
  {
    title: 'Electrolyte Testing',
    description: 'Review of electrolyte panels to identify imbalances and coordinate appropriate follow-up care.',
  },
  {
    title: 'Erectile Dysfunction',
    description: 'Confidential, compassionate evaluation and treatment options for erectile dysfunction.',
  },
  {
    title: 'Referral to Additional Practitioners',
    description: 'Coordination of care and referrals to specialists when your needs extend beyond virtual urgent care.',
  },
  {
    title: 'Health Coaching',
    description: 'Personalized guidance on lifestyle, nutrition, and wellness goals to support your long-term health.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-services">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Virtual Health Offerings</p>
          <h2>Common conditions we treat</h2>
          <p>
            Dr. Grundy provides comprehensive virtual care for a wide range of
            acute and chronic conditions — all from the comfort of your home.
          </p>
        </div>

        <div className="services-grid">
          {conditions.map(s => (
            <div className="service-card" key={s}>
              <div className="service-check">
                <CheckIcon />
              </div>
              <p>{s}</p>
            </div>
          ))}
        </div>

        <div className="additional-services">
          <h3 className="additional-services-heading">Additional Services</h3>
          <div className="additional-services-list">
            {additionalServices.map(s => (
              <div className="additional-service-item" key={s.title}>
                <div className="additional-service-content">
                  <h4>{s.title}</h4>
                  <p>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="services-cta">
          <p>Don't see your condition listed? Contact us — we treat many more conditions virtually.</p>
          <a href="#contact" className="btn btn-primary">Ask About Your Condition</a>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
