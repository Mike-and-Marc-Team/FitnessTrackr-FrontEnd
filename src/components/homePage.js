import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import { Outlet } from 'react-router-dom';


const Homepage = () => {
    const [activities, setActivities] = useState([])
    const [theProfile, setTheProfile] = useState([])
    const [routines, setRoutines] = useState([])
    useEffect(() => {
        if (localStorage.getItem("token")) {
            async function fetchUserData() {
                try {
                    const response = await fetch ('http://fitnesstrac-kr.herokuapp.com/api/users/me', {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                );
                const userData = await response.json();
                setTheProfile(userData)
                } catch (error) {
                    console.log(error)
                }
            }
            fetchUserData();
        }
        async function fetchActivitiesData() {

            try {

                const response = await fetch(
                    'http://fitnesstrac-kr.herokuapp.com/api/activities', {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem("token")}`
                        }
                    }
                );
                const activitiesData = await response.json();
                setActivities(activitiesData)
            } catch (error) {
                console.error(error);
            }
        }
        fetchActivitiesData();

        async function fetchRoutinesData() {
            try {
                const response = await fetch ('http://fitnesstrac-kr.herokuapp.com/api/routines', {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const routinesData = await response.json();
                setRoutines(routinesData);
            } catch (error) {
                console.log(error)
            }
        }
        fetchRoutinesData();
    }, [])
    return (
        <div>
            <p>Welcome to the Fitness Tracker!</p>
            <Navbar />
            <Outlet context={
                [activities, setActivities,routines, setRoutines, theProfile, setTheProfile]
            }/>
        </div>
    )
};



export default Homepage;


const pageStyling = {
    color: 'blue',
    textAlign: 'center'
}