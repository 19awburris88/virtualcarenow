import logo from '../assets/vnc-logo-nav.webp';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <a href="#" className="footer-brand">
          <img src={logo} alt="Virtual Care Now" className="footer-logo" />
        </a>

        <ul className="footer-links">
          {navLinks.map(l => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <p className="footer-copy">© {new Date().getFullYear()} Virtual Care Now. All rights reserved.</p>
      </div>
    </footer>
  );
}
