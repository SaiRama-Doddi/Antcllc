import { Menu } from "lucide-react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const contactSidebarItems = [
  { label: "Contact", path: "" },
  { label: "Our Groups", path: "groups" },
  { label: "Business Concepts", path: "business" },
  { label: "Quality & Safety Policy", path: "quality" },
];

export default function Contact() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Mobile Menu */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden mb-6 flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold"
        >
          <Menu size={20} />
          Menu
        </button>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* SIDEBAR */}
          <Sidebar
            title="Contact"
            items={contactSidebarItems}
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          {/* CONTENT CHANGES VIA ROUTES */}
          <main className="flex-1">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Get In <span className="text-yellow-500">Touch</span>
              </h1>
            </div>

            <Outlet /> {/* 🔥 THIS IS THE KEY */}
          </main>

        </div>
      </div>
    </div>
  );
}
