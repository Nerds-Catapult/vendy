import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import vendy from "@/public/images/vendy.png";
import Image from 'next/image';
import {buttonVariants} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import Link from "next/link";
import {FaShoppingCart} from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="h-[100px] bg-gray-300 flex items-center p-8 w-full justify-between">
            <Image src={vendy} alt="vendy" className="h-10 w-fit"/>
            <Input type="text" placeholder="Search" className="w-[25%] h-10 bg-white border-2 border-gray-300"
                   style={{borderRadius: "0.5rem", outline: "0", padding: "0.5rem"}}
            />
            <Link className={buttonVariants({variant: "ghost"})} href={'/'}>Create your store</Link>
            <Link className={buttonVariants({variant: "ghost"})} href={'/'}>Run Errands</Link>
            <Link className={buttonVariants({variant: "ghost"})} href={'/'}>Contact Us</Link>
            <div>
                <FaShoppingCart className={cn("text-red-700 w-[25px] h-[35px]")}/>
                <span
                    className={cn("bg-blue-700 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center absolute top-9  transform translate-x-1/2 -translate-y-1/2")}
                >0</span>
            </div>
            <Button>Sign Up</Button>
        </div>
    )
}

export default Navbar;