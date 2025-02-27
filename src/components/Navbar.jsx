import logo from "../assets/Logo.png";
import { Plus } from 'lucide-react';
import { FaUser } from "react-icons/fa6";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"


const Navbar = () => {

    return (
        <Sheet key="left" >
        <nav>
            <div className="flex justify-between px-10 bg-orange-600/90 text-white py-1 text-sm">
                <div className="md:hidden bg-white rounded-xl flex items-center">
                    <img src={logo} alt="Logo Image" className="w-40" />
                </div>
                <h1 className="font-bold md:flex hidden">GetProList :<span className="font-normal md:"> India Best Local Search Engine</span></h1>
                <ul >
                    <div className="space-x-5 md:flex lexend hidden ">
                        <li>Hi, Guest</li>
                        <button>Sign In</button>
                        <button>Register</button>
                        <button>GET LEADS</button>
                        <button>Contact</button>
                    </div>
                </ul>
                <SheetTrigger asChild>
                    <svg className="w-6 h-6 md:hidden mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </SheetTrigger>
                <SheetContent className="sm:w-[300px] ">
                    <div>
                        <div className=" transition duration-300 ease-in-out p-4 rounded-lg">
                            <ul className="flex flex-col space-y-2 text-orange-600 lexend items-start">
                                <button className="px-4 py-2 ">Sign In</button>
                                <button className="px-4 py-2 ">Register</button>
                                <button className="px-4 py-2 ">Get Leads</button>
                                <button className="px-4 py-2 ">Contact</button>
                                <button className="px-4 py-2 ">Add Business</button>
                            </ul>
                        </div>
                    </div>
                </SheetContent>
            </div>
            <div className="flex justify-between items-start px-20 py-4 border-b ">
                <div className="md:flex hidden">
                    <img src={logo} alt="Logo Image" className="w-40" />
                </div>
                <ul className="space-x-10 text-xl font-semibold md:flex hidden p-1">
                    <button className="flex items-center gap-2 ">
                        <FaUser color="#dd6b20" />Sign In
                    </button>
                    <button className="flex items-center gap-2">
                        <Plus className="text-orange-600" />Add Business
                    </button>
                </ul>
            </div>
        </nav>
        </Sheet>

    )
}

export default Navbar