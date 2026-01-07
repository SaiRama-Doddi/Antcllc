import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroImages = [
  'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767787622/1_qmlqls.jpg',
  'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767787623/2_uuxtae.jpg',
  'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767787624/3_bgwx4t.jpg',

];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="flex h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {heroImages.map((image, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent">
              <div className="container mx-auto px-4 lg:px-8 h-full flex items-center">
                <div className="max-w-2xl">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    Building Tomorrow's
                    <span className="text-yellow-500 block">Infrastructure</span>
                  </h1>
                  <p className="text-xl text-gray-300 mb-8">
                    Excellence in construction and infrastructure development with ISO certified quality standards
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105">
                      Our Projects
                    </button>
                    <button className="bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold px-8 py-4 rounded-lg transition-all">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-yellow-500/90 text-white p-3 rounded-full transition-all backdrop-blur-sm group"
      >
        <ChevronLeft className="w-6 h-6 group-hover:text-black" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-yellow-500/90 text-white p-3 rounded-full transition-all backdrop-blur-sm group"
      >
        <ChevronRight className="w-6 h-6 group-hover:text-black" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index
                ? 'bg-yellow-500 w-12'
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
