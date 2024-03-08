import React from 'react';
import { Link } from 'react-router-dom';
import video1 from '../../assets/video/home-video1.mp4';
import video2 from '../../assets/video/home-video2.mp4';
import '../../styles/Styles.css';

const Home = () => {
    return (
        <div className="max-w-[1700px] ps-60 pt-40 pe-[16px] h-screen">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-[80px] bg-gradient-to-r from-[#0aa370] to-[#bcf0df] text-transparent bg-clip-text">Element Assortment</h1>
                <p className="max-w-[600px] text-white text-center mt-2">
                    This curated collection of vital components offers versatility and efficiency. With diverse building blocks, it enables seamless integration into various projects, fostering innovation and productivity.
                </p>
                <div className="inline-flex items-center gap-6 mt-12">
                    <Link className="px-6 py-2 rounded-lg bg-[#0aa370] text-white tracking-widest border border-[#0000]  hover:bg-[#202030] hover:text-[#0aa370] hover:border hover:border-[#0aa370] transition-color duration-500" >Documentation</Link>
                    <Link className="px-6 py-2 rounded-lg bg-[#0aa370] text-white tracking-widest border border-[#0000]  hover:bg-[#202030] hover:text-[#0aa370] hover:border hover:border-[#0aa370] transition-color duration-500" >Contribute</Link>
                </div>
                <div className="grid grid-cols-2 gap-6 mx-14 mt-20">
                    <div className="rounded-xl overflow-hidden">
                        <video className="background-video" autoPlay loop muted>
                            <source src={video1} type="video/mp4" />
                        </video>
                    </div>
                    <div className="rounded-xl overflow-hidden">
                        <video className="background-video" autoPlay loop muted>
                            <source src={video2} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;