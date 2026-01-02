import HeroCarousel from '../components/HeroCarousel';
import ParallaxSection from '../components/ParallaxSection';
import CategoryCards from '../components/CategoryCards';
import Gallery from '../components/Gallery';

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <ParallaxSection />
      <CategoryCards />
      <Gallery />
    </div>
  );
}
