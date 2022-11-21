import React from 'react';
import { Link } from 'react-router-dom';
import {Divider} from '@mui/material'


const Homepage = () => {
    return (
        <div style={{display: "flex", textAlign: "center", justifyContent: "center"}}>
            <div style={pageStyling}>
                <h1>Welcome to Fitness-Trackr!</h1>
                <h3>We have plenty of fitness routines for you to enjoy, all made by our users.</h3>
                <br/>
                <br/>
                <Divider style={{backgroundColor: "white", textAlign: "center", width: 600}} />
                <h3>Not registered yet? You can register <Link to="Register">here!</Link></h3>
            </div>
        </div>
    )
};



export default Homepage;


const pageStyling = {
    marginTop: "8%",
    justifyContent: "center",
}