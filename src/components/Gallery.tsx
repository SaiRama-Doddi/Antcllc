import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const galleryImages = [
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420363/DSC_0401.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420361/DSC_0380.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420360/DSC_0378.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420358/DSC_0228.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420354/DSC_0192.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420350/DSC_0376.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420349/DSC_0371.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420344/DSC_0385.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420340/DSC_0246.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420335/DSC_0182.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420330/DSC_0244.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420326/DSC_0229.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420322/DSC_0240.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420321/DSC_0232.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420313/DSC_0176.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420307/DSC_0197.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420297/DSC_0183.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420281/20181212_130916.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420280/20181212_121133.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420266/IMG-20190926-WA0026.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788419770/Picture3.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788419769/Picture5.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788419770/Picture2.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420406/DSC_0583.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420392/DSC_0992.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420389/DSC_0982.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420388/DSC_0980.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420382/DSC_1003.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420379/DSC_0996.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420377/DSC_0986.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420372/DSC_0994.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420373/DSC_1001.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420370/DSC_0988.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420365/DSC_0405.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420356/DSC_0221.jpg',
  'https://res.cloudinary.com/oh4uxzhu/image/upload/v1788420306/DSC_0196.jpg',
];

const IMAGES_PER_PAGE = 9;

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const totalPages = Math.ceil(galleryImages.length / IMAGES_PER_PAGE);
  const startIndex = currentPage * IMAGES_PER_PAGE;
  const endIndex = startIndex + IMAGES_PER_PAGE;
  const currentImages = galleryImages.slice(startIndex, endIndex);

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const openLightbox = (index: number) => {
    setSelectedImage(startIndex + index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const goToNextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! + 1) % galleryImages.length);
    }
  };

  return (
    <div className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Project <span className="text-yellow-500">Gallery</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Showcasing our completed and ongoing construction projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="relative aspect-video overflow-hidden rounded-xl cursor-pointer group"
            >
              <img
                src={image}
                alt={`Gallery ${startIndex + index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-semibold">Project {startIndex + index + 1}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={goToPrevPage}
            className="bg-yellow-500/10 hover:bg-yellow-500 text-yellow-500 hover:text-black p-3 rounded-full transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <span className="text-white font-medium">
            Page {currentPage + 1} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            className="bg-yellow-500/10 hover:bg-yellow-500 text-yellow-500 hover:text-black p-3 rounded-full transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-yellow-500 p-2"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={goToPrevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-yellow-500/20 hover:bg-yellow-500 text-white hover:text-black p-3 rounded-full transition-all"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <img
            src={galleryImages[selectedImage]}
            alt={`Gallery ${selectedImage + 1}`}
            className="max-w-full max-h-full object-contain"
          />

          <button
            onClick={goToNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-500/20 hover:bg-yellow-500 text-white hover:text-black p-3 rounded-full transition-all"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
            {selectedImage + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </div>
  );
}
