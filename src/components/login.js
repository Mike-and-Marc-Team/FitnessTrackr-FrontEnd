import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField, Divider } from '@mui/material';

 
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
 
    function handleUsernameChange(event) {
        console.log(event.target.value);
        setUsername(event.target.value);
    }
    function handlePasswordChange(event) {
        console.log(event.target.value);
        setPassword(event.target.value);
    }
 
    async function setRegisterInfo(event) {
        event.preventDefault()
        try {
            const response = await fetch(
                'http://fitnesstrac-kr.herokuapp.com/api/users/login',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        
                    },
                    body: JSON.stringify({
                            username: username,
                            password: password
                        
                    })
                }
            )
            const data = await response.json();
            console.log("This was our request's returned promise: ", data.token);
            localStorage.setItem("token", data.token);
            navigate("/Routines");
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div style={formStyle}>
                <h1>Login to your account</h1>
                <br/>
                <form onSubmit={setRegisterInfo}>
                    <label>Username:</label><br/>
                    <TextField
                        style={textField}
                        placeholder="Enter Username..."
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                    ></TextField>
                    <br/><br/>
                    <label>Password:</label><br/>
                    <TextField
                        style={textField}
                        placeholder="Enter Password..."
                        type="text"
                        value={password}
                        onChange={handlePasswordChange}
                    ></TextField><br/><br/>
                        <Button variant='contained' type="submit">Login</Button>
                </form>
                <p> Don't have a login? <Link to="Register">Register Here!</Link></p>
            </div>
        </div>
    )
};
 
export default Login;

const formStyle = {
    marginTop: "5%",
    borderRadius: 20,
    border: '3px solid #001A4D',
    height: "370px",
    width: "350px",
    boxShadow: '1px 2px 9px black'
}

const textField = {
    borderRadius: 5,
    backgroundColor: '#8a8a8a'
}
