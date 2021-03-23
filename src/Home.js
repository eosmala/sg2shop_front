import React from 'react'
import add1 from './img/mainos1.jpg'
import temp1 from './img/placeholder.jpg'
import temp2 from './img/placeholder2.jpg'
import temp3 from './img/placeholder3.jpg'
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
                        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto pb-4">
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
                                <h4 className="card-title">Ruoka tuotteita</h4>
                                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-target="#carouselExampleIndicators" data-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-target="#carouselExampleIndicators" data-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-target="#carouselExampleIndicators" data-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner"> 
    <div class="carousel-item active">
      <img src={temp1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={temp2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={temp3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators"  data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators"  data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> 
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
                                <p className="card-text">placeholder</p>
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
