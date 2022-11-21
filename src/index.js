import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './app';
import Homepage from './components/homePage';
import Errorpage from './components/errorPage';
import Login from './components/login';
import Register from './components/register';
import Routines from './components/routines';
import Activities from './components/Activities';
import Profile from './components/profile';
import EditActivity from './components/editActivity';
import NewActivity from './components/NewActivity';
import NewRoutine from './components/addRoutine';
import EditRoutine from './components/editRoutine';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, //App is the root of where we want our pages to render
        errorElement: <Errorpage />,
        children: [
            {
                index: true, // sets the Homepage to render when you load the app
                element: <Homepage />
            },
            {
                path: "Login",
                element: <Login />
            },
            {
                path: "Register",
                element: <Register />
            },
            {
                path: "Routines",
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
            },
            {
                path: "/editRoutine/:id",
                element: <EditRoutine />
            }
        ]
    }
]);


ReactDOM.render(
    <RouterProvider router={router} />,
    document.getElementById("App")
);