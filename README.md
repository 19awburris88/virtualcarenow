# Virtual Care Now

Marketing website for **Virtual Care Now** — a virtual urgent care practice led by Dr. Jeni Grundy, DNP, AGPC NP-C.

## About

Virtual Care Now offers fast, affordable virtual urgent care from an experienced nurse practitioner. Available Monday–Sunday, 5:00 AM–12:00 AM Eastern Time.

**Contact**
- Phone: 1-800-280-5402
- Email: info@virtualcare-now.com

## Tech Stack

- [React](https://react.dev/) — UI
- [Vite](https://vitejs.dev/) — build tool & dev server
- Vanilla CSS with custom design tokens

## Project Structure

```
src/
├── assets/          # Logo and image assets
├── components/
│   ├── Nav.jsx      # Sticky navbar with mobile menu
│   ├── Hero.jsx     # Hero section with availability card
│   ├── Services.jsx # Conditions treated + additional services
│   ├── About.jsx    # About Dr. Grundy
│   ├── Benefits.jsx # Why choose Virtual Care Now
│   ├── HowItWorks.jsx
│   ├── Testimonials.jsx
│   ├── Insurance.jsx
│   ├── FAQ.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── App.css          # All styles with CSS custom properties
└── main.jsx
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```
