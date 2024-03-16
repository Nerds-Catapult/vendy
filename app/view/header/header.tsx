"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import kfc from '@/public/images/kfc.png';
import bakersinn from '@/public/images/bakersinn.png';
import bnd from '@/public/images/bnd.png';
import dormans from '@/public/images/dormans.jpeg';
import DStv from '@/public/images/DStv.png';
import Carrefour from '@/public/images/Carrefour.jpeg';

const Header = () => {
  const embeddedImagesArray = [kfc, bakersinn, bnd, dormans, DStv, Carrefour];
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleImages = 8;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, embeddedImagesArray.length - visibleImages));
  };

  return (
    <div>
      <main className="p-2">
        <section className="bg-gray-200 py-4 w-full pl-5 pr-5 rounded-md">
          <div className="flex justify-between">
            <div className="flex w-full">
              <div className="flex items-center">
                <button
                  className="text-gray-600 focus:outline-none focus:text-gray-500"
                  aria-label="Previous"
                  onClick={prevSlide}
                >
                  <FaAngleLeft className="w-6 h-6" />
                </button>
              </div>
              <div className="flex pl-4 justify-between w-full overflow-hidden">
                {embeddedImagesArray.slice(currentIndex, currentIndex + visibleImages).map((image, index) => (
                  <div key={index} className="w-32 h-32">
                    <Image src={image} alt="logo" className="rounded-full" />
                  </div>
                ))}
              </div>
              <div className="flex items-center pl-4">
                <button
                  className="text-gray-600 focus:outline-none focus:text-gray-500"
                  aria-label="Next"
                  onClick={nextSlide}
                >
                  <FaAngleRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Header;
