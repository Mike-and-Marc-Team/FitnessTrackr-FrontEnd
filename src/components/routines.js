import React, { useState, useEffect } from 'react';
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
                const transData = await response.json();
                console.log(transData)
                setRoutines(transData);
            } catch (error) {
                console.log(error)
            }
        }
        postHandler();
    }, []);

    return (
        <>
            {routines && routines.length ? routines.map((routine, index) => {
                return(
                    <div>
                        <div>
                            <div>{routine.creatorName}</div>
                            
                            <div>{routine.name}</div>
                            <div>{routine.goal}</div>
                            {/* <div>{routine.activities}</div> */}
                        </div>
                    </div>
                )
            }): null}        
        </>
    )
};


export default Routines;