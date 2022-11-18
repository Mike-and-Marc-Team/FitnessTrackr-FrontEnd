import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './app';




const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, //App is the root of where we want our pages to render
        errorElement: <Errorpage />,
        children: [
            {
                index: true, // sets the Homepage to render when you load the app
                element: <Homepage /> //Homepage has not been created yet
            }
        ]
    }
]);


ReactDOM.render(
    <RouterProvider router={router} />,
    document.getElementById("App")
);