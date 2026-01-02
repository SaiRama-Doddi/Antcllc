import { useEffect, useState } from 'react';

export default function ParallaxSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/home.jpeg)',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative container mx-auto px-4 lg:px-8 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Excellence in Every
            <span className="text-yellow-500 block mt-2">Structure We Build</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            With decades of experience and ISO certification, we deliver world-class infrastructure projects that stand the test of time
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-500 mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-500 mb-2">25+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-500 mb-2">100+</div>
              <div className="text-gray-300">Expert Team</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-500 mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
