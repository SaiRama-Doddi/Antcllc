import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

const jobOpenings = [
  {
    title: 'Senior Civil Engineer',
    department: 'Engineering',
    location: 'Corporate Office',
    type: 'Full-time',
    description: 'Lead major infrastructure projects with expertise in structural design and project management.',
    requirements: ['10+ years experience', "Bachelor's in Civil Engineering", 'PE License preferred'],
  },
  {
    title: 'Project Manager',
    department: 'Operations',
    location: 'Multiple Locations',
    type: 'Full-time',
    description: 'Oversee construction projects from planning to completion, ensuring quality and timeline adherence.',
    requirements: ['8+ years in construction', 'PMP Certification', 'Strong leadership skills'],
  },
  {
    title: 'Architect',
    department: 'Design',
    location: 'Design Center',
    type: 'Full-time',
    description: 'Create innovative architectural designs for commercial and residential projects.',
    requirements: ['5+ years experience', "Master's in Architecture", 'LEED certification preferred'],
  },
  {
    title: 'Safety Officer',
    department: 'Safety & Compliance',
    location: 'Site-based',
    type: 'Full-time',
    description: 'Ensure workplace safety and compliance with all regulatory requirements.',
    requirements: ['CSP or CHST certification', '3+ years experience', 'Strong communication skills'],
  },
  {
    title: 'Business Development Manager',
    department: 'Sales',
    location: 'Corporate Office',
    type: 'Full-time',
    description: 'Drive business growth through strategic partnerships and new client acquisition.',
    requirements: ['7+ years in construction industry', 'MBA preferred', 'Proven track record'],
  },
  {
    title: 'Construction Intern',
    department: 'Operations',
    location: 'Various Sites',
    type: 'Internship',
    description: 'Gain hands-on experience in construction management and site operations.',
    requirements: ['Pursuing engineering degree', 'Strong academic record', 'Eager to learn'],
  },
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Build Your <span className="text-yellow-500">Career</span> With Us
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Join ANTCLLC and be part of a team that's shaping the future of infrastructure. We offer exciting opportunities for growth, competitive compensation, and a collaborative work environment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-8 text-center">
            <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Career Growth</h3>
            <p className="text-gray-400">
              Clear paths for advancement and continuous learning opportunities
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-8 text-center">
            <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Great Team</h3>
            <p className="text-gray-400">
              Work alongside industry experts in a collaborative environment
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-8 text-center">
            <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Competitive Pay</h3>
            <p className="text-gray-400">
              Industry-leading compensation and comprehensive benefits package
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-white mb-8">
            Current <span className="text-yellow-500">Openings</span>
          </h2>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-black/40 border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                      <span className="flex items-center">
                        <Briefcase className="w-4 h-4 text-yellow-500 mr-2" />
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 text-yellow-500 mr-2" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 text-yellow-500 mr-2" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-lg transition-all flex items-center">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
                <p className="text-gray-400 mb-4">{job.description}</p>
                <div>
                  <p className="text-yellow-500 font-semibold mb-2">Requirements:</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    {job.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
