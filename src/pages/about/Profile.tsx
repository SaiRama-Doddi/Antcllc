import Sidebar from '../../components/Sidebar';
import { navigationItems } from '../../types/navigation';
import { Award, Users, Target, TrendingUp } from 'lucide-react';

export default function Profile() {
  const aboutItems =
    navigationItems.find(item => item.label === 'About Us')?.subItems || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <Sidebar title="About Us" items={aboutItems} />

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-8 lg:p-12">
              
              {/* Page Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Company <span className="text-yellow-500">Profile</span>
              </h1>

              {/* Intro */}
              <div className="text-gray-300 space-y-8 leading-relaxed text-lg">
                <p>
                  Al Natlah Trading & Contracting LLC is a Limited Liability Company
                  and a fully Omani-owned organization established in the year 2006.
                  The company is proudly owned by Her Highness Sayyida Ghaliya F. T.
                  Al Said and has earned a strong reputation in the construction and
                  contracting industry.
                </p>

                <p>
                  The company is registered with the Ministry of Commerce and Industry
                  under CR No. 1/58007/8 at EXCELLENT grade and with the Tender Board
                  under CR No. 2340 as an EXCELLENT Civil Contractor.
                </p>

                {/* Highlight Cards */}
                <div className="grid md:grid-cols-2 gap-6 my-12">
                  <div className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-xl p-6">
                    <Award className="w-12 h-12 text-yellow-500 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Established in 2006
                    </h3>
                    <p className="text-gray-400">
                      Nearly two decades of excellence in construction and contracting
                      services across Oman.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-xl p-6">
                    <Users className="w-12 h-12 text-yellow-500 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Skilled Workforce
                    </h3>
                    <p className="text-gray-400">
                      A dedicated team of 286 skilled professionals delivering
                      high-quality turnkey solutions.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-xl p-6">
                    <Target className="w-12 h-12 text-yellow-500 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Excellent Grade Contractor
                    </h3>
                    <p className="text-gray-400">
                      Certified EXCELLENT grade contractor with the Ministry of
                      Commerce and Industry and Tender Board.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-xl p-6">
                    <TrendingUp className="w-12 h-12 text-yellow-500 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Turnkey Project Solutions
                    </h3>
                    <p className="text-gray-400">
                      End-to-end civil, electrical, mechanical, and interior works
                      under one trusted organization.
                    </p>
                  </div>
                </div>

                {/* Expertise */}
                <div>
                  <h2 className="text-3xl font-bold text-yellow-500 mb-4">
                    Our Expertise
                  </h2>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">▸</span>
                      Civil, Electrical, Mechanical & Interior Contracting Works
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">▸</span>
                      Commercial, Residential & Industrial Projects
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">▸</span>
                      Religious Institutions including Churches and Mosques
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">▸</span>
                      Laboratories and Specialized Facilities
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">▸</span>
                      Complete Turnkey Project Management Solutions
                    </li>
                  </ul>
                </div>

                {/* Company Overview */}
                <div>
                  <h2 className="text-3xl font-bold text-yellow-500 mb-4">
                    Company Overview
                  </h2>
                  <p>
                    Al Natlah Trading & Contracting LLC is managed by a team of
                    experienced professionals specializing in construction, civil,
                    electrical, mechanical, and interior works. With a strong
                    management structure and skilled workforce, the company ensures
                    timely delivery and uncompromised quality.
                  </p>

                  <p className="mt-4">
                    The company is a sister concern of Al Wadi Al Kabir Carpentry,
                    with its office located in Al Wadi Al Kabir next to Al Danube
                    Building Materials. In a short span of time, the company has
                    successfully completed numerous commercial, residential,
                    industrial, and institutional projects, earning the trust and
                    confidence of its esteemed clients.
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
