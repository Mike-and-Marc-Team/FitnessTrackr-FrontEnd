import React, { useState, useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";
import { Button } from "@mui/material";

const profilePage = () => {
    const [otherPosts, setOtherPosts] = useState([])
    const [yourPosts, setYourPosts] = useState([])
    const navigate = useNavigate()
    const [filteredArr, setFilteredArr] = useState([])

    useEffect(() => {

        if (yourPosts.length) {
            const newArr = yourPosts.filter((post) => activities.active)
            setFilteredArr(newArr)
        }
    },[yourPosts])


    useEffect(() => {
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
                setYourPosts(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProfileData();
    }, [])

    async function deletePost(id) {
        console.log(id)
        try {
            const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
            const data = await response.json()
            console.log(data)
            setOtherPosts(otherPosts.filter((activities) => {
                return activities._id != id
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