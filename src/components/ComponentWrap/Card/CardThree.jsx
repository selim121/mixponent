import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

const CardThree = () => {

    const profileImage = "https://img.freepik.com/free-photo/cheerful-woman-with-binoculars_23-2147654303.jpg";
    const [mouseEnter, setMouseEnter] = useState(false);

    return (
        <div>
            <div onMouseEnter={() => setMouseEnter(true)} onMouseLeave={() => setMouseEnter(false)} className="bg-[#ffffff] p-8 rounded-xl">
                <div className="flex items-stretch justify-between gap-10">
                    <div className="relative h-[150px] w-[150px]">
                        <img className={`absolute h-full w-full object-cover object-top transition-all duration-300 ${mouseEnter ? "top-0 left-0 p-2" : "-top-3 -left-3"}`} src={profileImage} alt="Profile image" />
                        <div className="h-[150px] w-[150px] bg-[#0aa370]"></div>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                        <h6 className="text-[#070717] text-2xl tracking-wide leading-none font-semibold">Sanzida Zerin</h6>
                        <p className="text-[#070717] opacity-60 text-md tracking-wide">HR & Admin</p>
                        <p className="text-[#070717] text-md tracking-wide mt-2">+880 1436 738590</p>
                        <p className="text-[#070717] text-md tracking-wide">profile@gmail.com</p>
                        <div className="flex gap-3 mt-5">
                            <Link className='scale-100 rounded-full p-[6px] transition-transform duration-300 hover:scale-125 hover:bg-[#a4ffe1]' ><FaGithub color='070717' size={"20px"} /></Link>
                            <Link className='scale-100 rounded-full p-[6px] transition-transform duration-300 hover:scale-125 hover:bg-[#a4ffe1]' ><FaLinkedinIn color='070717' size={"20px"} /></Link>
                            <Link className='scale-100 rounded-full p-[6px] transition-transform duration-300 hover:scale-125 hover:bg-[#a4ffe1]' ><FaFacebookF color='070717' size={"20px"} /></Link>
                            <Link className='scale-100 rounded-full p-[6px] transition-transform duration-300 hover:scale-125 hover:bg-[#a4ffe1]' ><FaInstagram color='070717' size={"20px"} /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardThree;