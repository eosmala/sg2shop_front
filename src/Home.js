import React from 'react'
import add1 from './img/mainos1.jpg'
import temp1 from './img/placeholder.jpg'
import temp2 from './img/placeholder2.jpg'
import temp3 from './img/placeholder3.jpg'
import temp4 from './img/placeholder4.jpg'



export default function Home({url, category, addToCart}) {
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
                                src = {add1} alt="add"
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
                                <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card border-light mb-3">
      <img src={temp1} class="card-img-top" alt="..."/>
      <div class="card-body">
      <div class="hearttest">
        <h5 class="card-title">Stuff</h5> 
        </div>
        
        <div class="hearttest">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
        </div>
        <br></br>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <br></br>
        <div class="hearttest">
            <p>20€</p>
            </div>
        <div class="hearttest">
            <button type="button" class="btn btn-success btn-sm">Osta</button>
        </div> 
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card border-light mb-3 ">
      <img src={temp2} class="card-img-top" alt="..."/>
      <div class="card-body">
      <div class="hearttest">
        <h5 class="card-title">Cat</h5> 
        </div>
        
        <div class="hearttest">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
        </div>
        <br></br>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <br></br>
        <div class="hearttest">
            <p>20€</p>
            </div>
        <div class="hearttest">
            <button type="button" class="btn btn-success btn-sm">Osta</button>
        </div> 
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card border-light mb-3">
      <img src={temp3} class="card-img-top" alt="..."/>
      <div class="card-body">
          <div class="hearttest">
        <h5 class="card-title">Dog </h5> 
        </div>
        
        <div class="hearttest">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
        </div>
        <br></br>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <br></br>
        <div class="hearttest">
            <p>20€</p>
            </div>
        <div class="hearttest">
            <button type="button" class="btn btn-success btn-sm">Osta</button>
        </div> 
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card border-light mb-3">
      <img src={temp4} class="card-img-top" alt="..."/>
      <div class="card-body">
      <div class="hearttest">
        <h5 class="card-title">Yeet</h5> 
        </div>
        
        <div class="hearttest">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
        </div>
        <br></br>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <br></br>
        <div class="hearttest">
            <p>20€</p>
            </div>
        <div class="hearttest">
            <button type="button" class="btn btn-success btn-sm">Osta</button>
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
