import { Link, useLocation } from 'react-router-dom';
import { SubMenuItem } from '../types/navigation';

interface SidebarProps {
  title: string;
  items: SubMenuItem[];
}

export default function Sidebar({ title, items }: SidebarProps) {
  const location = useLocation();

  return (
    <aside className="w-full lg:w-80 bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-6 sticky top-24">
      <h3 className="text-2xl font-bold text-yellow-500 mb-6 pb-4 border-b border-yellow-500/30">
        {title}
      </h3>
      <nav className="space-y-2">
        {items.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-yellow-500 text-black font-semibold'
                  : 'text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/10'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
