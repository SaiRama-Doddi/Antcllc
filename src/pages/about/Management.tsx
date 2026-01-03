import Sidebar from '../../components/Sidebar';
import { navigationItems } from '../../types/navigation';
import { Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import { Menu } from 'lucide-react';

const teamMembers = [
  {
    name: 'John Anderson',
    position: 'Chairman & CEO',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Over 30 years of experience in construction and infrastructure development',
  },
  {
    name: 'Sarah Mitchell',
    position: 'Chief Operating Officer',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Expert in operational excellence and project management with 20+ years experience',
  },
  {
    name: 'Michael Chen',
    position: 'Chief Financial Officer',
    image: 'https://images.pexels.com/photos/2182981/pexels-photo-2182981.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Financial strategist with extensive experience in infrastructure financing',
  },
  {
    name: 'Emily Rodriguez',
    position: 'VP of Engineering',
    image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Leading technical excellence with innovative engineering solutions',
  },
  {
    name: 'David Thompson',
    position: 'VP of Operations',
    image: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Specialist in construction operations and quality assurance',
  },
  {
    name: 'Lisa Wang',
    position: 'VP of Business Development',
    image: 'https://images.pexels.com/photos/3756682/pexels-photo-3756682.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Strategic growth expert driving business expansion and partnerships',
  },
];

export default function Management() {
  const aboutItems =
    navigationItems.find(item => item.label === 'About Us')?.subItems || [];
    const [sidebarOpen, setSidebarOpen] = useState(false);


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <button
  onClick={() => setSidebarOpen(true)}
  className="lg:hidden mb-6 flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-lg"
>
  <Menu size={20} />
  About Menu
</button>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <Sidebar title="About Us" items={aboutItems}  isOpen={sidebarOpen}
  onClose={() => setSidebarOpen(false)} />

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl overflow-hidden">

              {/* BIG IMAGE SECTION */}
              <div className="relative h-[400px] md:h-[980px] lg:h-[980px]">
                <img
                  src="/chart.jpg"   // 🔁 replace with your image path
                  alt="Management Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute bottom-8 left-8">
                  <h1 className="text-4xl md:text-5xl font-bold text-white">
                    Our <span className="text-yellow-500">Management Team</span>
                  </h1>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8 lg:p-12">
                <p className="text-gray-300 text-lg leading-relaxed mb-12">
                  Meet the experienced professionals who lead ANTCLLC with vision,
                  expertise, and commitment to excellence. Our management team
                  brings together decades of industry knowledge and a shared passion
                  for delivering high-quality construction solutions.
                </p>

                {/* TEAM GRID */}
                <div className="grid md:grid-cols-2 gap-8">
                  {teamMembers.map((member, index) => (
                    <div
                      key={index}
                      className="group bg-gradient-to-br from-black to-gray-900 border border-yellow-500/20 rounded-xl overflow-hidden hover:border-yellow-500/50 transition-all duration-300"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {member.name}
                        </h3>
                        <p className="text-yellow-500 font-semibold mb-3">
                          {member.position}
                        </p>
                        <p className="text-gray-400 mb-4">{member.bio}</p>
                        <div className="flex space-x-3">
                          <a
                            href="#"
                            className="bg-yellow-500/10 hover:bg-yellow-500 text-yellow-500 hover:text-black p-2 rounded-lg transition-all"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                          <a
                            href="#"
                            className="bg-yellow-500/10 hover:bg-yellow-500 text-yellow-500 hover:text-black p-2 rounded-lg transition-all"
                          >
                            <Mail className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
