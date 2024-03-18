"use client";

import React, {useState} from 'react';
import Image from 'next/image';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';
import {FaChevronDown} from "react-icons/fa";

import bakersinn from '@/public/images/bakersinn.png';
import bnd from '@/public/images/bnd.png';
import Carrefour from '@/public/images/Carrefour.jpeg';
import kfc from '@/public/images/kfc.png';
import dormans from '@/public/images/dormans.jpeg';
import DStv from '@/public/images/DStv.png';
import apple from '@/public/images/apple.png';
import dands from '@/public/images/dands.png';
import hisense from '@/public/images/hisense.png';
import hp from '@/public/images/hp.png';
import infinix from '@/public/images/infinix.png';
import ketepa from '@/public/images/ketepa.png';
import kettleHouse from '@/public/images/kettleHouse.jpg';
import lg from '@/public/images/lg.png';
import mathias from '@/public/images/mathias.jpeg';
import naivas from '@/public/images/naivas.png';
import nike from '@/public/images/nike.png';
import nivea from '@/public/images/nivea.png';
import landcruiser from '@/public/images/landcruiser.png';
import hilux from '@/public/images/hilux.png';
import Toyota from '@/public/images/rush.png';
import rumion from '@/public/images/rumion.png';

const Header = () => {
    const embeddedImagesArray = [
        kfc,
        bakersinn,
        bnd,
        dormans,
        DStv,
        Carrefour,
        kettleHouse,
        mathias,
        naivas,
    ] as const;
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleImages = 8;
    const vehicleImages = [landcruiser, hilux, Toyota, rumion] as const;
    const brandings = [apple, dands, hisense, hp, infinix, ketepa, lg, nike, nivea] as const;
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
            <main className="p-2 w-full">
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
                            <div className="flex sm:pl-6 lg:pl-[82px] justify-start w-full overflow-hidden p-4 lg:gap-[120px] sm:gap-2">
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
                    {/*view more*/}
                </section>
                <div className="flex justify-center pt-4">
                    <button className="flex items-center gap-1">
                        <p>View More</p>
                        <FaChevronDown/>
                    </button>
                </div>

                {/*products*/}
                <section className="bg-white mt-4 pb-8">
                <h1 className="font-bold text-2xl pl-4 pb-4">Our Products</h1>
                    <div className="grid grid-cols-1 md-grid-cols-2 xl:grid-cols-3 gap-4">
                        {
                            vehicleImages.map((image, index) => (
                                <div key={index} className="text-center">
                                    <Image src={image} alt="logo" className="cursor-pointer"/>
                                </div>
                            ))
                        }
                    </div>
                </section>

            {/* official brandings*/}
            <section className="bg-gray-100 mt-4 pb-8">
                <h1 className="font-bold text-2xl pl-4 pb-4">Official Brandings</h1>
                <div className="grid grid-cols-1 md-grid-cols-2 xl:grid-cols-3 gap-4">
                    {
                        brandings.map((image, index) => (
                            <div key={index} className="text-center">
                                <Image src={image} alt="logo" className="cursor-pointer"/>
                            </div>
                        ))
                    }
                </div>
            </section>
            </main>
        </div>
    );
};

export default Header;
