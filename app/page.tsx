import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Work from '@/components/Work';
import Impact from '@/components/Impact';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f9f5]">
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Impact />
      <Contact />
      <Footer />
    </main>
  );
}
