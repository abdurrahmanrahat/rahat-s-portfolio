import { AiOutlineMail } from "react-icons/ai";
import { FaArrowRight, FaGithub, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div id="contact" className="bg-[#1D1D1D] text-white">
            <div className="max-w-screen-xl mx-auto p-4 md:flex py-10">
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-semibold border-b-2 border-white w-[38%] md:w-[22%]">Say Hello!</h2>
                    <form action="https://formspree.io/f/moqoandr" method="POST" className="max-w-md mx-auto mt-4">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-lg font-semibold">Name*</label>
                            <input type="text" name="name" id="name" className="w-full border border-gray-300 rounded px-3 py-1 bg-transparent" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-lg font-semibold">Email*</label>
                            <input type="email" name="email" id="email" className="w-full border border-gray-300 rounded px-3 py-1 bg-transparent" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="massage" className="block text-lg font-semibold">Message*</label>
                            <textarea name="massage" id="massage" cols="30" rows="3" className="w-full border border-gray-300 rounded px-3 py-2 bg-transparent"></textarea>
                        </div>

                        <button type="submit" className="bg-[#FEB000] text-white text-lg uppercase px-6 py-2 rounded hover:bg-[#161922] cursor-pointer flex items-center gap-1" >Send <FaArrowRight /></button>
                    </form>
                </div>
                <div className="md:w-1/2 flex flex-col justify-center py-6 mt-8 md:mt-0 md:pl-24">
                    <h2 className="text-3xl font-semibold">Connect with me</h2>
                    <div className="mt-5">
                        <p className="text-lg">
                            <span><AiOutlineMail className='inline text-xl' /> abdurrahmanrahat47@gmail.com</span>
                        </p>
                        <p className="text-lg">
                            <span><FaPhoneAlt className='inline text-xl' /> +8801820897892</span>
                        </p>
                        <p className="text-lg">
                            <span><SlLocationPin className='inline text-xl' /> Lakshmipur, Bangladesh</span>
                        </p>
                    </div>
                    <h2 className="text-2xl font-semibold my-2">Social contact</h2>
                    <div className="flex gap-6 text-2xl">
                        <Link to='https://www.linkedin.com/in/abdurrahmanrahat47/'>
                            <FaLinkedinIn />
                        </Link>
                        <Link>
                            <FaWhatsapp />
                        </Link>
                        <Link to='https://github.com/abdurrahmanrahat'>
                            <FaGithub />
                        </Link>
                        <Link to='https://www.instagram.com/abdurrahmanrahat47/'>
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;