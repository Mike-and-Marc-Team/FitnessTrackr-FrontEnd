import React from 'react';
import { Outlet } from 'react-router-dom';
// possibly Navbar goes here
// possibly sidenav here

const App = () => {
    return (
        <div>
            //sidenav?
            //navbar?
            <Outlet />
        </div>
    )
}


export default App