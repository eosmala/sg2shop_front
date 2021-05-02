import add1 from './img/mainos1.jpg'
import temp5 from './img/Temp5.jpg'
import temp6 from './img/Temp6.jpg'

export default function Home() {

    return (
        <div className="container">
            <section className="masthead text-center">
                <div className="row">
                    <div className="col-lg-6 my-2">
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
                    <div className="col-lg-6 my-2">
                        <h4 className="m-2">Meistä Tietoa</h4>

                        <div className="card h-90 m-3 p-2">
                            <h5>Mikä on Elukoille rojua?</h5>
                            <p>Elukoille rojuja on eläin tuotekauppa. Kauppa perustettiin vuonna 2021 viiden perustajan ja heidän eläinten raukkauden kautta. Nyt ER toivookin tuovan kaikenlaisille kavereille
                                kotiin iloa ja mukavuutta!</p>
                            <p>------------------------------------------</p>
                            <h6 className="my-2">Arvosteluita</h6>
                            <p className="my-2">"Elukoille rojuja on mahtipaikka riippumatta mitä tarpeita on." -HS</p>
                            <p className="my-2">"Elukoille rojua on ihan paras!" -Eläimet Ry.</p>
                            <p className="my-2">"Jeee &#128521;"</p>
                            <p className="my-2">"Koirat ja kissat on kivoi, jee jee"</p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
