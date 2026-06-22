import { POSTS } from '../data/posts';

export default function Blog() {
  return (
    <section id="blog" className="section-blog">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Health Tips & Resources</p>
          <h2>From Dr. Grundy's desk</h2>
          <p>
            Evidence-based health tips and virtual care insights to help you stay
            informed and get the most from your care.
          </p>
        </div>

        <div className="blog-grid">
          {POSTS.map(post => (
            <article className="blog-card" key={post.slug}>
              <div className="blog-card-body">
                <span className="blog-tag">{post.category}</span>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-meta">
                  <span>{post.date}</span>
                  <a href="#blog" className="blog-card-link">
                    Read more <ArrowIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
