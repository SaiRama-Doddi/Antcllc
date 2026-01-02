import Sidebar from '../../components/Sidebar';
import { navigationItems } from '../../types/navigation';
import Gallery from '../../components/Gallery';

export default function GalleryPage() {
  const mediaItems = navigationItems.find(item => item.label === 'Media')?.subItems || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar title="Media" items={mediaItems} />

          <main className="flex-1">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-8 lg:p-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
               <span className="text-yellow-500">Gallery</span>
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Explore our comprehensive gallery showcasing completed and ongoing projects. Each image tells a story of quality, innovation, and excellence in construction.
              </p>

              <Gallery />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
