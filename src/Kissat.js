import React,  { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


export default function Kissat({url, category, addToCart}) {
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
            <p>Kissan ruoat ja tarvikkeet</p>
                        {products.map(product => (
                            <div key={product.id}>
                                <p><Link to={{pathname: "/product/" + product.id}}>{product.name}</Link></p>
                                <button className="btn" type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
                            </div>
                        ))}
                 
        </div>
    )
}
