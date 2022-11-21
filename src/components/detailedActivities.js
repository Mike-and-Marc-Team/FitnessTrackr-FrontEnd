import React, { useState, useEffect} from 'react';
import { useOutletContext, useParams, Link } from 'react-router-dom';

const activityDetails = () => {
    const [activities, setActivities] = useOutletContext();
    const [theProfile, setTheProfile] = useOutletContext();
    const [activity, setActivity] = useOutletContext();
    const [useEdit, setUseEdit] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        if(activities.length) {
            const filteredArr = activities.filter((indActivity) => {
                return id == indActivity.id;
            });
            setActivity(filteredArr[0])
        }
    }, [activities]);

    function editActivities() {
        useEdit ? setUseEdit(false) : setUseEdit(true);
    }

    if (activity.id) {
        return (
            <div>
                <div>
                    <p>{activity.name}</p>
                    <br />
                    <p> {activity.description}</p>
                </div>
                <div>
                    <Link to="editActivity">
                        <button onClick={editActivities} className="details=bttn">
                            Edit
                        </button>
                    </Link>
                </div>
            </div>

                    
        )
    }
}

export default activityDetails;