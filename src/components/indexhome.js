import React from 'react'
import { Link, useNavigate} from "react-router-dom";

const IndexHome = () => {
    return (
        <div id="homepage">
            <p>Enjoy the many options that are offered by our users!</p>
            <p>Please Login to ensure you're getting the most out of our website.</p>
            <p>If you do not have a login, you may register
            <Link to="/register">here!</Link></p>
        </div>
    )
}

export default IndexHome;