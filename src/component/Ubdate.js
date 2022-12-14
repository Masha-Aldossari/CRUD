import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Ubdate() {
    const navigate = useNavigate();
    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [id, setId] = useState("");

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setFName(localStorage.getItem("firstName"));
        setLName(localStorage.getItem("lastName"));
    }, []);

    const updateData = () => {
        axios.put(`https://62d3e34acd960e45d44f7ccf.mockapi.io/ToDo/${id}`, {
            fName,
            lName,

        }).then(res => {
            console.log(res);
            navigate("/Read");
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
            <input
                placeholder="firstName"
                onChange={(e) => {
                    setFName(e.target.value);
                }}
            ></input>
            <input
                placeholder="lastName"
                onChange={(e) => {
                    setLName(e.target.value);
                }}
            ></input>
            <button onClick={updateData}>Ubdate</button>
        </div>
    );
}

export default Ubdate;