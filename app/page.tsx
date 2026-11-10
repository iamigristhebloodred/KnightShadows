import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import Timeline from '@/components/Timeline';
import Governance from '@/components/Governance';
import Testimonials from '@/components/Testimonials';
import Sponsors from '@/components/Sponsors';
import News from '@/components/News';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Stats />
      <Features />
      <Timeline />
      <Governance />
      <Testimonials />
      <News />
      <Sponsors />
      <CTA />
      <Footer />
    </main>
  );
}
