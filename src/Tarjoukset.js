import React, { useState, useEffect } from 'react'
import placeholder from './img/logo.png';

export default function Tarjoukset({ url, category, addToCart }) {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(async () => {
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
            <p>Tarjoustuotteet</p>
            <h3>Products for {category?.name}</h3>
            {products.map(product => (
                <div className="card p-2 m-2" style={{ width: "18rem", display: "inline-block", border: "1px solid black" }}>
                    <img className="card-img-top" src={placeholder} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title" key={product.id}>
                            <hr></hr>
                            <p>{product.name}</p>
                        </h5>
                        <button type="button" className="btn btn-primary">Lisää ostoskoriin <i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
                    </div>
                </div>
            ))}
        </div>


    )
}
