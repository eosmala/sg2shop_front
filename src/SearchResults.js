import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ProductInfo from './ProductInfo';

export default function SearchResults({addToCart}) {
    let [results, setResults] = useState([]);
    const url = "http://localhost/sg2shop_back/";
    let location = useLocation();
 

    useEffect(async() => {
            try {
                const address = url + 'products/search.php' + location.search;
                console.log(address);
                const response = await fetch(address);
                let json = await response.json();
                if (response.ok) {
                    setResults(json);
                } else {
                    alert(json.error);
                }
            } catch (error) {
                alert(error);
              
            }
        }, [])

        // jos ei hakutuloksia näytä tämä
        if (results.length === 0) {
            return (
                <h3>Ei hakutuloksia!</h3>
            )
        }

    return (
        <div className="container">
            <h3>Hakutulokset</h3>
            <ul>
                {results.map(result => (
                    <div key={result.id} className="card p-2 m-2" style={{ width: "18rem", display: "inline-block", border: "1px solid black" }}>
                    <Link to={{pathname: "/product/" + result.id}}><img className="card-img-top" src={url + "products/img/" + result.image} alt={result.name} /></Link>
                    <div className="card-body">
                        <div className="card-title" key={result.id}>
                            <hr></hr>
                            <h5><Link to={{pathname: "/product/" + result.id}}>{result.name}</Link> {result.price} €</h5>
                            <p>{result.description}</p>
                        </div>
                        <button className="btn btn-card" type="button" onClick={e => addToCart(result)}>Lisää ostoskoriin</button>
                    </div>
                    </div>
                    ))}
            </ul>
        </div>
    )
}