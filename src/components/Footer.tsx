import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Award, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';
import { navigationItems } from '../types/navigation';

export default function Footer() {
  const whatsappNumber = '24813345';

  return (
    <footer className="bg-black border-t border-yellow-500/20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-2 rounded-full">
                <Award className="w-6 h-6 text-black" />
              </div>
              <div>
                <div className="text-xl font-bold text-yellow-500">ANTCLLC</div>
                <div className="text-xs text-gray-400">ISO Certified</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Leading construction and infrastructure development company committed to excellence, innovation, and sustainable growth.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-yellow-500/10 hover:bg-yellow-500/20 p-2 rounded-lg transition-colors">
                <Facebook className="w-5 h-5 text-yellow-500" />
              </a>
              <a href="#" className="bg-yellow-500/10 hover:bg-yellow-500/20 p-2 rounded-lg transition-colors">
                <Twitter className="w-5 h-5 text-yellow-500" />
              </a>
              <a href="#" className="bg-yellow-500/10 hover:bg-yellow-500/20 p-2 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5 text-yellow-500" />
              </a>
              <a href="#" className="bg-yellow-500/10 hover:bg-yellow-500/20 p-2 rounded-lg transition-colors">
                <Instagram className="w-5 h-5 text-yellow-500" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-yellow-500 font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-yellow-500 transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-500 font-semibold mb-4 text-lg">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about/chairman-message" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                  Chairman Message
                </Link>
              </li>
              <li>
                <Link to="/projects/ongoing" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                  Ongoing Projects
                </Link>
              </li>
              <li>
                <Link to="/projects/executed" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                  Executed Projects
                </Link>
              </li>
              <li>
                <Link to="/media/gallery" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                  Career Opportunities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-500 font-semibold mb-4 text-lg">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Al Natlah Trading & Contracting LLC
Civil Electro Mechanical Contractors,
Post Box: 445, Postal Code: 117
Al Wadi Al Kabir, Sultanate Of Oman
                </span>
              </li>
              <li className="flex items-center space-x-3">
                
                <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <a href="tel:+24813345" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                   24813345   <br/> 24812856
                </a>
               
              
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <a href="mailto:info@antcllc.com" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                  info@antcllc.com
                </a>
              </li>
            </ul>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors font-medium text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        <div className="border-t border-yellow-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ANTCLLC. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-yellow-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-yellow-500 transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-yellow-500 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
