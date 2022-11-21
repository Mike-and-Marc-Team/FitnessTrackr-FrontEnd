import React, { useState, useEffect } from 'react';
import { useOutletContext, Link } from "react-router-dom";
// maybe grid from material UI?


const Routines = () => {
    console.log("Routines should be displaying now...")
    const [routines, setRoutines] = useState([]);


    useEffect(() => {
        async function postHandler(event) {
            try {
                const response = await fetch(
                    'http://fitnesstrac-kr.herokuapp.com/api/routines',
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    }
                );
                const data = await response.json();
                console.log(data)
                setRoutines(data);
            } catch (error) {
                console.log(error)
            }
        }
        postHandler();
    }, []);

    return (
        <>
        <div>
        <p>Create A New Routine! </p>
        <Link to="/login">Login</Link>
        </div>
            {routines && routines.length ? routines.map((routine, index) => {
                return(
                    <div>
                        <div>
                            
                            <br />
                            <p>{routine.creatorName}</p>
                            
                            <p>{routine.name}</p>
                            <p>{routine.goal}</p>
                            {/* <div>{routine.activities}</div> */}
                        </div>
                    </div>
                )
            }): null}        
        </>
    )
};


export default Routines;