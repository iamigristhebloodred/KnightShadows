import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import ArchitectureSlider from '@/components/ArchitectureSlider';
import OpenSourceSection from '@/components/OpenSourceSection';
import ReleasesSection from '@/components/ReleasesSection';
import PreFooterCTA from '@/components/PreFooterCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--ks-bg)] text-[var(--ks-text)]">
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <ArchitectureSlider />
        <OpenSourceSection />
        <ReleasesSection />
      </main>
      <PreFooterCTA />
      <Footer />
    </div>
  );
}
