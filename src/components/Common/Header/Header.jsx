import React from 'react';
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { PiLinkSimpleFill } from "react-icons/pi";
import { FaSquareFacebook } from "react-icons/fa6";

import '../../../styles/Styles.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container fixed top-[30px] z-50">
            <div className="h-[60px] me-4 bg-[#1d262ff4] flex items-center justify-between px-5 rounded-3xl">
                <div className="inline-flex items-center gap-20">
                    <Link to={'/'}>
                        <div className="flex items-center justify-center">
                            <div className="h-9 w-8 relative">
                                <div className="absolute h-9 w-1 bg-[#0aa370] left-0 top-0"></div>
                                <div className="absolute h-9 w-1 bg-[#6be4bc] left-[7px] -rotate-[20deg] top-0"></div>
                                <div className="absolute h-9 w-1 bg-[#bcf0df] left-[19px] rotate-[20deg] top-0"></div>
                                <div className="absolute h-9 w-1 bg-[#ceece2] left-[26px] top-0"></div>
                            </div>
                            <p className='text-white text-[25px] mt-[18px] font-semibold'>ixponent</p>
                        </div>
                    </Link>
                    <div className="">
                        <input className='px-3 py-2 rounded-3xl bg-[#070717] w-64 text-white' type="search" name="" placeholder='Type here....' id="" />
                    </div>
                </div>
                <div className="inline-flex items-center justify-center gap-3">
                    <Link className='scale-100 transition-transform duration-500 hover:scale-125' ><FaSquareGithub color='#0aa370' size={"30px"} /></Link>
                    <Link className='scale-100 transition-transform duration-500 hover:scale-125' ><FaLinkedin color='#0aa370' size={"30px"} /></Link>
                    <Link className='scale-100 transition-transform duration-500 hover:scale-125' ><FaSquareFacebook color='#0aa370' size={"30px"} /></Link>
                    <Link className='scale-100 transition-transform duration-500 hover:scale-125' ><PiLinkSimpleFill color='#0aa370' size={"36px"} /></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;