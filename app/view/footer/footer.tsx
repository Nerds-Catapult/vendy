import Image from "next/image";
import vendy from "@/public/images/vendy.png";

const Footer = () => {
  return (
    <footer className="bg-gray-300 h-fit text-white flex justify-between p-4 mt-auto w-full">
      <div className="">
        <Image src={vendy} alt="vendy" className="h-10 w-fit text-white" />
      </div>
      <div>
        <ul className="pl-2 m-2 text-gray-600">
          <li className=" cursor-pointer">Home</li>
          <li className=" cursor-pointer">Stores</li>
          <li className=" cursor-pointer">Services</li>
          <li className=" cursor-pointer">Products</li>
        </ul>
      </div>
      <div>
        <h1>Get in touch</h1>
        <ul className="pl-2 m-2 text-gray-600">
          <li>Phone: +254757387606</li>
          <li>Gmail: info@nerds.com</li>
          <li>twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
