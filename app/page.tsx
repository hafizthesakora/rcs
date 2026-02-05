import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Video from '@/components/Video';
import Team from '@/components/Team';
import Projects from '@/components/Projects';
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
      <Video />
      <Team />
      <Projects />
      <Work />
      <Impact />
      <Contact />
      <Footer />
    </main>
  );
}
