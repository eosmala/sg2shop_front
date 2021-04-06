import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import temp1 from './img/placeholder.jpg'

export default function ProductInfo({addToCart}) {
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
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={temp1} className="img-fluid mw-100" alt="..." />
                </div>
                <div className="col-6">
                    <div className="card">
                         {productInfo.map(product => (
                            <div key={product.id}>
                                <div className="card-header">
                            <h4>{product.name}</h4>
                         </div>
                         <div className="card-body">
                             <h4 className="card-title">{product.price}</h4>
                             <h5 className="card-text">Tähän tuotetietoa</h5>
                         </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}