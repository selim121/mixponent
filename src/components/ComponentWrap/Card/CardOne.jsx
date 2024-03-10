import React, { useState } from 'react';

const CardOne = () => {

    const [mouseEnter, setMouseEnter] = useState(false);
    const cardImage = "https://img.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg";

    return (
        <div onMouseEnter={() => setMouseEnter(true)} onMouseLeave={() => setMouseEnter(false)} className="overflow-hidden">
            <div className="relative h-[250px] w-[250px] md:h-[300px] md:w-[300px] lg:h-[350px] lg:w-[350px]">
                <img className={`h-full w-full object-cover object-top transition-transform duration-500 ${mouseEnter ? "scale-110" : "scale-100"}`} src={cardImage} alt="Card one image" />
                <div className={`absolute bottom-0 left-0 bg-[#ffffff] px-3 py-1 inline-flex flex-col items-start justify-center transition-all duration-700 ${mouseEnter ? "rounded-tr-[0px]" : "rounded-tr-[60px]"}`}>
                    <h6 className="text-[#070717] text-md tracking-wide">Sanzida Zerin</h6>
                    <p className="text-[#070717] opacity-60 text-sm tracking-wide">Designer</p>
                </div>
            </div>
        </div>
    );
};

export default CardOne;