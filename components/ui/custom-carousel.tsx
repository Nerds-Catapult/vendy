"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

type CarouselSlideProps = {
  src: string;
  alt: string;
};

// Use functional component for CarouselSlide
const CarouselSlide = ({ src, alt }: CarouselSlideProps) => {
  return (
    <div className="w-full flex-shrink-0">
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );
};

type CarouselProps = {
    images: string[],
    prevSlide: React.MouseEventHandler<HTMLButtonElement> | undefined,
    nextSlide: React.MouseEventHandler<HTMLButtonElement> | undefined,
    imagesInArray: {}[]
};

// Ensure Carousel component renders only on the client-side
const CustomCarousel: React.FC<CarouselProps> = React.memo(
  ({ images, prevSlide, nextSlide, imagesInArray }) => {
    // Declare `currentSlide` state and handlers within effects for server-side safety
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
      const nextSlide = () => {
        setCurrentSlide((oldSlide) => {
          let newSlide = oldSlide + 1;
          if (newSlide >= images.length) newSlide = 0;
          return newSlide;
        });
      };

      const prevSlide = () => {
        setCurrentSlide((oldSlide) => {
          let newSlide = oldSlide - 1;
          if (newSlide < 0) newSlide = images.length - 1;
          return newSlide;
        });
      };

      return () => {
      };
    }, []);

    return (
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-200 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <CarouselSlide key={index} src={image} alt={`Slide ${index + 1}`} />
          ))}
        </div>
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.images === nextProps.images
);

export default CustomCarousel;
