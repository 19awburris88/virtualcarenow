import { useState } from 'react';
import logo from '../assets/vnc-logo-nav.webp';
import { PHONE, PHONE_HREF } from '../data/constants';

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/#contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-brand" onClick={close}>
            <img src={logo} alt="Virtual Care Now" className="nav-logo" />
          </a>

          <ul className="nav-links">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a href={PHONE_HREF} className="nav-phone">
              <PhoneIcon />
              {PHONE}
            </a>
            <a href="/#contact" className="btn btn-primary">Book Now</a>
          </div>

          <button
            className={`hamburger${open ? ' is-open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-nav${open ? ' is-open' : ''}`} aria-hidden={!open}>
        {links.map(l => (
          <a key={l.href} href={l.href} className="mobile-nav-link" onClick={close}>
            {l.label}
          </a>
        ))}
        <div className="mobile-nav-footer">
          <a href={PHONE_HREF} className="btn btn-outline btn-full">
            <PhoneIcon />
            Call {PHONE}
          </a>
          <a href="/#contact" className="btn btn-primary btn-full" onClick={close}>
            Book Now
          </a>
        </div>
      </div>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
    </svg>
  );
}
