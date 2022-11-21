import React, { useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
// import { TextField, Divider, List, ListItem } from 'react-router-dom';
 
const NewRoutine = () => {
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");
    const [isPublic, setIsPublic] = useState(false);
    const [routines, setRoutines] = useOutletContext();
    const importOutlet = useOutletContext();
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
        <div>
            Add Routine Form:
            <form onSubmit={createNewRoutine}>
                <label>Routine Name: </label>
                <br />
                <input onChange={updateRoutineName} value={name} type="text"></input>
                <br />
                <label>Routine Goal: </label>
                <br />
                <input onChange={updateRoutineGoal} value={goal} type="text"></input>
                <br />
                <label>Public: </label>
                <input onChange={updateIsPublic} value={isPublic} type="checkbox"></input>
                <br />
 
                <button type="submit">Post Routine</button>
                <br />
 
            </form>
        </div>
    )
}
 
export default NewRoutine;