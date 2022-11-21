import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
 
const Register = () => {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
 
    async function registerHandler(event){
        event.preventDefault();
        try {
            const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                        username: username,
                        password: password
                })
            })
            const data = await response.json()
            localStorage.setItem("token", data.token)
            console.log(data.token)
            console.log(data)
 
            navigate("/Routines")
        } catch (error) {
            console.log(error)
        }
    }
 
    const changeUsername = (event) => {
        setUsername(event.target.value)
    }
    const changePassword = (event) => {
        setPassword(event.target.value)
    }
    return(
        <div style={{display: "flex", justifyContent: "center"}}>
            <div style={formStyle}>
                <form onSubmit={registerHandler}>
                    <div style={{paddingTop: "14px"}}>Username:</div>
                    <TextField variant="outlined" style={textField} placeholder='Enter Username...' type='text' value={username} onChange={changeUsername}></TextField>
                    <br/><br/>
                    <div>Password:</div>
                    <TextField variant="outlined" style={textField} placeholder='Enter Password...' type='password' value={password} onChange={changePassword}></TextField>
                    <br/><br/>
                    <Button variant='contained' type='submit'>Sign Up</Button>
                </form>
            </div>
        </div>
    )
};
 
export default Register;
 
const formStyle = {
    marginTop: "5%",
    borderRadius: 20,
    border: '3px solid #001A4D',
    height: "250px",
    width: "350px",
    boxShadow: '1px 2px 9px black'
}

const textField = {
    borderRadius: 5,
    backgroundColor: '#8a8a8a'
}
