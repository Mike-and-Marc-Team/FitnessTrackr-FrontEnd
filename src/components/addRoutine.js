import React, { useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
// import { TextField, Divider, List, ListItem } from 'react-router-dom';


const NewRoutine = () => {
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");
    const [isPublic, setIsPublic] = useState(false);
    const importOutlet = useOutletContext();
    const navigate = useNavigate();
}