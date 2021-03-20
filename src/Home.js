import React from 'react'
import add1 from './img/mainos1.jpg'

export default function Home() {
    return (
        <div>
            <section className="masthead text-white text-center bg-dark">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <h2 className="m-2">Tarjouksessa nyt</h2>
                            <div className="">
                                <img className="img-fluid mw-100 "
                                src = {add1} alt="add"
                                />
                            </div>
                        </div>
                        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                        </div>
                    </div>
                </div>
            </section>
            <section className="features-icons bg-light text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
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
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="row">
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <h4 className="card-title">Tuoteryhmä 1</h4>
                                <p className="card-text">placeholder</p>
                            </div>
                            <div className="card-footer">
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <h4 className="card-title">Tuoteryhmä 2</h4>
                                <p className="card-text">placeholder</p>
                            </div>
                            <div className="card-footer">
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <h4 className="card-title">Tuoteryhmä 3</h4>
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
