import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaTwitter, FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import logo from "../assets/Logo.png"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        location: "",
        description: ""
    });

    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        for (const key in formData) {
            if (!formData[key].trim()) {
                return "All fields are mandatory";
            }
            
        }
        return "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }
        // Clear form and errors if valid
        setFormData({ name: "", email: "", mobile: "", location: "", description: "" });
        setError("");
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000); // Reset success message after 3 seconds
    };

    return (
        <div className="md:px-20 md:py-10 sm:px-10 sm:py-5 px-2 py-2">
            <div className="md:flex md:flex-row gap-8">
                <div className="md:w-[65%]">
                    <div className="space-x-20 space-y-5">
                        <div className="border-b-4 border-b-orange-600/90 text-4xl font-semibold lexend py-4 w-full">Contact Us</div>
                        <div className="border border-gray-300 rounded-lg">
                            <form className="space-y-4 md:px-10 px-3 py-12" onSubmit={handleSubmit}>
                                {error && <div className="text-red-600 text-lg">{error}</div>}
                                <div className="grid grid-cols-2 gap-4">
                                    <Input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                                    <Input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <Input name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} />
                                    <Input name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
                                </div>

                                <Textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />

                                {submitted && <div className="text-green-600 text-lg">Details submitted successfully!</div>}
                                <div className="flex justify-center">
                                    <Button type="submit" className="bg-black text-gray-300 px-6 py-2 w-28 h-10">Submit</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="md:w-[35%] mt-2.5">
                    <div className="bg-orange-600/90 rounded-xl text-white p-3 text-4xl">Office Address</div>
                    <div className="space-y-5 mt-4 rounded-lg bg-gray-100 w-full  p-5">

                        <div className="flex gap-4 items-center md:text-lg text-sm">
                            <div className="min-w-10 h-10 rounded-lg bg-orange-600/90  flex justify-center items-center">
                                <FaPhoneAlt color="white" className=" w-5 h-5" />
                            </div>
                            <div>
                                080-69578467
                            </div>
                        </div>
                        <div className="flex gap-4 items-center md:text-lg text-sm">
                            <div className="min-w-10 h-10 rounded-lg bg-orange-600/90  flex justify-center items-center">
                                <IoMail color="white" className=" w-5 h-5" />
                            </div>
                            <div>
                                help@getprolist.com
                            </div>
                        </div>
                        <div className="flex gap-4 md:text-lg text-sm">
                            <div className="min-w-10 h-10 rounded-lg bg-orange-600/90  flex justify-center items-center ">
                                <MdHome color="white" className=" w-5 h-5" />
                            </div>
                            <span>Getprolist Info Technologies Pvt.Ltd.,<br />
                                #69-3-17/1H, Sri Srinivasa Plaza, 2nd Floor,<br />
                                Nagavanam, Rajendra Nagar, Kakinada,<br />
                                Andhra Pradesh,533003.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 rounded-3xl mt-10 md:px-20 md:py-12 px-10 py-5 md:m-3 m-2">
                <div className="flex flex-col justify-between items-center gap-4">
                    <h1 className="md:text-5xl text-2xl font-semibold">Do you have business ?</h1>
                    <span className="md:text-[17px]">Sell your product online FOR FREE. It&apos;s easier than you think ! </span>
                    <Button className="text-gray-300 h-11 w-48">Add Business, It&apos;s Free</Button>
                </div>
            </div>
            <div className="border border-gray-300 rounded-xl mt-3">
                <div className="md:flex md:justify-between">
                    <div className="flex md:p-8 ">
                        <ul className="flex flex-col items-start p-5 border-b-gray-300 ">
                            <Button variant="link" className="h-6 text-[16px]">About Us</Button>
                            <Button variant="link" className="h-6 text-[16px]">Terms & Conditions</Button>
                            <Button variant="link" className="h-6 text-[16px]">Our Services</Button>
                            <Button variant="link" className="h-6 text-[16px]">Company Description</Button>
                            <Button variant="link" className="h-6 text-[16px]">Frequently Asked Questions</Button>
                            <Button variant="link" className="h-6 text-[16px]">Privacy Policy</Button>
                            <Button variant="link" className="h-6 text-[16px]">Why Us</Button>
                        </ul>
                    </div>
                    <div className="md:flex md:items-center md:justify-center md:flex-col lexend p-8 hidden">
                        <img src={logo} alt="Logo Image" className=" w-40 h-12" />
                        <span>Getprolist (Getprolist Info Technologies Pvt.</span>
                        <span>Ltd.) digital platform was built to offer business</span>
                        <span>information in your locality. yoou can browse</span>
                        <span>thr.... </span>
                        <div className=" flex gap-3 p-3">
                            <div className="flex items-center justify-center ">
                                <Button className="w-7 h-7 rounded-full bg-black"><FaTwitter color="white" /></Button>
                            </div>
                            <div className="flex items-center justify-center">
                                <Button className="w-7 h-7 rounded-full bg-black"><FaLinkedinIn color="white" /></Button>
                            </div>
                            <div className="flex items-center justify-center">
                                <Button className="w-7 h-7 rounded-full bg-black"><FaInstagram color="white" /></Button>
                            </div>
                            <div className="flex items-center justify-center">
                                <Button className="w-7 h-7 rounded-full bg-black"><FaFacebookF color="white" /></Button>
                            </div>
                            <div className="flex items-center justify-center">
                                <Button className="w-7 h-7 rounded-full bg-black"><FaYoutube color="white" /></Button>
                            </div>
                        </div>
                    </div>
                    <div className="lexend p-8 space-y-2 md:flex hidden flex-col">
                        <h1 className="text-3xl">Have Questions?</h1>
                        <div className="md:flex md:gap-4 md:items-center hidden">
                            <FaPhoneAlt />080-69578467
                        </div>
                        <div className="md:flex md:gap-4 items-center">
                            <FaWhatsapp />7901313236
                        </div>
                        <Button>help@getprolist.com</Button>
                        <h1>24/7 Dedicated Customer Support</h1>
                    </div>
                    <div className="lexend p-8 md:hidden space-y-2 border-b-gray-300 border">
                        <h1 className="text-3xl">Have Questions?</h1>
                        <div className="flex gap-4 items-center">
                            <FaPhoneAlt />080-69578467
                        </div>
                        <div className="flex gap-4 items-center">
                            <FaWhatsapp />7901313236
                        </div>
                        <Button>help@getprolist.com</Button>
                        <h1>24/7 Dedicated Customer Support</h1>
                    </div>
                    <div className="md:hidden flex items-center justify-center flex-col lexend p-8">
                        <img src={logo} alt="Logo Image" className=" w-40 h-12" />
                        <span>Getprolist (Getprolist Info Technologies Pvt.Ltd.)</span>
                        <span>digital platform was built to offer business</span>
                        <span>information in your locality. yoou can browse thr...</span>
                        <div className=" flex gap-3 p-3">
                            <div className="flex items-center justify-center ">
                                <Button className="w-7 h-7 rounded-full bg-black"><FaTwitter color="white" /></Button>
                            </div>
                            <div className="flex items-center justify-center">
                                <Button className="w-7 h-7 rounded-full bg-black"><FaLinkedinIn color="white" /></Button>
                            </div>
                            <div className="flex items-center justify-center">
                                <Button className="w-7 h-7 rounded-full bg-black"><FaInstagram color="white" /></Button>
                            </div>
                            <div className="flex items-center justify-center">
                                <Button className="w-7 h-7 rounded-full bg-black"><FaFacebookF color="white" /></Button>
                            </div>
                            <div className="flex items-center justify-center">
                                <Button className="w-7 h-7 rounded-full bg-black"><FaYoutube color="white" /></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" border border-t-gray-300 flex justify-center items-center p-3">&copy; 2024 Getprolist Info Technologies Pvt. Ltd. - All Rights Reserved</div>
            </div>
        </div>
    );
};

export default Contact;