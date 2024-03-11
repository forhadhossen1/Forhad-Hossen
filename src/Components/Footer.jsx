import { FaArrowRight, FaFacebook, FaGithub, FaLinkedin, FaLocationDot, FaVoicemail, FaWhatsapp } from "react-icons/fa6";
import { MdEmail, MdOutlineAlternateEmail, MdPermPhoneMsg } from "react-icons/md";
const Footer = () => {
    return (
        <div>
            <footer className="py-6 bg-[#0c0c20]">
                <div className="max-w-screen-xl px-6 mx-auto space-y-6 divide-y dark:divide-gray-400 md:space-y-12 divide-opacity-50">

                    <div className="grid grid-cols-1 md:grid-cols-4">
                        <div className="pb-6 col-span-full md:pb-0 md:col-span-2">
                            <h2 className="text-4xl font-bold">Lets TALK</h2>
                            <button className="text-md p-3 mt-4 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center gap-4"> Click to Contact <FaArrowRight /></button>
                        </div>

                        <div className="col-span-1 text-center md:text-left md:col-span-1 space-y-4">
                            <p className="pb-1 text-xl font-bold">Quick Link</p>
                            <ul className="space-y-3">
                                <li>
                                    <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">Resume</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">Portfolio</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">Contact</a>
                                </li>
                            </ul>

                        </div>

                        <div className="col-span-1 text-center md:text-left md:col-span-1 space-y-3">
                            <p className="pb-1 text-2xl font-bold">Address</p>
                            <div className="flex gap-2 items-center">
                                <FaLocationDot className="text-xl text-pink-600" />
                                <p>Rangpur, Bangladesh</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <MdOutlineAlternateEmail className="text-xl text-purple-600" />
                                <p>mr.forhad1030@gmail.com</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <MdPermPhoneMsg className="text-xl text-pink-600" />
                                <p>+8801306181767</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid justify-center pt-6 lg:justify-between">
                        <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                            <span>©2024 All rights reserved</span>
                        </div>
                        <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                            <a href="mailto:mr.forhad1030@gmail.com" target="_blank" title="Email" className="flex items-center justify-center rounded-full">
                                <MdEmail className="text-3xl text-purple-600" />
                            </a>

                            <a href="https://github.com/forhadhossen1" target="_blank" title="Github" className="flex items-center justify-center rounded-full ">
                                <FaGithub className="text-3xl text-purple-600" />
                            </a>

                            <a href="https://www.linkedin.com/in/forhadhossen1/" target="_blank" title="Linkedin" className="flex items-center justify-center  rounded-full ">
                                <FaLinkedin className="text-3xl text-purple-600" />
                            </a>

                            <a href="https://www.facebook.com/profile.php?id=100085288886971" target="_blank" title="Facebook" className="flex items-center justify-center rounded-full ">
                                <FaFacebook className="text-3xl text-purple-600" />
                            </a>

                            <a href="tel:+8801306181767" target="_blank" title="Whatsapp" className="flex items-center justify-center rounded-full">
                                <FaWhatsapp className="text-3xl text-purple-600" />
                            </a>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;