import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div style={flexStyle}>
            <div>
                <h1 style={{float: 'left'}}>Fitness-Trackr</h1>
                <nav style={navStyle} id="theNavBar">
                    <Link style={{}} to="/"> Home </Link>
                    <Link style={navPadding} to="Login"> Login </Link>
                    <Link style={{paddingRight: '20px'}} to="Activities"> Activities </Link>
                    <Link style={{paddingRight: '20px'}} to="Routines"> Routines </Link>
                    <Link to="Profile"> Profile</Link>
                </nav>
            </div>
        </div>
    )
};

export default Navbar;

const navPadding = {
    paddingLeft: '20px',
    paddingRight: '20px',
}

const flexStyle = {
    backgroundColor: '#424242',
    height: '65px',
    display: 'flex'
}

const navStyle = {
    float: 'right'
}