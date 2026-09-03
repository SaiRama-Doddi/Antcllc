import Sidebar from '../../components/Sidebar';
import { navigationItems } from '../../types/navigation';
import { CheckCircle, Building2, Layers, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Menu } from 'lucide-react';

interface SubWork {
  name: string;
  value: string;
}

interface ExecutedProject {
  title: string;
  value: string;
  duration: string;
  client: string;
  consultant: string;
  projectManager?: string;
  subWorks?: SubWork[];
}

const executedProjects: ExecutedProject[] = [
  {
    title: '1. Construction of Residential and Commercial Complex at Wakaiba',
    value: 'R.O 3,200,000.000',
    duration: '18 Months',
    client: 'MB Holding Company LLC',
    consultant: 'Design Consultants',
  },
  {
    title: '2. Construction of Industrial and Office Building at Rusayl',
    value: 'R.O 2,200,000.000',
    duration: '12 Months',
    client: 'Cameron Service Middle East LLC',
    consultant: 'Design Consultants',
  },
  {
    title: '3. MB Petroleum Services, North Azaiba – Development of Office Premises, Additions, Alterations & Interior Decoration (Civil, Electrical, Mechanical, AC)',
    value: 'R.O 1,160,000.000',
    duration: '08 Months',
    client: 'MB Holding Company LLC',
    consultant: 'Design Consultants',
  },
  {
    title: '4. Various Civil Works at Mawarid Mining Plant at Sohar',
    value: 'R.O 1,200,000.000',
    duration: 'Multiple Phases',
    client: 'MB Holding Company LLC',
    consultant: 'Design Consultants',
    subWorks: [
      { name: 'A. Construction of sump tank for tailing dam', value: 'R.O 150,000.000' },
      { name: 'B. Construction of catch pit', value: 'R.O 50,000.000' },
      { name: 'C. Construction of bund wall and concrete floor for Floatation cell', value: 'R.O 75,000.000' },
      { name: 'D. Construction of foundations for copper concentrator', value: 'R.O 25,000.000' },
      { name: 'E. Extension of plant building', value: 'R.O 100,000.000' },
      { name: 'F. Extension of shed for chemical lab', value: 'R.O 50,000.000' },
      { name: 'G. Chain link fencing for scrap yard & Civil works', value: 'R.O 75,000.000' },
      { name: 'H. Construction of car parking shed', value: 'R.O 25,000.000' },
      { name: 'I. Refurbishment of Khabura farm for Mawarid mining', value: 'R.O 150,000.000' },
      { name: 'J. Dismantling and fixing new roof for OMC building', value: 'R.O 75,000.000' },
      { name: 'K. Concrete flooring for ROM pad', value: 'R.O 25,000.000' },
      { name: 'L. Construction of wash down bay', value: 'R.O 75,000.000' },
    ],
  },
  {
    title: '5. Construction of Tailing Dam at Sohar',
    value: 'R.O 850,000.000',
    duration: '06 Months',
    client: 'Mawarid Mining',
    consultant: 'Renardet Eng',
  },
  {
    title: '6. Construction of Workshop and Other Buildings at Shinas',
    value: 'R.O 600,000.000',
    duration: '04 Months',
    client: 'Mawarid Mining',
    consultant: 'Design Consultants',
  },
  {
    title: '7. Construction of Mosque and Other Buildings at Al Ghubrah for MB Petroleum',
    value: 'R.O 250,000.000',
    duration: '05 Months',
    client: 'MB Holding Company',
    consultant: 'Design Consultants',
  },
  {
    title: '8. Construction of Chemical Laboratory at Sohar DGE Concentrator',
    value: 'R.O 90,000.000',
    duration: '03 Months',
    client: 'Mawarid Mining',
    consultant: 'Design Consultants',
  },
  {
    title: '9. Construction of Workshop and Office Building at Nizwa',
    value: 'R.O 1,200,000.000',
    duration: '06 Months',
    client: 'United Engineering Services',
    consultant: 'Innovative International',
  },
  {
    title: '10. Construction of Six Villas at Seeb',
    value: 'R.O 1,700,000.000',
    duration: '14 Months',
    client: 'MB Holding Company LLC',
    consultant: 'Rana Engineering Office',
  },
  {
    title: '11. Construction of Multipurpose Hall at Sohar',
    value: 'R.O 75,000.000',
    duration: '04 Months',
    client: 'MB Holding Company LLC',
    consultant: 'Design Consultants',
  },
  {
    title: '12. Construction of JCB Workshop at Nizwa',
    value: 'R.O 180,000.000',
    duration: '05 Months',
    client: 'Muscat Overseas',
    consultant: 'Al Fajer Engineering Consultancy',
  },
  {
    title: '13. Extension of Filling Station & Supporting Facilities',
    value: 'R.O 20,000.000',
    duration: '03 Months',
    client: 'Muscat Overseas',
    consultant: 'Al Fajer Engineering Consultancy',
  },
  {
    title: '14. Auditorium with Supporting Facilities, Classroom & Office Building at Ruwi',
    value: 'R.O 720,000.000',
    duration: '09 Months',
    client: 'The Protestant Church Oman',
    consultant: 'Al Hatmy Engineering Consultancy',
  },
  {
    title: '15. Extension of MB Holding Office at Azaiba',
    value: 'R.O 1,390,000.000',
    duration: '10 Months',
    client: 'MB Petroleum',
    consultant: 'Amjaad Engineering Consultancy',
  },
  {
    title: '16. Refurbishment Works of Head Office for Suhail Bhawan Group (Holding) LLC at Ruwi',
    value: 'R.O 505,000.000',
    duration: '10 Months',
    client: 'Suhail Bhawan Group Holding LLC',
    consultant: 'DG BIM Engineering Consultancy',
  },
  {
    title: '17. Construction of Warehouse for Genetco at Sohar',
    value: 'R.O 410,000.000',
    duration: '09 Months',
    client: 'The Protestant Church Oman / Genetco',
    consultant: 'Al Hatmy Engineering Consultancy',
  },
  {
    title: '18. Construction of Gulf College Campus at Mabela',
    value: 'R.O 6,000,000.000',
    duration: '04 Years',
    client: 'Gulf College',
    consultant: 'DG BIM Engineering Consultancy',
  },
  {
    title: '19. Construction of Residential Complex of 9 Villas in North Azaiba',
    value: 'R.O 570,197.000',
    duration: '18 Months',
    client: 'Mr. Najeeb Abdulla Almulla',
    consultant: 'Ghimar Enterprises',
  },
  {
    title: '20. Construction of Al Batinah International School at Sohar Typical Building No. 1',
    value: 'R.O 1,125,161.110',
    duration: '12 Months',
    client: 'Sohar Aluminium',
    consultant: 'DG BIM Engineering Consultancy',
  },
  {
    title: '21. Construction of Al Batinah International School at Sohar Main Campus',
    value: 'R.O 4,614,860.363',
    duration: '12 Months',
    client: 'Sohar Aluminium',
    consultant: 'DG BIM Engineering Consultancy',
  },
  {
    title: '22. Construction of Sports Field Al Batinah International School at Sohar',
    value: 'R.O 1,063,371.133',
    duration: '12 Months',
    client: 'Sohar Aluminium',
    consultant: 'DG BIM Engineering Consultancy',
  },
  {
    title: '23. Construction of Multi Purpose Hall at Indian School at Sohar',
    value: 'R.O 325,000.000',
    duration: '08 Months',
    client: 'Indian School Sohar',
    consultant: 'Muamir Design & Eng. Consultancy',
  },
  {
    title: '24. Proposed Modification in Grand Stand at Camel Race Track Maidan at Al Bashayer, Adam',
    value: 'R.O 630,000.000',
    duration: '08 Months',
    client: 'Al Arabia International',
    consultant: 'Al Hashar Engineering LLC',
  },
  {
    title: '25. Construction of Residential Villa at Madinat Qaboos',
    value: 'R.O 257,133.000',
    duration: '12 Months',
    client: 'Dr. Issa',
    consultant: 'DG BIM Engineering Consultancy',
  },
  {
    title: '26. Refurbishment of Old Logistic Hub for Oman Post at Seeb',
    value: 'R.O 1,550,000.000',
    duration: '06 Months',
    client: 'Oman Post',
    consultant: 'Al Fajer Engineering LLC',
    projectManager: 'Lines & Vision',
  },
  {
    title: '27. Construction of Residential & Commercial Building (Basement + GF + 11 Floors) at Mabella',
    value: 'R.O 800,000.000',
    duration: '18 Months',
    client: 'Oman Post',
    consultant: 'Al Hashar Engineering LLC',
  },
  {
    title: '28. Premium Motors Logistic (FZC) Proposed Logistical HUB at Sohar Freezone',
    value: 'R.O 2,400,000.000',
    duration: '06 Months',
    client: 'Alfardan Group',
    consultant: 'Ibrahim Jaidah Architects & Engineers',
  },
  {
    title: '29. Ministry of Energy and Minerals Project',
    value: 'R.O 700,000.000',
    duration: '06 Months',
    client: 'Ministry of Energy and Minerals',
    consultant: 'Designers & Architects',
  },
  {
    title: '30. Construction, Completion & Maintenance of Marjan Cafe, Swimming Pool & External Works at Grand Hyatt Hotel',
    value: 'R.O 1,468,572.000',
    duration: '06 Months',
    client: 'Habrout LLC',
    consultant: 'Design Unit Engineering LLC',
  },
  {
    title: '31. Civil and ID Fitout Works for Skoda Showroom at Azaiba',
    value: 'R.O 350,000.000',
    duration: '04 Months',
    client: 'Premium Motors / Skoda Oman',
    consultant: 'Design Consultants',
  },
];

