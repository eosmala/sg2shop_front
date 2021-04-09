import React,  { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import placeholder from './img/logo.png';

export default function Tarjoukset({ url, category, addToCart }) {
    const [products, setProducts] = useState([]);

    useEffect(async() => {
        if (category !== null) {
            let address = '';
            if (category !== null) {
                address = url + 'products/getproducts.php/' + category?.id;
            }
            try {
                const response = await fetch(address);
                const json = await response.json();
                if (response.ok) {
                    setProducts(json);
                } else {
                    alert(json.error);
                }
            } catch (error) {
                alert(error);
            }
        }
    }, [category])

    return (
        <div className="container">
            <h3>{category?.name}</h3>
            <p>Tarjoustuotteet</p>
            {products.map(product => (
                <div key={product.id} className="card p-2 m-2" style={{ width: "18rem", display: "inline-block", border: "1px solid black" }}>
                    <img className="card-img-top" src={url + "products/img/" + product.image} alt="Tuote" />
                    <div className="card-body">
                        <h5 className="card-title" key={product.id}>
                            <hr></hr>
                            <p><Link to={{pathname: "/product/" + product.id}}>{product.name}</Link> {product.price} €</p>
                            <span>{product.description}</span>
                        </h5>
                        <button className="btn" type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
                    </div>
                </div>
            ))}
        </div>


    )
}
