import React, { useState, useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";
import activitiesPage from "./Activities";

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
        <div>
            <p>Your profile</p>
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
            </div>
            <Link to="/newActivity">Create New Activity</Link>
            <br />
            <Link to="/addRoutine">Create New Routine</Link>
            <br />
            <button onClick={logOut}>Log Out</button>
        </div>
    )
}

export default profilePage;