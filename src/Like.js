import React, {useEffect, useState} from 'react'
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';


export default function Like({ name, id, price }) {
    const [likes, setLikes] = useState([]);

    async function handleClick() {
        if (!likes.includes(name)) {
            setLikes([...likes, name]); 
            
        }
        alert("Tuote lisätty suosikkeihin!");
    }

    async function setLocalStorage() {
        await handleClick;
        localStorage.setItem("likes", JSON.stringify(likes));
      

    }

    setLocalStorage();

    return (
        <div className="d-inline-block">
            <i data-tip="Lisää suosikkeihin" className="fa fa-heart" aria-hidden="true" onClick={()=>handleClick()}></i>
            <ReactTooltip />
        </div>
    )
};

