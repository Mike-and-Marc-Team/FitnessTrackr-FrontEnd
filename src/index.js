import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './components/homePage';
import Errorpage from './components/errorPage';
import Login from './components/login';
import Register from './components/register';
import Routines from './components/routines';
import Activities from './components/Activities'
import EditActivity from './components/editActivity'
import IndexHome from './components/indexhome';
import Profile from './components/profile';
import NewActivity from './components/NewActivity';
import NewRoutine from './components/addRoutine';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />, //App is the root of where we want our pages to render
        errorElement: <Errorpage />,
        children: [
            {
                index: true, // sets the Homepage to render when you load the app
                element: <IndexHome />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/routines",
                element: <Routines />
            },
            {
                path: "/activities",
                element: <Activities />
            },
            {
                path: "/profile",
                element: <Profile />
            },
            {
                path: "/editActivity/:id",
                element: <EditActivity />
            },
            {
                path: "/newActivity",
                element: <NewActivity />
            },
            {
                path: "/addRoutine",
                element: <NewRoutine />
            }
        ]
    }
]);


ReactDOM.render(
    <RouterProvider router={router} />,
    document.getElementById("app")
);