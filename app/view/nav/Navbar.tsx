"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import vendy from "@/public/images/vendy.png";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-300 flex items-center p-4 w-full justify-between">
      <Image
        src={vendy}
        alt="vendy"
        width={50}
        height={50}
        className=" w-auto h-auto"
      />
      <Input
        type="text"
        placeholder="Search"
        className="w-1/2 h-10 bg-white border-2 border-gray-300 hidden md:block"
        style={{ borderRadius: "0.5rem", outline: "0", padding: "0.5rem" }}
      />
      <div className="hidden md:flex md:w-auto md:space-x-4">
        <Link href="/" className={buttonVariants({ variant: "ghost" })}>
          Create your store
        </Link>
        <Link href="/" className={buttonVariants({ variant: "ghost" })}>
          Run Errands
        </Link>
        <Link href="/" className={buttonVariants({ variant: "ghost" })}>
          Contact Us
        </Link>
        <div className="relative">
          <FaShoppingCart className="text-red-700 w-6 h-6" />
          <span className="bg-blue-700 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
            0
          </span>
        </div>
        <Button>Sign Up</Button>
      </div>
      <div className="md:hidden">
        <GiHamburgerMenu
          className="text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <div className="absolute top-12 right-0 bg-gray-300 w-full p-4">
            <Input
              type="text"
              placeholder="Search"
              className="w-full h-10 bg-white border-2 border-gray-300 mb-4"
              style={{
                borderRadius: "0.5rem",
                outline: "0",
                padding: "0.5rem",
              }}
            />
            <Link href="/" className="block mb-2">
              Create your store
            </Link>
            <Link href="/" className="block mb-2">
              Run Errands
            </Link>
            <Link href="/" className="block mb-2">
              Contact Us
            </Link>
            <Button className="w-full">Sign Up</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
