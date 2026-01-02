import { Link } from 'react-router-dom';
import { Users, Briefcase, Image, Award } from 'lucide-react';

const categories = [
  {
    icon: Award,
    title: 'About Us',
    description: 'Learn about our vision, mission and leadership',
    link: '/about/chairman-message',
    gradient: 'from-yellow-400 to-yellow-600',
  },
  {
    icon: Briefcase,
    title: 'Projects',
    description: 'Explore our ongoing and executed projects',
    link: '/projects/ongoing',
    gradient: 'from-yellow-500 to-amber-600',
  },
  {
    icon: Image,
    title: 'Media',
    description: 'View our gallery, news and events',
    link: '/media/gallery',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    icon: Users,
    title: 'Careers',
    description: 'Join our team and grow with us',
    link: '/careers',
    gradient: 'from-yellow-600 to-amber-700',
  },
];

export default function CategoryCards() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore <span className="text-yellow-500">ANTCLLC</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of services and expertise in construction and infrastructure development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="group relative"
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/50 transition-all duration-500 hover:scale-105">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl group-hover:bg-yellow-500/10 transition-all duration-500"></div>

                <div className="relative">
                  <div className="mb-6 inline-block">
                    <div className={`bg-gradient-to-br ${category.gradient} p-6 rounded-full transform group-hover:rotate-12 transition-transform duration-500`}>
                      <category.icon className="w-12 h-12 text-black" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {category.description}
                  </p>

                  <div className="mt-6 flex items-center text-yellow-500 group-hover:translate-x-2 transition-transform">
                    <span className="text-sm font-semibold">Explore More</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
