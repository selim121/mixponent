import React, { useState } from 'react';
import { IoMdArrowDropup } from "react-icons/io";
import '../../styles/Styles.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [arrowClass, setArrowClass] = useState(false);
    const arrowRotate = () => {
        setArrowClass(prevState => !prevState);
    };

    return (
        <div className="rounded-xl container absolute top-0">
            <div className="w-56 h-screen bg-[#202030] pt-8">
                <div className="flex items-center justify-center">
                    <div className="h-9 w-8 relative">
                        <div className="absolute h-9 w-1 bg-[#67b4e8] left-0 top-0"></div>
                        <div className="absolute h-9 w-1 bg-[#7bcaff] left-[7px] -rotate-[20deg] top-0"></div>
                        <div className="absolute h-9 w-1 bg-[#a3daff] left-[19px] rotate-[20deg] top-0"></div>
                        <div className="absolute h-9 w-1 bg-[#bce4ff] left-[26px] top-0"></div>
                    </div>
                    <p className='text-white text-[25px] mt-[18px] font-semibold'>ixponent</p>
                </div>
                <div className="w-full h-[4px] bg-white mt-5"></div>
                <div className='px-5 mt-8 text-white text-2xl transition-all duration-300'>
                    <div onClick={arrowRotate} className="flex items-center components cursor-pointer">
                        <p className='components-text'>Components</p>
                        <IoMdArrowDropup className={`transition duration-500 arrow ${arrowClass ? 'arrow-rotate' : ''}`} size={"40px"} />
                    </div>
                    <div className={`component-lists ${arrowClass ? 'active' : ''}`}>
                        <div className="mt-5 ms-3 flex flex-col gap-1">
                            <Link className="py-2 rounded-lg text-xl hover:text-[#b6ecff] hover:ps-5 transition-all duration-500 hover:bg-[#171727]">Slider</Link>
                            <Link className="py-2 rounded-lg text-xl hover:text-[#b6ecff] hover:ps-5 transition-all duration-500 hover:bg-[#171727]">Avatar</Link>
                            <Link className="py-2 rounded-lg text-xl hover:text-[#b6ecff] hover:ps-5 transition-all duration-500 hover:bg-[#171727]">Button</Link>
                            <Link className="py-2 rounded-lg text-xl hover:text-[#b6ecff] hover:ps-5 transition-all duration-500 hover:bg-[#171727]">Gallery</Link>
                            <Link className="py-2 rounded-lg text-xl hover:text-[#b6ecff] hover:ps-5 transition-all duration-500 hover:bg-[#171727]">Dropdown</Link>
                            <Link className="py-2 rounded-lg text-xl hover:text-[#b6ecff] hover:ps-5 transition-all duration-500 hover:bg-[#171727]">Card</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;