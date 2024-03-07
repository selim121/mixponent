import React from 'react';
import { Link } from 'react-router-dom';
import video1 from '../../assets/video/home-video1.mp4';
import video2 from '../../assets/video/home-video2.mp4';
import '../../styles/Styles.css';

const Home = () => {
    return (
        <div className="max-w-[1700px] ps-60 pt-40 pe-[16px] h-screen">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-[80px] bg-gradient-to-r from-[#67b4e8] to-[#bce4ff] text-transparent bg-clip-text">Element Assortment</h1>
                <p className="max-w-[600px] text-white text-center mt-2">
                    This curated collection of vital components offers versatility and efficiency. With diverse building blocks, it enables seamless integration into various projects, fostering innovation and productivity.
                </p>
                <div className="inline-flex items-center gap-6 mt-12">
                    <Link className="px-6 py-2 rounded-lg bg-[#67b4e8] text-[#171727] font-thin tracking-widest  hover:bg-[#202030] hover:text-white transition-colors duration-500" >Documentation</Link>
                    <Link className="px-6 py-2 rounded-lg bg-[#67b4e8] text-[#171727] font-thin tracking-widest hover:bg-[#202030] hover:text-white transition-colors duration-500" >Contribute</Link>
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