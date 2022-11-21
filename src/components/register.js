import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 
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
 
            navigate("/")
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
        <div>
            <form onSubmit={registerHandler}>
                <div>Username</div>
                <input type='text' value={username} onChange={changeUsername}></input>
                <div>Password</div>
                <input type='password' value={password} onChange={changePassword}></input>
                <div></div>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
};
 
export default Register;
 