import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart({ cart, url, emptyCart, removeFromCart, changeAmount }) {
    return (
        <div>
            <button id="cart-icon" type="button" data-toggle="modal" data-target="#cartModal">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                <span>{cart.length}</span>
            </button>

            <div className="modal fade" id="cartModal" tabIndex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title " id="cartModalLabel">Ostoskori</h3>
                            <button type="button" className="close ml-auto" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">X</span>
                            </button>
                        </div>
                        <div className="modal-body pt-0">
                            <div className="row">
                                {cart.map((product, index) => (
                                    <div className="row col-12 border-bottom mx-auto mt-2" key={product.product_id + "cart"}>
                                        <Link className="col-4 col-lg-2 my-auto" to={{ pathname: "/product/" + product.product_id }}>
                                            <img className="img-thumbnail img-fluid" src={url + "products/img/" + product.image} alt={product.product_name} />
                                        </Link>
                                        <div className="col-7 col-lg-9" >
                                            <div>
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
                                        <div className="col-1">
                                            <h5>{product.price} €</h5>
                                            <a href="#" onClick={() => removeFromCart(product)}>
                                                <h5>Poista <i className="fa fa-trash" aria-hidden="true"></i></h5>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                                <div className="col-12 mt-3">
                                    <a href="#" onClick={() => emptyCart()}>
                                        <h5>Tyhjennä ostoskori <i className="fa fa-trash" aria-hidden="true"></i></h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-card" data-dismiss="modal">Sulje</button>
                            <Link to="/Order" className="btn btn-card">Jatka tilaamaan</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}