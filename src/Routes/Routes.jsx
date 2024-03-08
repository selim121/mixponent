import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import CardCollection from '../components/IgnoreComponents/Cards/CardCollection/CardCollection';

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
                path: '/card-collection',
                element: <CardCollection />
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