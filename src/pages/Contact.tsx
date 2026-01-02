import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get In <span className="text-yellow-500">Touch</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? We'd love to hear from you. Send us a message and we’ll respond as soon as possible.
          </p>
        </div>

        {/* GROUP IMAGES */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <img
            src="	http://antcllc.com/images/group1.jpg"
            alt="Group Image 1"
            className="rounded-xl object-cover h-64 w-full"
          />
          <img
            src="	http://antcllc.com/images/group1.jpg"
            alt="Group Image 2"
            className="rounded-xl object-cover h-64 w-full"
          />
          <img
            src="http://antcllc.com/images/group3.jpg"
            alt="Group Image 3"
            className="rounded-xl object-cover h-64 w-full"
          />
        </div>

        {/* BUSINESS CONCEPTS & CORE VALUES */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-10 mb-16">
          <h2 className="text-4xl font-bold text-yellow-500 mb-6">
            Business Concepts & Core Values
          </h2>

          <ul className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <li>▸ Commitment to excellence and high quality</li>
            <li>▸ Customer satisfaction as our highest priority</li>
            <li>▸ Completion of projects within stipulated timeframes</li>
            <li>
              ▸ Strong focus on safety, quality, value engineering, and innovation
            </li>
            <li>
              ▸ Mutual dependency – walking together with clients and suppliers to
              share risks and rewards
            </li>
          </ul>
        </div>

        {/* QUALITY & SAFETY POLICY */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">

          {/* QUALITY POLICY */}
          <div className="bg-black/40 border border-yellow-500/20 rounded-xl p-8">
            <h3 className="text-3xl font-bold text-yellow-500 mb-4">
              Quality Policy
            </h3>

            <p className="text-gray-300 leading-relaxed mb-4">
              To constantly meet and strive to exceed the agreed requirements of our
              clients in the most cost-effective manner by providing a high standard
              of management, technical expertise, value engineering, and workmanship.
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              This will be achieved by employing professional people with drive and
              determination to work as a team with our clients in a non-adversarial
              manner.
            </p>

            <p className="text-gray-300 leading-relaxed">
              It is our commitment to maintain a management system that reflects the
              way our business operates, our clients’ needs, and the requirements of
              international quality standards.
            </p>
          </div>

          {/* SAFETY POLICY */}
          <div className="bg-black/40 border border-yellow-500/20 rounded-xl p-8">
            <h3 className="text-3xl font-bold text-yellow-500 mb-4">
              Safety Policy
            </h3>

            <p className="text-gray-300 leading-relaxed mb-4">
              Our Safety Policy is designed to comply with the standards of the Safety
              and Health Administration and to maintain a safe, injury- and illness-
              free workplace.
            </p>

            <ul className="space-y-3 text-gray-300 leading-relaxed">
              <li>▸ Accident and incident prevention is a prime concern</li>
              <li>
                ▸ Ensuring the safety and well-being of employees, subcontractors,
                and suppliers
              </li>
              <li>
                ▸ Preventing wasteful operations and damage to property and equipment
              </li>
            </ul>
          </div>
        </div>

        {/* CONTACT + FORM */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* CONTACT INFO */}
          <div>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex space-x-4">
                  <MapPin className="w-6 h-6 text-yellow-500" />
                  <p className="text-gray-400">
                    Al Natlah Trading & Contracting LLC<br />
                    Civil Electro Mechanical Contractors<br />
                    P.O Box: 445, Postal Code: 117<br />
                    Al Wadi Al Kabir, Sultanate of Oman
                  </p>
                </div>

                <div className="flex space-x-4">
                  <Phone className="w-6 h-6 text-yellow-500" />
                  <p className="text-gray-400">
                    24813345<br />
                    24812856<br />
                    24817320
                  </p>
                </div>

                <div className="flex space-x-4">
                  <Mail className="w-6 h-6 text-yellow-500" />
                  <p className="text-gray-400">info@antcllc.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-6">
              <input className="w-full p-3 bg-black/40 border border-yellow-500/20 rounded-lg text-white" placeholder="Your Name" />
              <input className="w-full p-3 bg-black/40 border border-yellow-500/20 rounded-lg text-white" placeholder="Email" />
              <textarea rows={5} className="w-full p-3 bg-black/40 border border-yellow-500/20 rounded-lg text-white" placeholder="Message" />
              <button className="w-full bg-yellow-500 text-black py-4 rounded-lg font-bold flex items-center justify-center">
                <Send className="mr-2" /> Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
