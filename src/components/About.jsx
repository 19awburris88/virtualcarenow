import headshot from '../assets/jeni.avif';

const highlights = [
  'Doctor of Nursing Practice (DNP)',
  'Board-certified Adult-Gerontology Primary Care NP',
  'Experienced healthcare leader and educator',
  'Dedicated to improving healthcare accessibility',
];

const credentials = [
  { label: 'Degree', value: 'Doctor of Nursing Practice' },
  { label: 'Certification', value: 'Board-Certified AGPC NP-C' },
  { label: 'Specialty', value: 'Adult-Gerontology Primary Care' },
  { label: 'Practice Type', value: 'Telehealth & Virtual Care' },
];

export default function About() {
  return (
    <section id="about" className="section-about">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual">
            <div className="provider-photo-wrap">
              <img
                src={headshot}
                alt="Dr. Jeni Grundy, DNP, AGPC NP-C"
                className="provider-photo"
              />
              <div className="provider-overlay">
                <div className="provider-overlay-name">Dr. Jeni S. Grundy</div>
                <div className="provider-overlay-title">DNP, AGPC NP-C</div>
              </div>
            </div>
            <div className="provider-creds">
              {credentials.map(c => (
                <div key={c.label} className="cred-row">
                  <span className="cred-label">{c.label}</span>
                  <span className="cred-value">{c.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-copy">
            <p className="eyebrow">About Virtual Care Now</p>
            <h2>Accessible, affordable,<br />impact-driven care.</h2>
            <p>
              Virtual Care Now is an independently owned telehealth practice led by
              Dr. Jeni S. Grundy — a Doctor of Nursing Practice prepared, board-certified
              Adult-Gerontology Primary Care Nurse Practitioner with extensive experience
              in healthcare leadership and patient care.
            </p>
            <p>
              The practice was built on a simple belief: every patient deserves fast,
              high-quality care delivered with personal attention. Virtual Care Now makes
              that possible through convenient video and digital communication, helping
              patients receive professional care without leaving home.
            </p>
            <div className="about-highlights">
              {highlights.map(item => (
                <div key={item} className="highlight-item">
                  <CheckCircleIcon />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckCircleIcon() {
  return (
    <svg className="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
