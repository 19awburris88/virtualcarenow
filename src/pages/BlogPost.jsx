import { useParams, Link } from 'react-router-dom';
import { POSTS } from '../data/posts';
import { INTAKEQ_URL, PHONE, PHONE_HREF } from '../data/constants';
import logo from '../assets/vnc-logo-nav.webp';

export default function BlogPost() {
  const { slug } = useParams();
  const post = POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="blog-404">
        <p>Article not found.</p>
        <Link to="/#blog">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <>
      <header className="blog-post-nav">
        <div className="blog-post-nav-inner">
          <a href="/" className="blog-post-logo">
            <img src={logo} alt="Virtual Care Now" height={32} />
          </a>
          <a href={PHONE_HREF} className="blog-post-phone">{PHONE}</a>
          <a href={INTAKEQ_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Book Now
          </a>
        </div>
      </header>

      <main className="blog-post-main">
        <div className="blog-post-hero">
          <div className="blog-post-hero-inner">
            <Link to="/#blog" className="blog-post-back">
              ← Back to Blog
            </Link>
            <span className="blog-tag">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="blog-post-date">{post.date} · Virtual Care Now</p>
          </div>
        </div>

        <div className="blog-post-body">
          <div className="blog-post-content">
            {post.sections.map((section, i) => (
              <div key={i} className="blog-post-section">
                {section.heading && <h2>{section.heading}</h2>}
                {section.body && <p>{section.body}</p>}
                {section.list && (
                  <ul>
                    {section.list.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                )}
              </div>
            ))}

            <div className="blog-post-cta">
              <h3>Ready to be seen from home?</h3>
              <p>
                Dr. Grundy is available 7 days a week, 5 AM to midnight EST.
                Book a virtual visit in minutes.
              </p>
              <a
                href={INTAKEQ_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="blog-post-footer">
        <div className="blog-post-footer-inner">
          <a href="/" className="blog-post-logo">
            <img src={logo} alt="Virtual Care Now" height={28} />
          </a>
          <p>© {new Date().getFullYear()} Virtual Care Now. All rights reserved.</p>
          <a href="/" className="blog-post-home-link">← Back to Home</a>
        </div>
      </footer>
    </>
  );
}
