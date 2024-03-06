import React from 'react';
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';

const Main = () => {
    return (
        <div className='container mx-auto bg-[#070717]'>
            {/* >>>> Navbar <<<< */}
            <Navbar />
            <Outlet></Outlet>
            <ScrollRestoration />
        </div>
    );
};

export default Main;