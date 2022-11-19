import React, {useState, useEffect} from "react";
import { useOutletContext, Link } from "react-router-dom";

const activitiesPage = () => {
    const activityData = useOutletContext()

    const [activities, setActivities] = useState([])

    useEffect(() => {
        

        async function fetchActivitiesData() {

            try {

                const response = await fetch(
                    'http://fitnesstrac-kr.herokuapp.com/api/activities'
                );
                const data = await response.json();
                // console.log(data.data)
                // console.log(data.data.posts)
                setActivities (data.data.posts)
            } catch (error) {
                console.error(err);
            }
        }
        fetchActivitiesData();
    }, [])

    return (
        <div id="activitiesPage">
            <p id="activitiesList">Check Out These Workouts!</p>

            <div id="activities">
                {
                    activityData[0].map((indThing, idx) => {
                        return <div id="indivActivityPost" key={idx}>
                            <p>{indThing.title}</p>
                            <Link to={`/activities/${indThing._id}`}>Check It Out!</Link>
                            
                        </div>
                    })
                }
            </div>
        </div>
    )
};

export default activitiesPage;