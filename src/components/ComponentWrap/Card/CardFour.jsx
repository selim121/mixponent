import React, { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const CardFour = () => {

    const profileImage = "https://img.freepik.com/free-photo/pretty-girl_1157-7141.jpg";
    const [mouseEnter, setMouseEnter] = useState(false);

    return (
        <div>
            <div onMouseEnter={() => setMouseEnter(true)} onMouseLeave={() => setMouseEnter(false)} className="rounded-xl overflow-hidden w-64 md:w-80">
                <div className="relative h-[200px] w-full">
                    <img className="h-full w-full object-cover object-top rounded-tl-xl rounded-tr-xl" src={profileImage} alt="Profile image" />
                    <Link className="absolute top-1 left-1 px-2 py-1 rounded-xl text-[#070717] text-sm bg-[#e3e928] transition-colors duration-500 hover:bg-[#ffffff] hover:text-[#0aa370]">New</Link>
                </div>
                <div className="relative px-3 pb-3 pt-1 bg-[#ffffff]">
                    <div className="flex items-center justify-start gap-3 mt-1 mb-4">
                        <div className="flex items-center justify-start gap-2">
                            <div className="w-6 h-6 rounded-full overflow-hidden">
                                <img className="h-full w-full object-cover object-top" src={profileImage} alt="Profile image" />
                            </div>
                            <div className="w-2 h-[1px] bg-[#070717]"></div>
                            <Link className="text-[#070717] text-sm tracking-wide leading-none font-semibold transition-colors duration-500 hover:text-[#0aa370]">Sanzida Zerin</Link>
                        </div>
                        <div className="w-[1px] h-3 bg-[#070717]"></div>
                        <p className="text-[#070717] opacity-60 text-sm tracking-wide">Feb 18, 2024</p>
                    </div>
                    <Link className="text-[#070717] text-2xl font-semibold mb-4 transition-colors duration-500 hover:text-[#0aa370]">The easiest way to become a successful designer</Link>
                    <p className="text-[#070717] text-md mt-2 pb-6">Sometimes people don&apos;t want the best, and they don&apos;t want easy - they want fast. In some industries...</p>
                    <div className={`absolute right-2 flex items-center justify-center h-12 w-12 rounded-full bg-[#1d262f] shadow-xl transition-all duration-500 cursor-pointer scale-100 hover:scale-75 ${mouseEnter ? "bottom-2" : " -bottom-full"}`}><FaArrowRightLong className={`transition-all duration-1000 ${mouseEnter ? "-rotate-45" : "rotate-0"}`} size={"20px"} color='white' /></div>
                </div>
            </div>
        </div>
    );
};

export default CardFour;