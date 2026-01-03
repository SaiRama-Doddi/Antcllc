import Sidebar from '../../components/Sidebar';
import { navigationItems } from '../../types/navigation';
import { Calendar, Tag } from 'lucide-react';
import { useState } from 'react';
import { Menu } from 'lucide-react';

const newsItems = [
  {
    title: 'ANTCLLC Wins Major Infrastructure Contract Worth $500M',
    date: 'December 15, 2025',
    category: 'Business News',
    image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'Company secures landmark contract for metro expansion project in downtown district.',
  },
  {
    title: 'Annual Excellence Awards Ceremony 2025',
    date: 'November 28, 2025',
    category: 'Events',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'Celebrating outstanding achievements and recognizing team excellence across all departments.',
  },
  {
    title: 'Sustainable Building Practices Workshop',
    date: 'November 10, 2025',
    category: 'Events',
    image: 'https://images.pexels.com/photos/236381/pexels-photo-236381.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'Industry experts gather to discuss innovative approaches to sustainable construction.',
  },
  {
    title: 'ISO Certification Renewed for Another Year',
    date: 'October 20, 2025',
    category: 'Achievements',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'ANTCLLC maintains its commitment to quality management systems with successful renewal.',
  },
  {
    title: 'Community Outreach Program Launch',
    date: 'September 15, 2025',
    category: 'CSR',
    image: 'https://images.pexels.com/photos/1169084/pexels-photo-1169084.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'New initiative focuses on skill development and employment opportunities for local communities.',
  },
  {
    title: 'Technology Innovation Summit 2025',
    date: 'August 5, 2025',
    category: 'Events',
    image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'Exploring cutting-edge construction technologies and digital transformation strategies.',
  },
];

export default function NewsEvents() {
  const mediaItems = navigationItems.find(item => item.label === 'Media')?.subItems || [];
  const [sidebarOpen, setSidebarOpen] = useState(false);


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <button
  onClick={() => setSidebarOpen(true)}
  className="lg:hidden mb-6 flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-lg"
>
  <Menu size={20} />
  Media
</button>

        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar title="Media" items={mediaItems}  isOpen={sidebarOpen}
  onClose={() => setSidebarOpen(false)}/>

          <main className="flex-1">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-8 lg:p-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                News & <span className="text-yellow-500">Events</span>
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed mb-12">
                Stay updated with the latest news, events, and achievements from ANTCLLC. Discover our journey of excellence and innovation in the construction industry.
              </p>

              <div className="space-y-8">
                {newsItems.map((item, index) => (
                  <article key={index} className="bg-black/40 border border-yellow-500/20 rounded-xl overflow-hidden hover:border-yellow-500/50 transition-all">
                    <div className="md:flex">
                      <div className="md:w-2/5">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-3/5 p-6">
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="bg-yellow-500/20 text-yellow-500 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                            <Tag className="w-3 h-3 mr-1" />
                            {item.category}
                          </span>
                          <span className="text-gray-400 text-sm flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-yellow-500" />
                            {item.date}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3 hover:text-yellow-500 transition-colors cursor-pointer">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 mb-4">{item.excerpt}</p>
                        <button className="text-yellow-500 font-semibold hover:text-yellow-400 transition-colors flex items-center">
                          Read More
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
