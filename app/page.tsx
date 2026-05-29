import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { SignatureDishes } from '../components/SignatureDishes';
import { DiningExperience } from '../components/DiningExperience';
import { Reviews } from '../components/Reviews';
import { Gallery } from '../components/Gallery';
import { Menu } from '../components/Menu';
import { Location } from '../components/Location';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <SignatureDishes />
      <DiningExperience />
      <Reviews />
      <Gallery />
      <Menu />
      <Location />
      <Footer />
    </main>
  );
}
