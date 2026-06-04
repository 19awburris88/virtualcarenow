import { useState } from 'react';

const faqs = [
  {
    question: 'How do virtual appointments work?',
    answer:
      'After booking, you will receive a link to connect with Dr. Grundy by video call or digital communication at your scheduled time. The visit works just like an in-person appointment — you describe your symptoms, Dr. Grundy examines you, and together you develop a care plan.',
  },
  {
    question: 'What conditions can be treated virtually?',
    answer:
      'Virtual Care Now treats a wide range of acute and chronic conditions including colds and flu, sore throats, sinus infections, allergies, UTIs, yeast infections, pink eye, rashes, and more. Dr. Grundy also provides health coaching, medication refills for non-controlled substances, vitamin deficiency support, and referrals.',
  },
  {
    question: 'Do I need insurance to be seen?',
    answer:
      'No. Virtual Care Now currently operates on a self-pay model with transparent, affordable pricing. Insurance is not required. Future phases of the practice will include insurance acceptance to make care even more accessible.',
  },
  {
    question: 'Can prescriptions be provided?',
    answer:
      'Yes. Dr. Grundy is authorized to prescribe medications where clinically appropriate, including antibiotics and other treatments for common conditions. Prescriptions are sent electronically to your preferred pharmacy.',
  },
  {
    question: 'How quickly can I be seen?',
    answer:
      'Same-day appointments are often available. Virtual Care Now is open Monday through Sunday from 5:00 AM to 12:00 AM Eastern Time, making it easy to access care at a time that works for your schedule.',
  },
  {
    question: 'What technology do I need for a visit?',
    answer:
      'Any device with a camera and internet connection works — a smartphone, tablet, or computer. No special apps are required in most cases. You\'ll receive clear instructions when you book your appointment.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(prev => (prev === i ? null : i));

  return (
    <section id="faq" className="section-faq">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Common Questions</p>
          <h2>Frequently asked questions.</h2>
          <p>
            Everything you need to know about getting care virtually.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <div className="faq-item" key={f.question}>
              <button
                className={`faq-question${open === i ? ' open' : ''}`}
                onClick={() => toggle(i)}
                aria-expanded={open === i}
              >
                <span>{f.question}</span>
                <ChevronIcon className={`faq-chevron${open === i ? ' rotated' : ''}`} />
              </button>
              <div className={`faq-answer${open === i ? ' open' : ''}`} aria-hidden={open !== i}>
                <p>{f.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-footer">
          <p>Still have questions?</p>
          <a href="#contact" className="btn btn-outline">Contact Us</a>
        </div>
      </div>
    </section>
  );
}

function ChevronIcon({ className }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
