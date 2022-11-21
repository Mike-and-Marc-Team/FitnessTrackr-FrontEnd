import React, { useState, useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";
import { Button } from "@mui/material";

const profilePage = () => {
    const [otherPosts, setOtherPosts] = useState([])
    const [yourPosts, setYourPosts] = useState([])
    const [filteredArr, setFilteredArr] = useState([])
    const [personalProfile, setPersonalProfile] = useState({})
    const [routine, setRoutine] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

        if (yourPosts.length) {
            const newArr = yourPosts.filter((name) => {
                return name
            })
            setFilteredArr(newArr)
        }
    },[yourPosts])


    useEffect(() => {
        if(localStorage.getItem("token")) {
            async function fetchProfileData() {
                try {
                    if (!localStorage.getItem("token")) {
                        navigate('/login')
    
                    }

                    const response = await fetch(
                        `http://fitnesstrac-kr.herokuapp.com/api/users/me`, {
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${localStorage.getItem("token")}` 
                            },
                        }
                    );
                    const data = await response.json();
                    console.log("this is the profile data: ", data)
                    setPersonalProfile(data)
                } catch (error) {
                    console.log(error)
                }
            }
            fetchProfileData();
        }
    }, [])

    useEffect(() => {
        async function personalRoutines() {
            try {
                const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/${personalProfile.username}/routines`, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const data = await response.json();
                setYourPosts(data)
            } catch (error) {
                console.log(error)
            }
        }
        if(personalProfile.username) {personalRoutines()}
    }, [personalProfile]);

    async function deletePost(id) {
        console.log(id)
        try {
            const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
            const data = await response.json()
            console.log(data)
            setOtherPosts(otherPosts.filter((routine) => {
                return routine.id != id
            }))
            setYourPosts(yourPosts.filter((routine) => {
                return routine.id != id
            }))

        } catch (error) {
            console.log(error)
        }   navigate("/profile")
    }
    function logOut(event) {
        localStorage.removeItem("token")
        navigate("/")
    }

    return (

        <div style={{display: "flex", justifyContent: "center"}}>
            <div style={profileStyle}>
                <h2>Your profile:</h2>
                <div>
                    {
                        filteredArr.length ? filteredArr.map((routine, idx) => {
                            return <div key={routine.id}>
                                <p>{activities.name}</p>
                                <button onClick={(event) => {
                                    event.preventDefault();
                                    deletePost(activity._id);
                                }}>Remove Activity</button>
                                <Link to={`${routine.id}`}>{routine.name}</Link>
                                <p>{routine.goal}</p>
                                </div>
                        }) : <p>You have not posted anything!</p>
                    }
                </div><br/><br/>
                <Link to="/newActivity">Create New Activity</Link>
                <br />
                <Link to="/addRoutine">Create New Routine</Link>
                <br /><br />
                <Button variant="contained" onClick={logOut}>Log Out</Button>

        <div>
            <p>Your profile</p>
            <div>
                {
                    filteredArr.length ? filteredArr.map((routine, idx) => {
                        return <div key={idx}>
                            <p>{routine.name}</p>
                            <p>{routine.goal}</p>
                            <button onClick={(event) => {
                                event.preventDefault();
                                deletePost(routine.id)
                            }}>Remove Routine</button>
                            <Link to={`/editroutine/${routine.id}`}>Edit Routine</Link>
                            
                            </div>
                    }) : <p>You have not posted anything!</p>
                }

            </div>
        </div>
    )
}

export default profilePage;

const profileStyle = {
    marginTop: "5%",
    borderRadius: 20,
    border: '3px solid #001A4D',
    height: "250px",
    width: "350px",
    boxShadow: '1px 2px 9px black'
}