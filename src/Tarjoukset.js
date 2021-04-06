import React,  { useState, useEffect } from 'react'


export default function Tarjoukset({url, category, addToCart}) {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

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
            <p>Tarjoustuotteet</p>
            <h3>Products for {category?.name}</h3>
                        {products.map(product => (
                            <div key={product.id}>
                                <p>{product.name}</p>
                            </div>
                        ))}
                 
        </div>
    )
}
