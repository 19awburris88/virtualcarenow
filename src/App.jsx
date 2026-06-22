import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import HealthCoaching from './components/HealthCoaching';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import WhyUs from './components/WhyUs';
import Insurance from './components/Insurance';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <HealthCoaching />
        <Services />
        <HowItWorks />
        <Benefits />
        <WhyUs />
        <Insurance />
        <Testimonials />
        <Blog />
        <FAQ />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
