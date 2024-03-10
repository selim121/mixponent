import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

const CardTwo = () => {

    const [ mouseEnter, setMouseEnter ] = useState(false);
    const cardImage = "https://img.freepik.com/free-photo/beautiful-woman-sweater-sweater_144627-46546.jpg";

    return (
        <div>
            <div onMouseEnter={() => setMouseEnter(true)} onMouseLeave={() => setMouseEnter(false)} className="overflow-hidden">
                <div className="relative h-[200px] w-[250px] md:h-[300px] md:w-[300px] lg:h-[350px] lg:w-[350px]">
                    <img className={`h-full w-full object-cover object-top transition-transform duration-500 ${mouseEnter ? "scale-110" : "scale-100"}`} src={cardImage} alt="Card one image" />
                    <div className={`absolute bottom-0 left-0 bg-[#ffffff] px-3 py-1 inline-flex flex-col items-start justify-center transition-all duration-700 ${mouseEnter ? "rounded-tr-[0px]" : "rounded-tr-[60px]"}`}>
                        <h6 className="text-[#070717] text-md tracking-wide">Sanzida Zerin</h6>
                        <p className="text-[#070717] opacity-60 text-sm tracking-wide">Designer</p>
                    </div>
                    <div 
                    className={`absolute right-0 inline-flex flex-col items-center justify-center gap-3 bg-[#ffffff] p-2 rounded-bl-[20px] transition-all duration-700 ${mouseEnter ? "top-0" : "-top-[100%]"}`}
                    >
                        <Link className='scale-100 transition-transform duration-500 hover:scale-110' ><FaGithub color='0aa370' size={"16px"} /></Link>
                        <Link className='scale-100 transition-transform duration-500 hover:scale-125' ><FaLinkedinIn color='0aa370' size={"16px"} /></Link>
                        <Link className='scale-100 transition-transform duration-500 hover:scale-125' ><FaFacebookF color='0aa370' size={"16px"} /></Link>
                        <Link className='scale-100 transition-transform duration-500 hover:scale-125' ><FaInstagram color='0aa370' size={"16px"} /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardTwo;