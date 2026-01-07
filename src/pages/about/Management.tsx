import Sidebar from '../../components/Sidebar';
import { navigationItems } from '../../types/navigation';

import { useState } from 'react';
import { Menu } from 'lucide-react';



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
             {/* BIG IMAGE SECTION */}
<div className="relative h-[600px] md:h-[1500px] lg:h-[1500px]">

  <img
    src="/chart.jpg"
    alt="Management Team"
    className="
      w-full h-full object-cover
      brightness-110 contrast-110 saturate-110
    "
  />

  {/* Softer gradient overlay (NOT full black) */}
  <div className="
    absolute inset-0
    bg-gradient-to-t
    from-black/40
    via-black/20
    to-transparent
  " />

</div>


           
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
