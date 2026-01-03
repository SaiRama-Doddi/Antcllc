import Sidebar from '../../components/Sidebar';
import { navigationItems } from '../../types/navigation';
import { MapPin, Calendar, DollarSign } from 'lucide-react';
import { useState } from 'react';
import { Menu } from 'lucide-react';

const ongoingProjects = [
  {
    title: 'Construction of Gulf College Campus – Mabela',
    value: 'R.O 6,000,000.000',
    duration: '4 Years',
    client: 'Gulf College',
    consultant: 'DG BIM Engineering Consultancy',
    progress: '55%',
  },
  {
    title: 'Construction of Residential Complex (9 Villas) – North Azaiba',
    value: 'R.O 570,197.000',
    duration: '18 Months',
    client: 'Mr. Najeeb Abdulla Almulla',
    consultant: 'GHIMAR Enterprises',
    progress: '65%',
  },
  {
    title: 'Refurbishment of Head Office – Suhail Bhawan Group (Holding) LLC, Ruwi',
    value: 'R.O 505,000.000',
    duration: '10 Months',
    client: 'Suhail Bhawan Group Holding LLC',
    consultant: 'DG BIM Engineering Consultancy',
    progress: '70%',
  },
  {
    title: 'Construction of Al Batinah International School – Sohar',
    value: 'R.O 5,019,760.000',
    duration: '8 Months',
    client: 'M/S Sohar Aluminum',
    consultant: 'DG BIM Engineering Consultancy',
    progress: '45%',
  },
  {
    title: 'Construction of Warehouse for Genetco – Sohar',
    value: 'R.O 410,000.000',
    duration: '4 Months',
    client: 'Genetco',
    consultant: 'DG BIM Engineering Consultancy',
    progress: '60%',
  },
];

export default function OngoingProjects() {
  const projectItems =
    navigationItems.find(item => item.label === 'Projects')?.subItems || [];
    const [sidebarOpen, setSidebarOpen] = useState(false);


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <button
  onClick={() => setSidebarOpen(true)}
  className="lg:hidden mb-6 flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-lg"
>
  <Menu size={20} />
 Projects
</button>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar */}
          <Sidebar title="Projects" items={projectItems} isOpen={sidebarOpen}
  onClose={() => setSidebarOpen(false)}/>

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-8 lg:p-12">

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ongoing <span className="text-yellow-500">Projects</span>
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed mb-12">
                A snapshot of our ongoing projects reflecting our active
                contribution to educational, residential, commercial, and
                infrastructure development across Oman.
              </p>

              {/* PROJECT LIST */}
              <div className="space-y-6">
                {ongoingProjects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-black/40 border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/50 transition-all"
                  >
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {project.title}
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4 text-gray-300 mb-6">
                      <div className="flex items-center">
                        <DollarSign className="w-5 h-5 text-yellow-500 mr-3" />
                        <span><strong>Project Value:</strong> {project.value}</span>
                      </div>

                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 text-yellow-500 mr-3" />
                        <span><strong>Duration:</strong> {project.duration}</span>
                      </div>

                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 text-yellow-500 mr-3" />
                        <span><strong>Client:</strong> {project.client}</span>
                      </div>

                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 text-yellow-500 mr-3" />
                        <span><strong>Consultant:</strong> {project.consultant}</span>
                      </div>
                    </div>

                    {/* Progress */}
                    <div>
                      <div className="flex justify-between text-sm text-gray-400 mb-2">
                        <span>Project Progress</span>
                        <span>{project.progress}</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-3 rounded-full transition-all"
                          style={{ width: project.progress }}
                        />
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
