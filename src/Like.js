import React, {useEffect, useState} from 'react'
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';


export default function Like({ name, id, price }) {
    const [likes, setLikes] = useState([]);
    
    const handleClick = () => {
       
            setLikes(likes => [...likes, name]);
        
            
        localStorage.setItem("likes", JSON.stringify(likes));
        
        console.log((likes));
        return (
            <div>
                <h3>dd</h3>
            </div>
        )
    }

   
    return (
        <div className="d-inline-block">
            <i data-tip="Lisää suosikkeihin" className="fa fa-heart" aria-hidden="true" onClick={handleClick}></i>
            <ReactTooltip />
            <div className="d-inline-block">
            <ul>
            {likes.map(product => (
                    <li><Link to={{pathname: "/product/" + id}}>{name}</Link> {price} €</li>
                ))}
            </ul>
            </div>
        </div>
    )
};

