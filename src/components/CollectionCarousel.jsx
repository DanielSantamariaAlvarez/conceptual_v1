'use client';
import { useState } from 'react';
import Image from 'next/image';

const CollectionCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= images.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? images.length - 4 : prevIndex - 1
    );
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Nueva Colección</h2>
        <div className="relative">
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg"
          >
            ←
          </button>
          <div className="flex gap-4 overflow-hidden">
            {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
              <div 
                key={index} 
                className="w-full md:w-1/4 flex-shrink-0 transition-all duration-300"
              >
                <div className="relative aspect-square">
                  <Image
                    src={image}
                    alt={`Colección ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollectionCarousel; 