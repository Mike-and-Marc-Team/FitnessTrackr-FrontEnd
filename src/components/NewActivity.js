import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const createNewActivity = () => {
    const [newActivity, setNewActivity] = useState([])
    const [newActivityTitle, setNewActivityTitle] = useState([])
    const [newActivityDesc, setNewActivityDesc] = useState([])
    const navigate = useNavigate()

    
        async function createNewActivityPosts(event) {
            event.preventDefault()
            try {
                const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities`, {
                    method: "POST",
                    body: JSON.stringify({
                        name: newActivityTitle,
                        description: newActivityDesc
                    })
                })
                const data = await response.json()
                console.log(data)
                setNewActivity([...newActivity, data.data.activities])

                navigate("/activities")
                
            } catch (error) {
                console.log(error)
            }
        
        
        }
        
        function updateTitle(event) {
            setNewActivityTitle(event.target.value)
        }
        function updateDesc(event) {
            setNewActivityDesc(event.target.value)
        }
        

        return (
            <form onSubmit={createNewActivityPosts}>
                <label>Create a New newActivity!</label>
                <p>Title: 
                <input type="text" value={newActivityTitle} onChange={updateTitle}></input>
                <br /> </p>
                <p>Description: 
                <input type="text" value={newActivityDesc} onChange={updateDesc}></input>
                <br /> </p>
                <button type="Submit">Submit New Activity</button>
            </form>
        )
}
    


export default createNewActivity;