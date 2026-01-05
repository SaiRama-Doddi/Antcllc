import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X, Award } from "lucide-react";
import { navigationItems } from "../types/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleIsoClick = () => {
    window.open("/iso-certificate.pdf", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 border-b border-yellow-500/20">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* 🔰 LEFT LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src="/antc-logo.png"
              alt="Company Logo"
              className="h-14 w-14 rounded-full"
            />
          </Link>

          {/* 🧭 DESKTOP NAV */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.path}
                  className="flex items-center space-x-1 text-white hover:text-yellow-500 transition-colors py-2 text-sm font-medium"
                >
                  <span>{item.label}</span>
                  {item.subItems && <ChevronDown className="w-4 h-4" />}
                </Link>

                {item.subItems && (
                  <div className="absolute left-0 top-full hidden group-hover:block w-56 bg-black/95 backdrop-blur-md border border-yellow-500/30 rounded-lg shadow-xl z-50">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="block px-6 py-3 text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/10 text-sm border-b border-yellow-500/10 last:border-0"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 🏆 ISO AWARD – RESPONSIVE */}
          <div className="flex items-center gap-2">

            <button
              onClick={handleIsoClick}
              className="flex items-center space-x-2 group cursor-pointer"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>

                {/* 🔹 Smaller on mobile, bigger on desktop */}
                <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-600 
                                p-2 lg:p-3 rounded-full">
                  <Award className="w-5 h-5 lg:w-7 lg:h-7 text-black" />
                </div>
              </div>

              {/* 🔹 Text only on desktop */}
              <div className="hidden lg:block text-right leading-tight">
                <div className="text-lg font-bold text-yellow-500 tracking-wider">
                  ANTCLLC
                </div>
                <div className="text-xs text-gray-400">
                  ISO Certified
                </div>
              </div>
            </button>

            {/* 📱 MOBILE MENU BUTTON */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* 📱 MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {navigationItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.path}
                  className="block px-4 py-2 text-white hover:text-yellow-500 hover:bg-yellow-500/10 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>

                {item.subItems && (
                  <div className="ml-4 space-y-1 mt-1">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="block px-4 py-2 text-sm text-gray-400 hover:text-yellow-500 hover:bg-yellow-500/10 rounded-lg"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
