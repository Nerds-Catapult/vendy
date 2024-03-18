import Image from 'next/image';
import vendy from "@/public/images/vendy.png";

const Footer =()=>{
    return (
        <footer className="bg-gray-300 h-fit text-white flex justify-between p-4 mt-auto w-full fixed bottom-0">
            <div className="">
                <Image src={vendy} alt="vendy" className="h-10 w-fit text-white"/>
            </div>
            <div>
                <h1 className="text-black">useful links</h1>
                <ul className="pl-2 m-2 text-gray-600">
                    <li>Home</li>
                    <li>Stores</li>
                    <li>Services</li>
                    <li>Products</li>
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
    )
}

export default Footer;