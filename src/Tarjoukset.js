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
        <div className="container" id="category-page">
            <h3>{category?.name}</h3>
            <h5 id="category-info">Tarjoustuotteet</h5>
            {products.map(product => (
                <div key={product.id} className="card p-2 m-2" style={{ width: "18rem", display: "inline-block", border: "1px solid black" }}>
                    <Link to={{pathname: "/product/" + product.id}}><img className="card-img-top" src={url + "products/img/" + product.image} alt={product.name} /></Link>
                    <div className="card-body">
                        <h5 className="card-title" key={product.id}>
                            <hr></hr>
                            <h5><Link to={{pathname: "/product/" + product.id}}>{product.name}</Link> {product.price} €</h5>
                            <p>{product.description}</p>
                        </h5>
                        <button className="btn btn-card" type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
                    </div>
                </div>
            ))}
        </div>


    )
}
