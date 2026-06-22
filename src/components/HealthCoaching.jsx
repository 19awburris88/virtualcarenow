import { INTAKEQ_URL } from '../data/constants';

const topics = [
  'Weight loss',
  'Lifestyle changes',
  'Stress management',
  'Setting & achieving health goals',
  'Managing chronic conditions',
  'Addressing health-related fears',
];

export default function HealthCoaching() {
  return (
    <section id="health-coaching" className="section-coaching">
      <div className="container">
        <div className="coaching-grid">

          <div className="coaching-copy">
            <p className="eyebrow">Health Coaching</p>
            <h2>Personalized wellness guidance with Dr. Grundy</h2>
            <p>
              A virtual health coach is a professional who supports and guides you in achieving your health
              and wellness goals through online platforms. Dr. Jeni Grundy, an experienced Nurse Practitioner
              with over 15 years of healthcare experience, is a doctoral prepared nurse practitioner who
              focused her doctorate on health coaching.
            </p>
            <p>
              With her expertise, Dr. Grundy can help you explore various topics such as weight loss,
              lifestyle changes, stress management, setting and achieving health goals, managing chronic
              conditions, and addressing fears related to your health. Health coaching provides personalized
              strategies and support to empower you to make lasting changes and improve your overall
              well-being.
            </p>
            <p>
              By working with a health coach like Dr. Grundy, you can gain valuable insights into your
              body and health, enabling you to lead a healthier and more fulfilling life. Take the first
              step towards a healthier, happier you — let her expertise and encouragement guide you on
              your journey to achieving your health and wellness goals.
            </p>
            <a
              href={INTAKEQ_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg coaching-cta"
            >
              Book a Health Coaching Session
            </a>
          </div>

          <div className="coaching-aside">
            <div className="coaching-topics-card">
              <p className="coaching-topics-heading">Topics we cover</p>
              <ul className="coaching-topics-list">
                {topics.map(t => (
                  <li key={t} className="coaching-topic-item">
                    <LeafIcon />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="coaching-dr-tag">
                <div className="coaching-dr-avatar">JG</div>
                <div>
                  <div className="coaching-dr-name">Dr. Jeni S. Grundy</div>
                  <div className="coaching-dr-title">DNP, AGPC NP-C · Health Coach</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function LeafIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}
