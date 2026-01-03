import Sidebar from '../../components/Sidebar';
import { navigationItems } from '../../types/navigation';
import { MapPin, CheckCircle, Award } from 'lucide-react';
import { useState } from 'react';
import { Menu } from 'lucide-react';

const executedProjects = [
  {
    title: 'Construction of Residential & Commercial Complex – Wakaiba',
    value: 'R.O 3,200,000.000',
    duration: '18 Months',
    client: 'MB Holding Company LLC',
    consultant: 'Design Consultants',
  },
  {
    title: 'Construction of Industrial & Office Building – Rusayl',
    value: 'R.O 2,200,000.000',
    duration: '12 Months',
    client: 'Cameron Service Middle East LLC',
    consultant: 'Design Consultants',
  },
  {
    title: 'MB Petroleum Services – North Azaiba',
    value: 'R.O 1,160,000.000',
    duration: '8 Months',
    client: 'MB Holding Company LLC',
    consultant: 'Design Consultants',
  },
  {
    title: 'Various Civil Works – Mawarid Mining Plant, Sohar',
    value: 'R.O 1,200,000.000',
    duration: 'Multiple Works',
    client: 'Mawarid Mining',
    consultant: '—',
  },
  {
    title: 'Construction of Tailing Dam – Sohar',
    value: 'R.O 850,000.000',
    duration: '6 Months',
    client: 'Mawarid Mining',
    consultant: 'Renardet Engineering',
  },
  {
    title: 'Construction of Workshop & Buildings – Shinas',
    value: 'R.O 600,000.000',
    duration: '4 Months',
    client: 'Mawarid Mining',
    consultant: 'Design Consultants',
  },
  {
    title: 'Construction of Mosque & Buildings – Al Ghubrah',
    value: 'R.O 250,000.000',
    duration: '5 Months',
    client: 'MB Holding Company',
    consultant: 'Design Consultants',
  },
  {
    title: 'Construction of Chemical Laboratory – Sohar DGE Concentrator',
    value: 'R.O 90,000.000',
    duration: '3 Months',
    client: 'Mawarid Mining',
    consultant: 'Design Consultants',
  },
  {
    title: 'Workshop & Office Building – Nizwa',
    value: 'R.O 1,200,000.000',
    duration: '6 Months',
    client: 'United Engineering Services',
    consultant: 'Innovative International',
  },
  {
    title: 'Construction of Six Villas – Seeb',
    value: 'R.O 1,700,000.000',
    duration: '14 Months',
    client: 'MB Holding Company LLC',
    consultant: 'Rana Engineering Office',
  },
  {
    title: 'Auditorium & Supporting Facilities – Ruwi',
    value: 'R.O 720,000.000',
    duration: '9 Months',
    client: 'The Protestant Church Oman',
    consultant: 'Al Hatmy Engineering Consultancy',
  },
  {
    title: 'Extension of MB Holding Office – Azaiba',
    value: 'R.O 1,390,000.000',
    duration: '10 Months',
    client: 'MB Petroleum',
    consultant: 'Amjaad Engineering Consultancy',
  },
  {
    title: 'Extension of MB Holding Office – Azaiba (Phase II)',
    value: 'R.O 469,000.000',
    duration: '4 Months',
    client: 'MB Petroleum',
    consultant: 'Amjaad Engineering Consultancy',
  },
];

export default function ExecutedProjects() {
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
          <Sidebar title="Projects" items={projectItems}  isOpen={sidebarOpen}
  onClose={() => setSidebarOpen(false)} />

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-8 lg:p-12">

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Executed <span className="text-yellow-500">Projects</span>
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed mb-12">
                A selection of prestigious projects successfully executed by our
                company, reflecting our expertise, quality standards, and commitment
                to timely delivery across residential, commercial, industrial, and
                institutional sectors.
              </p>

              {/* PROJECT LIST */}
              <div className="space-y-6">
                {executedProjects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-black/40 border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/50 transition-all"
                  >
                    <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-green-400">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span className="font-semibold">Completed</span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                      <p><span className="text-yellow-500 font-semibold">Project Value:</span> {project.value}</p>
                      <p><span className="text-yellow-500 font-semibold">Duration:</span> {project.duration}</p>
                      <p><span className="text-yellow-500 font-semibold">Client:</span> {project.client}</p>
                      <p><span className="text-yellow-500 font-semibold">Consultant:</span> {project.consultant}</p>
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
