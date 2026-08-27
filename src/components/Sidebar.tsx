import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { SubMenuItem } from "../types/navigation";


interface SidebarProps {
  title: string;
  items: SubMenuItem[];
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({
  title,
  items,
  isOpen = false,
  onClose,
}: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* 🔹 Overlay (Mobile only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* 🔹 Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 lg:top-28 left-0 z-50 lg:z-30
          h-full lg:h-auto lg:max-h-[calc(100vh-8rem)]
          w-80 lg:w-72 xl:w-80 lg:self-start lg:flex-shrink-0
          bg-gradient-to-br from-gray-900 to-black
          border-r lg:border border-yellow-500/20 lg:rounded-xl
          p-6
          overflow-y-auto
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-yellow-500/30">
          <h3 className="text-2xl font-bold text-yellow-500">{title}</h3>

          {/* Close button (Mobile only) */}
          <button
            onClick={onClose}
            className="lg:hidden text-gray-400 hover:text-yellow-500"
          >
            <X size={28} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {items.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`block px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-yellow-500 text-black font-semibold"
                    : "text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
