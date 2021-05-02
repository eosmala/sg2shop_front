import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Order({ url, cart, emptyCart, removeFromCart, changeAmount }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [city, setCity] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [email, setEmail] = useState('');

    const [finished, setFinished] = useState(false);

    function order(e) {
        e.preventDefault();
        let status = 0
        fetch(url + 'order/add.php', {
            method: 'POST',
            headers: {
                Accept: 'application(json)',
                'Content-type': 'application(json)'
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                streetAddress: streetAddress,
                zipcode: zipcode,
                city: city,
                email: email,
                phonenumber: phonenumber,
                cart: cart,
            })
        })
        .then (res => {
            status = parseInt(res.status)
          return res.json();
        })
        .then (
            (res) => {
                if (status === 200) {
                console.log(res);
                emptyCart();
                setFinished(true);
            } else {
                alert(res.error)
              }
            }, (error) => {
                alert(error);
            }
        )
    }
    
    let sum = 0;

    if (finished === false) {
        return (
            <div className="container" id="order-page">
                <div className="row bg">
                    <h3 className="mt-1">Tilauksesi</h3>
                    {cart.map((product, index) => {
                        sum += parseFloat(product.price * product.amount);
                        return (
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
                                            type="number" step="1" min="1" max={product.stock_amount}
                                            onChange={e => changeAmount(e, product, index)}
                                            value={product.amount}
                                        ></input>
                                    </div>
                                </div>
                                <div className="col-1 my-5">
                                    <h5 className="mx-1">{product.price} €</h5>
                                    <button className="mx-3 trash" href="#" onClick={() => removeFromCart(product)}><i className="fa fa-trash" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        )
                    })}
                    <div className="col-9">
                        <h5>Tyhjennä ostoskori</h5>
                        <button className="trash" onClick={() => emptyCart()}><i className="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                    <div className="col-3">
                        <h5>Yhteensä: {sum.toFixed(2)} €</h5>
                    </div>

                    {cart.length > 0 &&
                    <>
                      <h3 className="mt-1">Yhteystiedot</h3>
                      <form onSubmit={order}>
                          <div className="mt-1">
                             <label>Etunimi:</label>
                             <input className="form-control" onChange={e => setFirstName(e.target.value)}/>
                          </div>
                          <div className="mt-1">
                             <label>Sukunimi:</label>
                             <input className="form-control" onChange={e => setLastName(e.target.value)}/>
                          </div>
                          <div className="mt-1">
                             <label>Osoite:</label>
                             <input className="form-control" onChange={e => setStreetAddress(e.target.value)}/>
                          </div>
                          <div className="mt-1">
                             <label>Postinumero:</label>
                             <input className="form-control" onChange={e => setZipcode(e.target.value)}/>
                          </div>
                          <div className="mt-1">
                             <label>Kaupunki:</label>
                             <input className="form-control" onChange={e => setCity(e.target.value)}/>
                          </div>
                          <div className="mt-1">
                             <label>Puhelinnumero:</label>
                             <input className="form-control" onChange={e => setPhonenumber(e.target.value)}/>
                          </div>
                          <div className="mt-1">
                             <label>Sähköposti:</label>
                             <input className="form-control" onChange={e => setEmail(e.target.value)}/>
                          </div>
                          <button className="btn btn-card my-3">Tilaa</button>
                      </form>
                    </> 
                    }
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container" id="order-page">
                <div className="row bg">
                    <h3 className="mt-1">Kiitos tilauksestasi!</h3>
                </div>
            </div>
        );
    }
}
