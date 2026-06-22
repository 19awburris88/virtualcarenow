import { useState } from 'react';

const testimonials = [
  {
    quote:
      "I had a UTI on a Sunday evening and couldn't get into my regular doctor. Virtual Care Now had me set up with a prescription within the hour. Incredibly convenient and the provider was so thorough.",
    name: 'Sarah M.',
    location: 'Columbus, OH',
    initials: 'SM',
  },
  {
    quote:
      "As someone who works 12-hour shifts, finding time for a doctor visit is nearly impossible. Being able to schedule at 6am before work was a game changer. I got the care I needed without missing a single hour.",
    name: 'David K.',
    location: 'Pittsburgh, PA',
    initials: 'DK',
  },
  {
    quote:
      "Dr. Grundy took the time to actually listen and answer all my questions. It felt like a real appointment, not a rushed visit. I'll absolutely be coming back for future care.",
    name: 'Michelle R.',
    location: 'Charlotte, NC',
    initials: 'MR',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(i => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(i => (i + 1) % testimonials.length);

  return (
    <section className="section-testimonials">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Patient Experiences</p>
          <h2>What patients are saying.</h2>
          <p>Real experiences from patients who chose virtual care.</p>
        </div>

        <div className="testimonials-viewport">
          <div
            className="testimonials-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map(t => (
              <div className="testimonial-card" key={t.name}>
                <div className="stars">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.initials}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-location">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonials-controls">
          <button className="testimonials-arrow" onClick={prev} aria-label="Previous testimonial">
            <ChevronLeftIcon />
          </button>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testimonials-dot${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
          <button className="testimonials-arrow" onClick={next} aria-label="Next testimonial">
            <ChevronRightIcon />
          </button>
        </div>

        <p className="testimonials-disclaimer">
          Testimonials are representative patient experiences. Individual results may vary.
        </p>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
