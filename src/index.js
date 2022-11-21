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
import ActivityDetails from './components/detailedActivities';


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
                path: "Activities",
                element: <Activities />,
                children: [
                    {
                        path: "/Activities/:Id",
                        element: <EditActivity />
                    },
                    {
                        path: "Activities/:id",
                        element: <ActivityDetails />
                    }
                ]
            },
            {
                path: "/profile",
                element: <Profile />
            },
            
            {
                path: "/newActivity",
                element: <NewActivity />
            },
            {
                path: "NewRoutine",
                element: <NewRoutine />
            },
            
        ]
    }
]);


ReactDOM.render(
    <RouterProvider router={router} />,
    document.getElementById("App")
);