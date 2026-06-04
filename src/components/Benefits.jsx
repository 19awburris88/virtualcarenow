const benefits = [
  {
    icon: <HomeIcon />,
    title: 'Care from Home',
    description:
      'Receive quality medical care without leaving your house. All you need is a smartphone, tablet, or computer.',
  },
  {
    icon: <ClockIcon />,
    title: 'No Waiting Rooms',
    description:
      'Skip the long waits and crowded waiting areas. Virtual appointments mean your time is respected.',
  },
  {
    icon: <CalendarIcon />,
    title: 'Flexible Scheduling',
    description:
      'Available 7 days a week from 5am to midnight. Book early morning, evening, or weekend appointments.',
  },
  {
    icon: <DollarIcon />,
    title: 'Affordable Pricing',
    description:
      'Transparent, cash-pay pricing designed to make quality healthcare accessible to everyone.',
  },
  {
    icon: <HeartIcon />,
    title: 'Personalized Care',
    description:
      'Receive individual attention from a board-certified nurse practitioner — not a rushed clinic visit.',
  },
  {
    icon: <ShieldIcon />,
    title: 'Licensed & Certified',
    description:
      'Care from a highly credentialed provider with deep expertise in adult-gerontology primary care.',
  },
];

export default function Benefits() {
  return (
    <section className="section-benefits">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Why Patients Choose Us</p>
          <h2>Healthcare built around your life.</h2>
          <p>
            Virtual Care Now removes every barrier between you and the quality
            care you deserve.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map(b => (
            <div className="benefit-card" key={b.title}>
              <div className="benefit-icon-wrap">{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
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

function CalendarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function DollarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
