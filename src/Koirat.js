import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Like from './Like';
export default function Koirat({ url, category, addToCart }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function prod() {
            if (category !== null && category !== undefined) {
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
        }
        prod();
    }, [category, url])

    return (
        <div className="container" id="category-page">
            <h3 className="mt-2" id="category-info">Koiran ruoat ja tarvikkeet</h3>
            {products.map(product => (
                <div key={product.product_id} className="card p-2 m-2" style={{ width: "18rem", display: "inline-block", border: "1px solid black" }}>
                    <Link to={{ pathname: "/product/" + product.product_id }}><img className="card-img-top" src={url + "products/img/" + product.image} alt={product.product_name} /></Link>
                    <div className="card-body">
                        <div className="card-title" key={product.product_id}>
                            <hr></hr>
                            <h5><Link to={{ pathname: "/product/" + product.product_id }}>{product.product_name}</Link> {product.price} €</h5>
                            <p>{product.description}</p>
                            <p>Varastossa: {product.stock_amount} kpl</p>
                        </div>
                        <button className="btn btn-card" type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
                        <Like name={product.product_name} id={product.product_id} price={product.price}/>
                    </div>
                </div>
            ))}
        </div>
    )
}
