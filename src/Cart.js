import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart({ cart, url, emptyCart, removeFromCart, changeAmount }) {
    return (
        <div id="cart">
            <button id="cart" type="button" data-toggle="modal" data-target="#cartModal">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                <span>{cart.length}</span>
            </button>

            <div className="modal fade" id="cartModal" tabIndex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="cartModalLabel">Ostoskori</h3>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">X</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                {cart.map((product, index) => (
                                    <div className="row col-12 border-bottom" key={product.id + "cart"}>
                                        <Link className="col-4 col-lg-2 my-auto" to={{ pathname: "/product/" + product.id }}>
                                            <img className="img-thumbnail img-fluid" src={url + "products/img/" + product.image} alt={product.name} />
                                        </Link>
                                        <div className="col-7 col-lg-9" >
                                            <div>
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
                                        <div className="col-1">
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
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Sulje</button>
                            <Link to="/Order" className="btn btn-secondary">Jatka tilaamaan</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}