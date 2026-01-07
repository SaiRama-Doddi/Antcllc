import Sidebar from '../../components/Sidebar';
import { navigationItems } from '../../types/navigation';
import { useState } from 'react';
import { Menu } from 'lucide-react';



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
             <div className="flex items-center justify-center h-64">
  <p className="text-3xl font-semibold text-yellow-500 tracking-wide">
    Coming Soon
  </p>
</div>

           
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
