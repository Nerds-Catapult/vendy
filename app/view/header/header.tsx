import React  from "react";
import Image from 'next/image'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import kfc from '@/public/images/kfc.png'
import bakersinn from '@/public/images/bakersinn.png'
import bnd from '@/public/images/bnd.png'
import dormans from '@/public/images/dormans.jpeg'
import DStv from '@/public/images/DStv.png'
import Carrefour from '@/public/images/Carrefour.jpeg'

const Header = () => {
  const imagesInArray = [kfc, bakersinn, bnd, dormans, DStv, Carrefour];
  const [currentImage, setCurrentImage] = React.useState(0);

  const handleNext = () => {
    setCurrentImage((currentImage + 1) % imagesInArray.length);
  };

  const handlePrev = () => {
    setCurrentImage((currentImage - 1 + imagesInArray.length) % imagesInArray.length);
  };

  return (
    <div>
      <section className="p-11">
        <div className="flex justify-between w-full h-full">
          <button onClick={handlePrev}>
            <FaAngleLeft size={30} />
          </button>
          <div className="flex justify-center items-center w-[90px] h-[60px] ">
            <Image
              src={imagesInArray[currentImage]}
              alt="logo"
              className="rounded-full"
            />
          </div>
          <button onClick={handleNext}>
            <FaAngleRight size={30} />
          </button>
        </div>
      </section>
    </div>
  )
}

export default Header;