import React, { useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import { TextField, Divider, Button, Checkbox } from '@mui/material';
 
const NewRoutine = () => {
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");
    const [isPublic, setIsPublic] = useState(false);
    const navigate = useNavigate();
 
    async function createNewRoutine (event) {
        event.preventDefault();
        try {
            if (!localStorage.getItem("token")) {
                navigate('/login')
 
            }
            const response = await fetch("http://fitnesstrac-kr.herokuapp.com/api/routines", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    name,
                    goal,
                    isPublic
                })
            })
            const data = await response.json();
            console.log(data)
            setRoutines([routines.data])
            if (data.id){
                navigate('/routines');
            }
        } catch (error) {
            console.log(error);
        }
    }
    function updateRoutineName(event) {
        setName(event.target.value)
    }
    function updateRoutineGoal(event) {
        setGoal(event.target.value)
    }
    function updateIsPublic(event) {
        setIsPublic(event.target.checked)
    }
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div style={formStyle}>
                <h2>Add New Routine:</h2>
                <form onSubmit={createNewRoutine}>
                    <label>Routine Name: </label>
                    <br />
                    <TextField style={textField} placeholder='Enter Routine Name...' onChange={updateRoutineName} value={name} type="text"></TextField>
                    <br /><br/>
                    <label>Routine Goal: </label>
                    <br />
                    <TextField style={textField} placeholder='Enter Routine Goals...' onChange={updateRoutineGoal} value={goal} type="text"></TextField>
                    <br />
                    <label>Public: </label>
                    <Checkbox sx={{color: 'white', '&.Mui-checked': {color: "#0080ff"}}} onChange={updateIsPublic} value={isPublic} type="checkbox"></Checkbox>
                    <br /><br/>
                    <Button variant='contained' type="submit">Post Routine</Button>
                    <br />
                </form>
            </div>
        </div>
    )
}
 
export default NewRoutine;

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