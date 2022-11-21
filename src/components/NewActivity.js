import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Divider } from '@mui/material';

const NewActivity = () => {
    const [newActivity, setNewActivity] = useState([])
    const [newActivityTitle, setNewActivityTitle] = useState([])
    const [newActivityDesc, setNewActivityDesc] = useState([])
    const navigate = useNavigate()

    
        async function createNewActivityPosts(event) {
            event.preventDefault()
            try {
                if (!localStorage.getItem("token")) {
                    navigate('/login')
                    return;
                }
                const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    },
                    body: JSON.stringify({
                        name: newActivityTitle,
                        description: newActivityDesc
                    })
                })
                const data = await response.json()
                console.log(data)
                setNewActivity([...newActivity, data.name])

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
            <div style={{display: "flex", justifyContent: "center"}}>
                <div style={formStyle}>
                    <form onSubmit={createNewActivityPosts}>
                        <h2>Create a New Activity</h2><Divider style={{backgroundColor: 'white'}}/><br/>
                        <label>Title:</label><br/>
                        <TextField style={textField} placeholder='Enter Title...' type="text" value={newActivityTitle} onChange={updateTitle}></TextField><br/><br/>
                        <label>Description:</label><br/>
                        <TextField style={textField} placeholder='Enter Description...' type="text" value={newActivityDesc} onChange={updateDesc}></TextField>
                        <br/><br/><br/>
                        <Button variant='contained' type="Submit">Submit New Activity</Button>
                    </form>
                </div>
            </div>
        )
}
    


export default NewActivity;

const formStyle = {
    marginTop: "5%",
    borderRadius: 20,
    border: '3px solid #001A4D',
    height: "350px",
    width: "350px",
    boxShadow: '1px 2px 9px black'
}

const textField = {
    borderRadius: 5,
    backgroundColor: '#8a8a8a'
}