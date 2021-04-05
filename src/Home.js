import React, { useState, useEffect } from 'react';
import add1 from './img/mainos1.jpg'
import temp1 from './img/placeholder.jpg'
import temp2 from './img/placeholder2.jpg'
import temp3 from './img/placeholder3.jpg'
import temp4 from './img/placeholder4.jpg'



export default function Home({ url, category, addToCart }) {
    const [products, setProducts] = useState([]);
    // console.log("kategoria on " + category)

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
        <div>
            <section className="masthead text-center">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <h2 className="m-2">Tarjouksessa nyt</h2>
                            <div className="">
                                <img className="img-fluid mw-100 "
                                    src={add1} alt="add"
                                />
                            </div>
                        </div>
                        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto pb-4">
                        </div>
                    </div>
                </div>
            </section>
            <section className="features-icons text-center">
                <div className="container">
                    <div className="row">
                        <h3>Products for {category?.name}</h3>
                        {products.map(product => (
                            <div key={product.id}>
                                <p>{product.name}</p>
                            </div>
                        ))}
                        {/* <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <i className="icon-screen-desktop m-auto text-primary"></i>
                                </div>
                                <h3>Tuote 1</h3>
                                <p className="lead mb-0">Tuote 1 kuvaus</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <i className="icon-layers m-auto text-primary"></i>
                                </div>
                                <h3>Tuote 2</h3>
                                <p className="lead mb-0">Tuote 2 kuvaus</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div className="features-icons-icon d-flex">
                                    <i className="icon-check m-auto text-primary"></i>
                                </div>
                                <h3>Tuote 3</h3>
                                <p className="lead mb-0">Tuote 3 kuvaus</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            <section>
                <div className="row">
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <h4 className="card-title">Ruoka tuotteita</h4>

                                <p className="card-text">placeholder</p>
                            </div>
                            <div className="card-footer">
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <h4 className="card-title">Suosituimmat tuotteet</h4>
                                <div className="row row-cols-1 row-cols-md-2 g-4">
                                    <div className="col">
                                        <div className="card border-light mb-3">
                                            <img src={temp1} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <div className="hearttest">
                                                    <h5 className="card-title">Stuff</h5>
                                                </div>

                                                <div className="hearttest">
                                                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                                                </div>
                                                <br></br>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star-o" aria-hidden="true"></i>
                                                <br></br>
                                                <div className="hearttest">
                                                    <p>20€</p>
                                                </div>
                                                <div className="hearttest">
                                                    <button type="button" className="btn btn-success btn-sm">Osta</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card border-light mb-3 ">
                                            <img src={temp2} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <div className="hearttest">
                                                    <h5 className="card-title">Cat</h5>
                                                </div>

                                                <div className="hearttest">
                                                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                                                </div>
                                                <br></br>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star-o" aria-hidden="true"></i>
                                                <br></br>
                                                <div className="hearttest">
                                                    <p>20€</p>
                                                </div>
                                                <div className="hearttest">
                                                    <button type="button" className="btn btn-success btn-sm">Osta</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card border-light mb-3">
                                            <img src={temp3} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <div className="hearttest">
                                                    <h5 className="card-title">Dog </h5>
                                                </div>

                                                <div className="hearttest">
                                                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                                                </div>
                                                <br></br>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star-o" aria-hidden="true"></i>
                                                <br></br>
                                                <div className="hearttest">
                                                    <p>20€</p>
                                                </div>
                                                <div className="hearttest">
                                                    <button type="button" className="btn btn-success btn-sm">Osta</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card border-light mb-3">
                                            <img src={temp4} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <div className="hearttest">
                                                    <h5 className="card-title">Yeet</h5>
                                                </div>

                                                <div className="hearttest">
                                                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                                                </div>
                                                <br></br>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star-o" aria-hidden="true"></i>
                                                <br></br>
                                                <div className="hearttest">
                                                    <p>20€</p>
                                                </div>
                                                <div className="hearttest">
                                                    <button type="button" className="btn btn-success btn-sm">Osta</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="card-footer">
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <h4 className="card-title">Leluja</h4>
                                <p className="card-text">placeholder</p>
                            </div>
                            <div className="card-footer">
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}
