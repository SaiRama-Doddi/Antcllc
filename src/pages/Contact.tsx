import { Mail, Phone, MapPin, Send, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const contactSidebarItems = [
  { label: "Our Groups", path: "#groups" },
  { label: "Business Concepts", path: "#business" },
  { label: "Quality & Safety Policy", path: "#quality" },
];

export default function Contact() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // ✅ FIX: enable hash scrolling without changing Sidebar
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8">

        {/* MOBILE SIDEBAR BUTTON */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden mb-6 flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold"
        >
          <Menu size={20} />
          Menu
        </button>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* SIDEBAR (UNCHANGED) */}
          <Sidebar
            title=""
            items={contactSidebarItems}
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          {/* MAIN CONTENT */}
          <main className="flex-1">

            {/* HEADER */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Get In <span className="text-yellow-500">Touch</span>
              </h1>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Have a project in mind? We'd love to hear from you.
              </p>
            </div>

            {/* GROUP IMAGES */}
            <div
              id="groups"
              className="scroll-mt-32 grid md:grid-cols-3 gap-6 mb-20"
            >
              <img
                src="http://antcllc.com/images/group1.jpg"
                className="rounded-xl h-64 w-full object-cover"
              />
              <img
                src="http://antcllc.com/images/group1.jpg"
                className="rounded-xl h-64 w-full object-cover"
              />
              <img
                src="/antc-logo.png"
                className="rounded-xl h-64 w-full object-contain bg-black/40 p-6"
              />
            </div>

            {/* BUSINESS CONCEPTS */}
            <div
              id="business"
              className="scroll-mt-32 bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-10 mb-16"
            >
              <h2 className="text-4xl font-bold text-yellow-500 mb-6">
                Business Concepts & Core Values
              </h2>
              <ul className="space-y-4 text-gray-300 text-lg">
                <li>▸ Commitment to excellence and high quality</li>
                <li>▸ Customer satisfaction as top priority</li>
                <li>▸ Timely completion of projects</li>
                <li>▸ Focus on safety, innovation & value engineering</li>
                <li>▸ Strong partnerships with clients & suppliers</li>
              </ul>
            </div>

            {/* QUALITY & SAFETY */}
            <div
              id="quality"
              className="scroll-mt-32 grid lg:grid-cols-2 gap-12 mb-20"
            >
              {/* QUALITY */}
              <div className="bg-black/40 border border-yellow-500/20 rounded-xl p-8">
                <h3 className="text-3xl font-bold text-yellow-500 mb-4">
                  Quality Policy
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We strive to exceed client expectations through excellence in
                  management, engineering, and workmanship.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our systems align with international quality standards.
                </p>
              </div>

              {/* SAFETY */}
              <div className="bg-black/40 border border-yellow-500/20 rounded-xl p-8">
                <h3 className="text-3xl font-bold text-yellow-500 mb-4">
                  Safety Policy
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>▸ Accident prevention is our priority</li>
                  <li>▸ Safe workplace for employees & contractors</li>
                  <li>▸ Protection of equipment & environment</li>
                </ul>
              </div>
            </div>

            {/* CONTACT + FORM */}
            <div className="grid lg:grid-cols-2 gap-12">

              {/* CONTACT INFO */}
              <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6 text-gray-400">
                  <div className="flex gap-4">
                    <MapPin className="text-yellow-500" />
                    <p>
                      Al Natlah Trading & Contracting LLC<br />
                      Al Wadi Al Kabir, Oman
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="text-yellow-500" />
                    <p>24813345 / 24812856</p>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="text-yellow-500" />
                    <p>info@antcllc.com</p>
                  </div>
                </div>
              </div>

              {/* FORM */}
              <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Send Us a Message
                </h2>

                <form className="space-y-6">
                  <input
                    className="w-full p-3 bg-black/40 border border-yellow-500/20 rounded-lg text-white"
                    placeholder="Your Name"
                  />
                  <input
                    className="w-full p-3 bg-black/40 border border-yellow-500/20 rounded-lg text-white"
                    placeholder="Email"
                  />
                  <textarea
                    rows={5}
                    className="w-full p-3 bg-black/40 border border-yellow-500/20 rounded-lg text-white"
                    placeholder="Message"
                  />
                  <button className="w-full bg-yellow-500 text-black py-4 rounded-lg font-bold flex items-center justify-center">
                    <Send className="mr-2" /> Send Message
                  </button>
                </form>
              </div>

            </div>

          </main>
        </div>
      </div>
    </div>
  );
}
