import React from 'react';
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';

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