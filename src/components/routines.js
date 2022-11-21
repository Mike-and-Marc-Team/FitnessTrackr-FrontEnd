import React, { useState, useEffect } from 'react';
import { useOutletContext, Link } from "react-router-dom";
import { Divider } from '@mui/material';
 
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
        <p>Create A New Routine</p>
        <Link to="/login">Login First!</Link>
        </div><br/><br/>
            {routines && routines.length ? routines.map((routine, index) => {
                return(
                    <div style={{display: "flex", justifyContent: "center", paddingTop: '30px'}}>
                        <div style={postStyle}>
                            <h3>{routine.creatorName}</h3>
                            <Divider style={{backgroundColor: "white", justifyContent: 'center'}} />
                            <br/>
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
 
const postStyle = {
    borderRadius: 20,
    border: '3px solid #001A4D',
    height: "fit-content",
    width: "350px",
    boxShadow: '1px 2px 9px black',
    justifyContent: 'center'
}