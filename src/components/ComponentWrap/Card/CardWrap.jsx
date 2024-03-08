import React, { useState } from 'react';
import COneCode from '../../IgnoreComponents/COneCode';
import CardOne from './CardOne';

const CardWrap = () => {

    const [click, setClick] = useState('preview');

    return (
        <div className="max-w-[1700px] ps-60 pe-[16px] pt-40 min-h-screen">
            <h1 className="text-white text-4xl text-center tracking-widest font-semibold mb-5">Card Mixponent</h1>
            <p className="text-white text-2xl mb-8"><span className="text-[#0aa370]">&#47;&#47;</span>Basic card</p>

            <div className="mb-5">
                <button
                    onClick={() => setClick('preview')}
                    className={`hover:border-[#0aa370b0] ${click === "preview" ? "px-6 py-2 bg-[#0aa370] text-[#fff] tracking-widest transition-color duration-500 border border-[#fff0]" : "px-6 py-2 bg-[#070717] text-[#0aa370] border border-[#0aa370] transition-color duration-500 tracking-widest"}`}
                    style={{ borderTopLeftRadius: "8px", borderEndStartRadius: "8px" }}>
                    Preview
                </button>
                <button
                    onClick={() => setClick('code')}
                    className={`hover:border-[#0aa370b0] ${click === "code" ? "px-6 py-2 bg-[#0aa370] text-[#fff] tracking-widest transition-color duration-500 border border-[#fff0]" : "px-6 py-2 bg-[#070717] text-[#0aa370] border border-[#0aa370] transition-color duration-500 tracking-widest"}`}
                    style={{ borderTopRightRadius: "8px", borderEndEndRadius: "8px" }}>
                    Code
                </button>
            </div>
            <div className="relative">
                <COneCode />
                <div className={`bg-[#1d262f] flex items-center justify-center absolute left-0 top-0 right-0 bottom-0 z-10 ${click === "preview" ? "h-full opacity-100 overflow-hidden transition-all duration-500" : "h-0 opacity-0 overflow-hidden transition-all duration-500"}`}>
                    <CardOne />
                </div>
            </div>
        </div>
    );
};

export default CardWrap;
