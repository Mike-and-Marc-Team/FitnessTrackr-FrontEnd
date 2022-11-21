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
        <div style={{display: "flex", justifyContent: "center"}}>
            <div>
                <p id="activitiesList">Check Out These Workouts!</p>
                <p>Create Your Own Activities!</p>
                <Link to="/login">Login to Create an Activity!</Link>
                <div id="activities">
                    {
                        activity && activity.length ? activity.map(indThing => {
                            return (
                            <div style={{display: "flex", justifyContent: "center", paddingTop: '20px'}}>
                                <div style={postStyle} id="indivActivityPost" key={indThing.id}>
                                    <p>{indThing.creatorName}</p>
                                    <p>{indThing.name}</p>
                                    <p>{indThing.description}</p>
                                    {/* <Link to={`/activities/${indThing._id}`}>Check It Out!</Link> */}
                                </div>
                            </div>
                            )
                            }): <p>No activities at this time!</p>
                        }
                </div>
            </div>
        </div>
    )
};

export default activitiesPage;

const postStyle = {
    borderRadius: 20,
    border: '3px solid #001A4D',
    height: "fit-content",
    width: "350px",
    boxShadow: '1px 2px 9px black',
    justifyContent: 'center'
}