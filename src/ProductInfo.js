import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import temp1 from './img/placeholder.jpg'

export default function ProductInfo({url, addToCart}) {
    const productId = useParams();
    const [productInfo, setProductInfo] = useState([]);

    useEffect(async() => {
        try {

            const response = await fetch('http://localhost/sg2shop_back/products/getproductinfo.php/' + productId.id);
            const json = await response.json();
            if (response.ok) {
                setProductInfo(json);
            } else {
                alert(json.error);
            }
        } catch (error) {
            alert(error);
        }
    }, [productId])

    return (
        <div className="container" id="product-info-page">
            {productInfo.map(product => (
            <div key={product.id} className="row">
                <div className="col-6 card">
                    <img src={url + "products/img/" + product.image} className="img-fluid mw-100" alt={product.name} style={{ border: "1px solid black" }}/>
                </div>
                <div className="col-6">
                    <div className="card" style={{ border: "1px solid black" }}>
                        <div className="card-header">
                            <h4>{product.name}</h4>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Hinta: {product.price} €</h4>
                            <h5 className="card-text">{product.description}</h5>
                        </div>
                        <div className="card-footer">
                          <button className="btn btn-card" type="button" onClick={e => addToCart(product)}>
                              <i className="fa fa-shopping-cart" aria-hidden="true"></i> Lisää ostoskoriin
                          </button>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}