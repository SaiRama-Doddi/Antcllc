import Sidebar from '../../components/Sidebar';
import { navigationItems } from '../../types/navigation';
import { Eye, Target, Lightbulb } from 'lucide-react';
import { useState } from 'react';
import { Menu } from 'lucide-react';

export default function OurVision() {
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
          <Sidebar title="About Us" items={aboutItems}   isOpen={sidebarOpen}
  onClose={() => setSidebarOpen(false)} />

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-8 lg:p-12">
              
              {/* Page Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-yellow-500">Vision</span>
              </h1>

              <div className="space-y-12">

                {/* Vision */}
                <div className="bg-gradient-to-r from-yellow-500/20 to-transparent border-l-4 border-yellow-500 p-6 rounded-r-xl">
                  <Eye className="w-16 h-16 text-yellow-500 mb-4" />
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Vision Statement
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    To be the best and most trusted company in the construction
                    industry, recognized for excellence, reliability, and
                    professionalism. Our vision is to transform focused ideas into
                    reality and consistently exceed expectations for our clients,
                    consultants, and staff while setting new benchmarks in quality
                    and performance.
                  </p>
                </div>

                {/* Mission */}
                <div className="bg-gradient-to-r from-yellow-500/20 to-transparent border-l-4 border-yellow-500 p-6 rounded-r-xl">
                  <Target className="w-16 h-16 text-yellow-500 mb-4" />
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Mission Statement
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Our mission is to convert our clients’ visions into reality by
                    delivering high-quality construction solutions with precision,
                    integrity, and commitment. We work collaboratively with
                    consultants and stakeholders, empowering our staff to achieve
                    outstanding results while ensuring safety, quality, and timely
                    project delivery.
                  </p>
                </div>

                {/* Values */}
                <div>
                  <Lightbulb className="w-16 h-16 text-yellow-500 mb-6" />
                  <h2 className="text-3xl font-bold text-yellow-500 mb-6">
                    Our Values
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-black/40 border border-yellow-500/20 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-3">
                        Client First
                      </h3>
                      <p className="text-gray-400">
                        We always work in the best interests of our clients and
                        prioritize their needs at every stage of the project.
                      </p>
                    </div>

                    <div className="bg-black/40 border border-yellow-500/20 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-3">
                        Excellence in Service
                      </h3>
                      <p className="text-gray-400">
                        We are committed to delivering excellent service and
                        superior quality in every project we undertake.
                      </p>
                    </div>

                    <div className="bg-black/40 border border-yellow-500/20 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-3">
                        People & Performance
                      </h3>
                      <p className="text-gray-400">
                        We employ, develop, and reward top performers, creating an
                        environment that encourages growth, accountability, and
                        success.
                      </p>
                    </div>

                    <div className="bg-black/40 border border-yellow-500/20 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-3">
                        Focus to Reality
                      </h3>
                      <p className="text-gray-400">
                        We turn focused thoughts and ideas into reality through
                        disciplined execution, innovation, and teamwork.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Commitment */}
                <div className="text-gray-300 text-lg leading-relaxed space-y-4">
                  <h2 className="text-3xl font-bold text-yellow-500 mb-4">
                    Our Commitment
                  </h2>
                  <p>
                    We are committed to building long-term relationships with our
                    clients, consultants, and employees by maintaining trust,
                    transparency, and consistency in everything we do.
                  </p>
                  <p>
                    Through dedication, continuous improvement, and a strong value
                    system, we aim to position ourselves as a leading name in the
                    construction industry and a preferred partner for quality-driven
                    projects.
                  </p>
                </div>

              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
