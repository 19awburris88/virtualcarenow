const reasons = [
  {
    icon: <AwardIcon />,
    title: 'Highly Credentialed Provider',
    description:
      'Dr. Grundy holds a Doctor of Nursing Practice degree and is board-certified as an Adult-Gerontology Primary Care Nurse Practitioner.',
  },
  {
    icon: <ClockIcon />,
    title: 'Extended Hours',
    description:
      'Open 7 days a week, 5am to midnight EST. Care is available when you need it most — early mornings, evenings, and weekends.',
  },
  {
    icon: <UserIcon />,
    title: 'Personalized Attention',
    description:
      'Every visit includes direct, one-on-one time with your provider — not a rushed assembly-line appointment.',
  },
  {
    icon: <SmartphoneIcon />,
    title: 'Truly Convenient Access',
    description:
      'No travel, no parking, no waiting. Connect from your phone, tablet, or computer anywhere you have internet.',
  },
  {
    icon: <ZapIcon />,
    title: 'Technology-Enabled Healthcare',
    description:
      'A modern platform built for the way patients live today — digital communication, virtual visits, and fast follow-up.',
  },
];

export default function WhyUs() {
  return (
    <section className="section-why">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">The Virtual Care Now Difference</p>
          <h2>Why patients trust us with their care.</h2>
          <p>
            We built a practice that puts patients first — combining clinical
            expertise with the convenience modern life demands.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map(r => (
            <div className="why-card" key={r.title}>
              <div className="why-icon">{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function SmartphoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
