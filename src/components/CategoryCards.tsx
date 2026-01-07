import { Link } from 'react-router-dom';
import { Users, Briefcase, Image, Award } from 'lucide-react';

const categories = [
  {
    icon: Award,
    title: 'Our Groups',
    description: 'Learn about our vision, mission and leadership',
    link: '/contact/groups',
    gradient: 'from-yellow-400 to-yellow-600',
     image: "/home.jpeg",
  },
  {
    icon: Briefcase,
    title: 'Busness Conepts',
    description: 'Explore our ongoing and executed projects',
    link: '/contact/business',
    gradient: 'from-yellow-500 to-amber-600',
       image: "/home.jpeg",
  },
  {
    icon: Image,
    title: 'Qualty & Safety',
    description: 'View our gallery, news and events',
   link: '/contact/quality',
    gradient: 'from-amber-400 to-orange-500',
       image: "/home.jpeg",
  },
  {
    icon: Users,
    title: 'Photo Gallery',
    description: 'Join our team and grow with us',
 
        link: '/media/gallery',
    gradient: 'from-yellow-600 to-amber-700',
       image: "/home.jpeg",
  },
];

export default function CategoryCards() {
  return (
    <section className="py-20 bg-black">
      
      {/* Heading */}
      <div className="text-center mb-14 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Explore <span className="text-yellow-500">ANTCLLC</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover our comprehensive range of services and expertise
        </p>
      </div>

      {/* 🔥 TIGHT CIRCULAR CARDS */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-10">

        {categories.map((item, index) => (
          <Link key={index} to={item.link} className="group">

            <div
              className="relative w-52 h-52 rounded-full overflow-hidden
                         border-[18px] border-gray-300/70
                         shadow-[0_0_25px_rgba(0,0,0,0.8)]
                         transition-transform duration-500
                         group-hover:scale-105"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/55" />

              {/* Texture overlay */}
              <div className="absolute inset-0 opacity-25
                              bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)]
                              bg-[size:4px_4px]" />

              {/* Text */}
              <div className="relative z-10 flex items-center justify-center h-full px-5 text-center">
                <h3 className="text-lg font-bold text-white leading-snug">
                  <span className="text-yellow-500">
                    {item.title.charAt(0)}
                  </span>
                  {item.title.slice(1)}
                </h3>
              </div>
            </div>

          </Link>
        ))}

      </div>
    </section>
  );
}
