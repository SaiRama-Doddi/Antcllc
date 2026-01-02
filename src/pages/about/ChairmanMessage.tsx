import Sidebar from '../../components/Sidebar';
import { navigationItems } from '../../types/navigation';

export default function ChairmanMessage() {
  const aboutItems = navigationItems.find(item => item.label === 'About Us')?.subItems || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar title="About Us" items={aboutItems} />

          <main className="flex-1">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-8 lg:p-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Chairman's <span className="text-yellow-500">Message</span>
              </h1>

              <div className="mb-8">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Chairman"
                  className="w-64 h-64 object-cover rounded-xl float-left mr-8 mb-4 border-4 border-yellow-500/30"
                />

                <div className="text-gray-300 space-y-6 leading-relaxed text-lg">
                  <p>
                    Dear Stakeholders, Partners, and Team Members,
                  </p>
                  <p>
                    It is with immense pride and gratitude that I address you today as the Chairman of ANTCLLC. Our journey has been one of unwavering commitment to excellence, innovation, and sustainable development in the construction and infrastructure sector.
                  </p>
                  <p>
                    Since our inception, we have been guided by a simple yet powerful principle: to build not just structures, but lasting legacies that contribute to the growth and prosperity of our communities. Our ISO certification stands as a testament to our dedication to maintaining the highest standards of quality and safety in every project we undertake.
                  </p>
                  <p>
                    The construction industry is evolving rapidly, and at ANTCLLC, we embrace these changes with enthusiasm and forward-thinking strategies. We invest heavily in cutting-edge technology, sustainable practices, and the continuous development of our talented workforce. Our team's expertise, coupled with our commitment to innovation, enables us to deliver projects that exceed expectations.
                  </p>
                  <p>
                    Looking ahead, our vision remains clear: to be the most trusted and respected construction company, known for our integrity, quality, and contribution to sustainable development. We are committed to creating value for all our stakeholders while maintaining our responsibility toward the environment and society.
                  </p>
                  <p>
                    I want to express my heartfelt thanks to our dedicated team, our valued clients, and our partners who have been instrumental in our success. Together, we will continue to build a better tomorrow.
                  </p>
                  <p className="mt-8">
                    <span className="text-yellow-500 font-semibold text-xl">With warm regards,</span><br />
                    <span className="text-white font-bold text-2xl">John Anderson</span><br />
                    <span className="text-gray-400">Chairman, ANTCLLC</span>
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
