import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


export default function LikePage() {
    const [likes, setLikes] = useState([]);
    useEffect(() => {
        setLikes(JSON.parse(localStorage.getItem("likes")));
        return () => {
           
        }
    }, [])

    function getLikes() {
       
        console.log(likes);
        
    }

    return (
        <div>
            <p>kekw</p>
            <h3>test</h3>
            <button onClick={getLikes}>Katso liket</button>
            {likes.map(product => (
                    <li><Link to={{pathname: "/product/" + product.product_id}}>{product}</Link> {product.price} €</li>
                ))}
        </div>
    )
            }

