import React, { useState } from 'react';
import { IoMdArrowDropup } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import '../../styles/Styles.css';

const Navbar = () => {
    const [arrowClass, setArrowClass] = useState(false);
    const arrowRotate = () => {
        setArrowClass(prevState => !prevState);
    };

    return (
        <div className="rounded-xl container">
            <div className="w-56 h-screen fixed top-0 bg-[#202030] pt-28">
                <div className="w-full h-[4px] bg-white mt-5"></div>
                <div className='px-5 mt-8 text-white text-2xl transition-all duration-300'>
                    <div onClick={arrowRotate} className="flex items-center components cursor-pointer">
                        <p className='components-text'>Components</p>
                        <IoMdArrowDropup className={`transition duration-500 arrow ${arrowClass ? 'arrow-rotate' : ''}`} size={"40px"} />
                    </div>
                    <div className={`component-lists ${arrowClass ? 'active' : ''}`}>
                        <div className="mt-5 ms-3 flex flex-col gap-1">
                            <NavLink
                                to="/cards"
                                className={({ isActive }) => (isActive ? "text-[#b6ecff] ps-5 py-2 rounded-lg text-xl transition-all duration-500 bg-[#171727]" : "py-2 rounded-lg text-xl hover:text-[#b6ecff] hover:ps-5 transition-all duration-500 hover:bg-[#171727]")}
                            >
                                Card
                            </NavLink>
                            <NavLink
                                to="/home"
                                className={({ isActive }) => (isActive ? "text-[#b6ecff] ps-5 py-2 rounded-lg text-xl transition-all duration-500 bg-[#171727]" : "py-2 rounded-lg text-xl hover:text-[#b6ecff] hover:ps-5 transition-all duration-500 hover:bg-[#171727]")}
                            >
                                Slider
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;