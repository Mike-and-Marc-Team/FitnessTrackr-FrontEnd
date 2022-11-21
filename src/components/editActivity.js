import React, { useState } from 'react';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';

const editActivity = (activity) => {

    const [name, setName] = useState("");
    const [activities, setActivities] = useOutletContext()
    const [profileData, setProfileData] = useState([])
    const { id } = useParams()
    const [desc, setEditDesc] = useState("")

    const navigate = useNavigate();

    async function createEdit (event) {
        event.preventDefault();
        try {
            const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                },
                method: "PATCH",
                body: JSON.stringify({
                    post: {
                        name: name,
                        description: desc,
                    }
                })
            })

            
            const editActivities = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities');
            const translatedEditActivities = await editActivities.json();


            setProfileData(translatedEditActivities)
            setActivities(translatedEditActivities)
            

            navigate("/profile")
        }   catch (error) {
            console.log(error);
        }
    }

    function editName(event) {
        setName(event.target.value)
    }
    function editDesc(event) {
        setEditDesc(event.target.value)
    }

    return (
        <div id="editPage">
            <p id="title">Edit Page</p>
            <form onSubmit={createEdit}>
                <label>Edit Name</label>
                <input type="text" value={name} onChange={editName}></input>
                <br />
                <label>Edit Description</label>
                <input type="text" value={desc} onChange={editDesc}></input>
                <br />
                <button type="Submit">Submit New Activity</button>    
            </form> 
        </div>

    )
}

export default editActivity;