const steps = [
  {
    number: '01',
    title: 'Book Online',
    description:
      'Request a virtual appointment that fits your schedule — same-day visits are often available.',
  },
  {
    number: '02',
    title: 'Meet Virtually',
    description:
      'Connect with Dr. Grundy by video or digital communication from wherever you are.',
  },
  {
    number: '03',
    title: 'Get Your Care Plan',
    description:
      'Receive a personalized care plan with treatment guidance, education, follow-up steps, or referrals.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-how">
      <div className="container">
        <div className="how-grid">
          <div className="how-intro">
            <p className="eyebrow how-eyebrow">Simple Process</p>
            <h2>Care in three easy steps.</h2>
            <p>
              Virtual Care Now makes getting quality healthcare as simple as
              possible. No waiting rooms, no commuting — just convenient care
              delivered directly to you.
            </p>
            <a href="#contact" className="btn btn-white btn-lg">Get Started Today</a>
          </div>

          <div className="steps">
            {steps.map(s => (
              <div className="step-card" key={s.number}>
                <div className="step-number">{s.number}</div>
                <div className="step-content">
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
