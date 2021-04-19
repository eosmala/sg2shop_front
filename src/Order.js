import React from 'react'
import { Link } from 'react-router-dom';

export default function Order({ url, cart, emptyCart, removeFromCart, changeAmount }) {
    return (
        <div className="container-fluid" id="order-page">
            <div className="row">
                <h3>Tilauksesi</h3>
                {cart.map((product, index) => (
                    <div className="row col-12 border-bottom" key={product.id + "cart"}>
                        <Link className="col-4 col-lg-2 my-auto" to={{ pathname: "/product/" + product.id }}>
                            <img className="img-thumbnail img-fluid" src={url + "products/img/" + product.image} alt={product.name} />
                        </Link>
                        <div className="col-7 col-lg-9" >
                            <div className="py-5">
                                <Link to={{ pathname: "/product/" + product.id }}>
                                    <h5>{product.name}</h5>
                                </Link>
                                <input
                                    className=""
                                    type="number" step="1" min="1"
                                    onChange={e => changeAmount(e, product, index)}
                                    value={product.amount}
                                ></input>
                            </div>
                        </div>
                        <div className="col-1 py-5">
                            <h5>{product.price} €</h5>
                            <a href="#" onClick={() => removeFromCart(product)}><i className="fa fa-trash" aria-hidden="true"></i></a>
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
