import React from 'react';
import { Outlet, ScrollRestoration } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <ScrollRestoration />
        </div>
    );
};

export default Main;