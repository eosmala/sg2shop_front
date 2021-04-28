import React from 'react'
import { Link } from 'react-router-dom';

export default function Order({ url, cart, emptyCart, removeFromCart, changeAmount }) {
    return (
        <div className="container" id="order-page">
            <div className="row bg">
                <h3 className="mt-1">Tilauksesi</h3>
                {cart.map((product, index) => (
                    <div className="row col-12 mx-0 mt-2 bg border-bottom" key={product.product_id + "cart"}>
                        <Link className="col-4 col-lg-2 px-0 mb-2" to={{ pathname: "/product/" + product.product_id }}>
                            <img className="img-thumbnail img-fluid" src={url + "products/img/" + product.image} alt={product.product_name} />
                        </Link>
                        <div className="col-7 col-lg-9" >
                            <div className="my-5">
                                <Link to={{ pathname: "/product/" + product.product_id }}>
                                    <h5>{product.product_name}</h5>
                                </Link>
                                <input
                                    style={{ width: "60px" }}
                                    type="number" step="1" min="1"
                                    onChange={e => changeAmount(e, product, index)}
                                    value={product.amount}
                                ></input>
                            </div>
                        </div>
                        <div className="col-1 my-5">
                            <h5 className="mx-1">{product.price} €</h5>
                            <a className="mx-3" href="#" onClick={() => removeFromCart(product)}><i className="fa fa-trash" aria-hidden="true"></i></a>
                        </div>
                    </div>
                ))}
                <div className="col-12">
                    <h5>Tyhjennä ostoskori</h5>
                    <a href="#" onClick={() => emptyCart()}><i className="fa fa-trash" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    )
}
