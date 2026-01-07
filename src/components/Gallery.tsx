import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const galleryImages = [
  '/1.jpeg',
  'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767603371/WhatsApp_Image_2025-12-31_at_10.34.31_agqnk6.jpg',
  'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767603371/WhatsApp_Image_2025-12-31_at_10.34.17_yqqijq.jpg',
  'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767603371/WhatsApp_Image_2025-12-31_at_10.35.58_i4ga77.jpg',
  'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767603372/WhatsApp_Image_2025-12-31_at_10.37.31_1_os4j5e.jpg',
  'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767603372/WhatsApp_Image_2025-12-31_at_10.38.34_p0grkd.jpg',
  'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767603372/WhatsApp_Image_2025-12-31_at_10.37.31_2_e6gkwg.jpg',
  'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767603372/WhatsApp_Image_2025-12-31_at_10.38.07_1_otmukj.jpg',
  'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767603372/WhatsApp_Image_2025-12-31_at_10.38.07_uycchr.jpg',
  'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767603372/WhatsApp_Image_2025-12-31_at_10.37.31_szr6f3.jpg',
  'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785270/Picture3_fb2yon.jpg',
  'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785270/Picture3_fb2yon.jpg',
   'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785270/Picture23_bxghyb.jpg',
   'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785271/Picture24_njuvtq.jpg',
   'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785270/Picture1_br9bja.jpg',
   'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785271/Picture27_x4jgqe.jpg',
   'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785271/Picture6_wog4dt.jpg',
   'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785272/Picture8_lynwby.jpg',
   'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785272/Picture28_plkyx3.jpg',
   'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785273/Picture29_klkwz5.jpg',
   'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785271/Picture25_a8yd2p.jpg',
   'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785272/Picture26_cvxqra.jpg',
   'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785272/Picture10_thry9v.jpg',
   'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785273/Picture9_xlghnh.jpg',
   'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785273/Picture30_hezvb1.jpg',
   'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785274/Picture31_ruz9m8.jpg',
   'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785274/Picture32_n5foim.jpg',
   'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785274/Picture12_nlyiyc.jpg',
   'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785274/Picture13_s41qd1.jpg',
   'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785275/Picture14_bolqhg.jpg',
   'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785275/Picture15_gjz5g1.jpg',
   'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785273/Picture7_swalj2.jpg',
   'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785275/Picture33_ubgjpt.jpg',
   'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785275/Picture34_vmordq.jpg',
   'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785276/Picture17_kbvodt.jpg',
   'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785276/Picture35_qmkqas.jpg',
   'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785276/Picture16_asxqep.jpg',
   'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785276/Picture18_kvv8wm.jpg',
   'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785276/Picture19_ch66iv.jpg',
   'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785276/Picture20_eqiruz.jpg',
   'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785277/Picture21_tfl8d8.jpg',
   'https://res.cloudinary.com/dtuqzgucw/image/upload/v1767785277/Picture22_ieijir.jpg',

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
