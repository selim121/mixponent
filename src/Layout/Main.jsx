import React from 'react';
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from '../components/IgnoreComponents/Common/Header/Header';
import Navbar from '../components/IgnoreComponents/Common/Navbar/Navbar';

const Main = () => {
    return (
        <div className='container mx-auto bg-[#070717]'>
            {/* >>>> Navbar <<<< */}
            <Header />
            <Navbar />
            <Outlet></Outlet>
            <ScrollRestoration />
        </div>
    );
};

export default Main;