import React, { useState, useEffect } from 'react';
import add1 from './img/mainos1.jpg'
import temp1 from './img/placeholder.jpg'
import temp2 from './img/placeholder2.jpg'
import temp3 from './img/placeholder3.jpg'
import temp4 from './img/placeholder4.jpg'
import temp5 from './img/Temp5.jpg'
import temp6 from './img/Temp6.jpg'

export default function Home({ url, category, addToCart }) {
    // const [products, setProducts] = useState([]);
    // console.log("kategoria on " + category)

    // useEffect(() => {
    //     async function prod() {
    //         if (category !== null) {
    //             let address = '';
    //             if (category !== null) {
    //                 address = url + 'products/getproducts.php/' + category?.id;
    //             }
    //             try {
    //                 const response = await fetch(address);
    //                 const json = await response.json();
    //                 if (response.ok) {
    //                     setProducts(json);
    //                 } else {
    //                     alert(json.error);
    //                 }
    //             } catch (error) {
    //                 alert(error);
    //             }
    //         }
    //     }
    //     prod();
    // }, [category])

    return (
        <div>
            <section className="masthead text-center">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <h2 className="m-2">Tarjouksessa nyt</h2>

                            <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-interval="10000">
                                        <img className="img-fluid mw-100" src={add1} alt="First slide" />

                                    </div>
                                    <div className="carousel-item" data-interval="10000">
                                        <img className="img-fluid mw-100" src={temp5} alt="Second slide" />
                                    </div>
                                    <div className="carousel-item" data-interval="10000">
                                        <img className="img-fluid mw-100" src={temp6} alt="Third slide" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <h4 className="m-2">Meistä Tietoa</h4>

                            <div className="card h-90 m-3 pb-4">
                                <h5>Mikä on Elukoille rojua?</h5>
                                <p>Elukoille rojuja on eläin tuotekauppa. Kauppa perustettiin vuonna 2021 viiden perustajan ja heidän eläinten raukkauden kautta. Nyt ER toivookin tuovan kaikenlaisille kavereille
                                kotiin iloa ja mukavuutta!</p>
                                <p>------------------------------------------</p>
                                <h6>Arvosteluita</h6>
                                <p>"Elukoille rojuja on mahtipaikka riippumatta mitä tarpeita on." -HS</p>
                                <br />
                                <p>"Elukoille rojua on ihan paras!" -Eläimet Ry.</p>
                                <br />
                                <p>"Jeee :)"</p>
                                <br />
                                <p>"Koirat ja kissat on kivoi, jee jee"</p>
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
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}
