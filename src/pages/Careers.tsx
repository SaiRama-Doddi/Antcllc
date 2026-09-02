import { Briefcase, Mail } from 'lucide-react';

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

        <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-8 lg:p-12 text-center">
          <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-yellow-500" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our <span className="text-yellow-500">Talent Pool</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            There are currently no active job openings listed. However, we are always interested in meeting talented professionals. Send your CV to us and we'll reach out when a relevant opportunity arises.
          </p>
          <a
            href="mailto:info@antcllc.com"
            className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-lg transition-all text-lg shadow-lg hover:shadow-yellow-500/20"
          >
            <Mail className="w-5 h-5 mr-3" />
            Send Your CV / Resume
          </a>
        </div>
      </div>
    </div>
  );
}
