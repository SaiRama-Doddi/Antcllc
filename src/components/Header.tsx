import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Award } from 'lucide-react';
import { navigationItems } from '../types/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleLogoClick = () => {
    window.open('/iso-certificate.pdf', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 border-b border-yellow-500/20">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8 flex-1">
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.label} className="relative group">
  <Link
    to={item.path}
    className="flex items-center space-x-1 text-white hover:text-yellow-500 transition-colors duration-300 py-2 text-sm font-medium"
  >
    <span>{item.label}</span>
    {item.subItems && <ChevronDown className="w-4 h-4" />}
  </Link>

  {item.subItems && (
    <div
      className="
        absolute left-0 top-full
        hidden group-hover:block
        w-56 bg-black/95 backdrop-blur-md
        border border-yellow-500/30
        shadow-2xl shadow-yellow-500/10
        rounded-lg overflow-hidden
        z-50
      "
    >
      {item.subItems.map((subItem) => (
        <Link
          key={subItem.path}
          to={subItem.path}
          className="
            block px-6 py-3 text-gray-300
            hover:text-yellow-500 hover:bg-yellow-500/10
            transition-all duration-300
            text-sm border-b border-yellow-500/10 last:border-0
          "
        >
          {subItem.label}
        </Link>
      ))}
    </div>
  )}
</div>

              ))}
            </div>
          </div>

          <button
            onClick={handleLogoClick}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-600 p-3 rounded-full">
                <Award className="w-8 h-8 text-black" />
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-yellow-500 tracking-wider">ANTCLLC</div>
              <div className="text-xs text-gray-400">ISO Certified</div>
            </div>
          </button>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {navigationItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.path}
                  className="block px-4 py-2 text-white hover:text-yellow-500 hover:bg-yellow-500/10 rounded-lg transition-all"
                  onClick={() => !item.subItems && setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.subItems && (
                  <div className="ml-4 space-y-1 mt-1">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-gray-400 hover:text-yellow-500 hover:bg-yellow-500/10 rounded-lg transition-all"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.label}
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
