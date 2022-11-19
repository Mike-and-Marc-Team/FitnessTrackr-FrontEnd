import React from 'react';
import { Link } from 'react-router-dom';


const Homepage = () => {
    return (
        <div>
            <div>
                <p style={pageStyling}>This will be the Homepage</p>
            </div>
        </div>
    )
};



export default Homepage;


const pageStyling = {
    color: 'blue',
    textAlign: 'center'
}