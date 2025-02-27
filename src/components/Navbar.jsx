import logo from "../assets/Logo.png";
import { Plus } from 'lucide-react';
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
    return (
        <nav>
            <div className="flex justify-between px-10 bg-orange-600/90 text-white py-1 text-sm">
                <h1 className="font-bold">GetProList :<span className="font-normal"> India Best Local Search Engine</span></h1>
                <ul>
                    <div className="space-x-5 flex lexend ">
                        <li>Hi, Guest</li>
                        <button>Sign In</button>
                        <button>Register</button>
                        <button>GET LEADS</button>
                        <button>Contact</button>
                    </div>
                </ul>
            </div>
            <div className="flex justify-between items-start px-20 py-4 border-b ">
                <img src={logo} alt="Logo Image"  className="w-40"/>
                <ul className="space-x-10 text-xl font-semibold flex p-1">
                    <button className="flex items-center gap-2 ">
                    <FaUser color="#dd6b20"/>Sign In
                    </button>
                    <button className="flex items-center gap-2">
                    <Plus  className="text-orange-600"/>Add Business
                    </button>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar