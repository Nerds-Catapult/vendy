"use client";

import React, {useState} from 'react';
import Image from 'next/image';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';

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

    const imagesWithNames = [
        {image: kfc, name: 'KFC'},
        {image: bakersinn, name: 'Bakers Inn'},
        {image: bnd, name: 'BND'},
        {image: dormans, name: 'Dormans'},
        {image: DStv, name: 'DStv'},
        {image: Carrefour, name: 'Carrefour'},
    ];

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, embeddedImagesArray.length - visibleImages));
    };

    return (
        <div>
            <main className="p-2">
                <section className="bg-gray-100 py-4 w-full pl-5 pr-5 rounded-md">
                    <div className="flex justify-between">
                        <div className="flex w-full">
                            <div className="flex items-center">
                                <button
                                    className="text-gray-600 focus:outline-none focus:text-gray-500"
                                    aria-label="Previous"
                                    onClick={prevSlide}
                                >
                                    <FaAngleLeft className="w-6 h-6"/>
                                </button>
                            </div>
                            <div className="flex pl-4 justify-start gap-[200px] w-full overflow-hidden">
                                {embeddedImagesArray.slice(currentIndex, currentIndex + visibleImages).map((image, index) => (
                                    <div key={index} className="w-32 h-32">
                                        <Image src={image} alt="logo" className="rounded-full"/>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center pl-4">
                                <button
                                    className="text-gray-600 focus:outline-none focus:text-gray-500"
                                    aria-label="Next"
                                    onClick={nextSlide}
                                >
                                    <FaAngleRight className="w-6 h-6"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <h1 className="font-bold text-2xl pl-4 pb-4">Our Best Sellers</h1>

                {/*best sellers*/}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-2 pr-2">
                    {
                        imagesWithNames.map((image, index) => (
                            <div key={index}
                                 className="flex bg-gray-100 items-center gap-2 rounded-lg hover:bg-gray-300">
                                <Image src={image.image} alt="logo" className="rounded-full w-20 cursor-pointer"/>
                                <p className="text-center">{image.name}</p>
                            </div>
                        ))
                    }
                </section>
            </main>
        </div>
    );
};

export default Header;
