import React, {useEffect, useState} from 'react'
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';

export default function Like({ name }) {

    const [likes, setLikes] = useState(["TESTILIKE"]);
    
    function handleClick() {
        console.log(name);
        setLikes(likes => [...likes, name]);
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
                    <li>{product}</li>
                ))}
            </ul>
            </div>
        </div>
    )
};