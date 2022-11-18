import React, { useState, useEffect } from 'react';
// maybe grid from material UI?


const Routines = () => {
    console.log("Routines should be displaying now...")
    const [routines, setRoutines] = useState([]);


    useEffect(() => {
        async function postHandler(event) {
            try {
                const response = await fetch(
                    'http://fitnesstrac-kr.herokuapp.com/api/routines'
                );
                const transData = await response.json();
                setRoutines(transData.data.routines);
            } catch (error) {
                console.log(error)
            }
        }
        postHandler();
    }, []);

    return (
        <>
            {routines && routines.length ? routines.map((event) => {
                return(
                    <div>
                        <div>
                            <div>{event.creatorName.username}</div>
                            <div>{event.name}</div>
                            <div>{event.goal}</div>
                            <div>{event.activities}</div>
                        </div>
                    </div>
                )
            }): null}        
        </>
    )
};


export default Routines;