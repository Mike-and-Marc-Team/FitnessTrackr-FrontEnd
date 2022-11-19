import React, { useState } from 'react';
import { userNavigate, useOutletContext, useParams } from 'react-router-dom';

const editActivity = () => {

    const [title, setTitle] = useState("");
    const [activities, setActivities] = useOutletContext()
    const [profileData, setProfileData] = useState([])
    const { id } = useParams()
    const [desc, setEditDesc] = useState("")

    const navigate = userNavigate();

    async function createEdit (event) {
        event.preventDefault();
        try {
            const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities/${id}`,{
                method: "PATCH",
                body: JSON.stringify({
                    post: {
                        name: title,
                        description: desc,
                    }
                })
            })

            
            const editActivities = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities');
            const translatedEditActivities = await editActivities.json();


            setProfileData(translatedEditActivities.data.activities)
            setActivities(translatedEditActivities.data.activities)
            

            navigate("/profile")
        }   catch (error) {
            console.log(error);
        }
    }

    function editTitle(event) {
        setTitle(event.target.value)
    }
    function editDesc(event) {
        setEditDesc(event.target.value)
    }

    return (
        <div id="editPage">
            <p id="title">Edit Page</p>
            <form onSubmit={createEdit}>
                <label>Edit Title</label>
                <input type="text" value={title} onChange={editTitle}></input>
                <br />
                <label>Edit Description</label>
                <input type="text" value={desc} onChange={editDesc}></input>
                <br />
                <button type="Submit">Submit New Activity</button>    
            </form> 
        </div>

    )
}

export default editActivity