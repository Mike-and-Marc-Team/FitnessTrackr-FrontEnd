import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav id="theNavBar">
            <Link to="/"> Home </Link>
            <Link to="Login"> Login </Link>
            <Link to="Activities"> Activities </Link>
            <Link to="Routines"> Routines </Link>
            <Link to="Profile"> Profile</Link>
        </nav>
    )
};

export default Navbar;