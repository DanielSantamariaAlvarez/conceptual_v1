import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CollectionCarousel from '@/components/CollectionCarousel';
import { getCarouselImages } from '@/components/getCarouselImages';

export default function Home() {
  const images = getCarouselImages();

  return (
    <main>
      <Navbar />
      <HeroSection />
      <CollectionCarousel images={images} />
    </main>
  );
} 