import React, { useEffect, useState } from "react";
import { useOutletContext, Link } from "react-router-dom";

const activitiesPage = () => {
    const [activity, setActivity] = useState([]);

    useEffect(()=> {
        async function getAllActivities () {
            try {
                const data = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities`,
                {
                    headers : {
                        'Content-Type': 'application/json'
                    }
                })
                const results = await data.json()
                setActivity(results)
                console.log(results)
            } catch (error) {
                console.error(error.detail)
            }
        }
        getAllActivities()
        }
    
    ,[])



    return (
        <div id="activitiesPage">
            <p id="activitiesList">Check Out These Workouts!</p>
            <p>Create Your Own Activities!</p>
            <Link to="/login">Login to Create an Activity!</Link>

            <div id="activities">
                {
                    activity && activity.length ? activity.map(indThing => {

                        return <div id="indivActivityPost" key={indThing.id}>
                            <p>{indThing.name}</p>
                            <p>{indThing.description}</p>
                            {/* <Link to={`/activities/${indThing._id}`}>Check It Out!</Link> */}
                            
                        </div>
                        }): <p>No activities at this time!</p>
                    }
            </div>
        </div>
    )
};

export default activitiesPage;