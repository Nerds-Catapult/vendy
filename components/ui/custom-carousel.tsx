import React, { useState } from 'react';

interface CarouselProps {
  images: string[];
}

function CarouselSlide({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full flex-shrink-0">
      <img src={src} alt={alt} className="w-full h-auto" />
    </div>
  );
}

const CustomCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const imagesPerView = 7;

  const nextSlide = () => {
    setCurrentSlide((oldSlide) => (oldSlide + imagesPerView) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((oldSlide) => (oldSlide - imagesPerView + images.length) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-200 ease-in-out"
        style={{ transform: `translateX(-${(currentSlide * 100) / imagesPerView}%)` }}
      >
        {images.map((image, index) => (
          <CarouselSlide key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </div>
      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default CustomCarousel;
