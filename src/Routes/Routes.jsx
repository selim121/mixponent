import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import CardWrap from '../components/ComponentWrap/Card/CardWrap';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/cards',
                element: <CardWrap />
            },
            {
                path: '/home',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '*',
        element: <></>
    }
]);

export default router;