export default function ExecutedProjects() {
  const projectItems = navigationItems.find(item => item.label === 'Projects')?.subItems || [];
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(3); // Default expand project #4 sub-works

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden mb-6 flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold"
        >
          <Menu size={20} />
          Projects Navigation
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <Sidebar
            title="Projects"
            items={projectItems}
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-6 md:p-10 lg:p-12">
              <div className="flex items-center space-x-3 mb-4">
                <Building2 className="w-8 h-8 text-yellow-500" />
                <h1 className="text-3xl md:text-5xl font-bold text-white">
                  Executed <span className="text-yellow-500">Projects</span>
                </h1>
              </div>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10">
                A comprehensive showcase of prestigious projects executed by ANTCLLC across the Sultanate of Oman. Demonstrating our track record in Civil, Structural, Industrial, Commercial, Electro-Mechanical, and Institutional construction.
              </p>

              {/* PROJECT LIST */}
              <div className="space-y-6">
                {executedProjects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-black/50 border border-yellow-500/20 hover:border-yellow-500/50 rounded-xl p-6 transition-all shadow-lg"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-green-400 shrink-0 bg-green-950/40 border border-green-500/30 px-3 py-1 rounded-full text-xs md:text-sm">
                        <CheckCircle className="w-4 h-4 mr-1.5" />
                        <span className="font-semibold">Completed</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 text-sm md:text-base text-gray-300">
                      <div>
                        <span className="text-yellow-500 font-semibold block md:inline">Project Value: </span>
                        <span className="font-medium text-white">{project.value}</span>
                      </div>
                      <div>
                        <span className="text-yellow-500 font-semibold block md:inline">Duration: </span>
                        <span className="font-medium text-white">{project.duration}</span>
                      </div>
                      <div>
                        <span className="text-yellow-500 font-semibold block md:inline">Client: </span>
                        <span className="font-medium text-white">{project.client}</span>
                      </div>
                      <div>
                        <span className="text-yellow-500 font-semibold block md:inline">Consultant: </span>
                        <span className="font-medium text-white">{project.consultant}</span>
                      </div>
                      {project.projectManager && (
                        <div className="md:col-span-2">
                          <span className="text-yellow-500 font-semibold block md:inline">Project Manager: </span>
                          <span className="font-medium text-white">{project.projectManager}</span>
                        </div>
                      )}
                    </div>

                    {/* Sub-works dropdown / list if present */}
                    {project.subWorks && project.subWorks.length > 0 && (
                      <div className="mt-6 pt-4 border-t border-yellow-500/20">
                        <button
                          onClick={() => toggleExpand(index)}
                          className="flex items-center justify-between w-full text-left text-yellow-500 hover:text-yellow-400 font-semibold text-sm py-2 px-3 bg-yellow-500/10 rounded-lg transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <Layers className="w-4 h-4" />
                            Sub-Projects Breakdown ({project.subWorks.length} Packages)
                          </span>
                          {expandedIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>

                        {expandedIndex === index && (
                          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 pl-2">
                            {project.subWorks.map((sub, sIdx) => (
                              <div
                                key={sIdx}
                                className="bg-black/60 border border-gray-800 rounded-lg p-3 text-xs md:text-sm flex flex-col justify-between"
                              >
                                <span className="text-gray-300 font-medium">{sub.name}</span>
                                <span className="text-yellow-500 font-semibold mt-1">{sub.value}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
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
