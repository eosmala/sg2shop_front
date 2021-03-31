import React from 'react';

export default function Footer() {
    return (

    <div className="container text-light" id="foot" >   
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h5 className="mb-4">Elukoille Rojuja</h5>
                        <p className="lead mb-0">
                            elukoillerojuja@notarealemail.gov
                            <br />
                            +358123456789
                        </p>
                    </div>
                    
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <a className="btn btn-outline-dark btn-social mx-1" href="#!"><i className="fa fa-facebook-square"></i></a>
                        <a className="btn btn-outline-dark btn-social mx-1" href="#!"><i className="fa fa-instagram"></i></a>
                        <a className="btn btn-outline-dark btn-social mx-1" href="#!"><i className="fa fa-youtube-play"></i></a>
                        <a className="btn btn-outline-dark btn-social mx-1" href="#!"><i className="fa fa-twitter"></i></a>
                    </div>
                    
                    <div className="col-lg-4">
                        
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1682.3118403037608!2d25.466435340423814!3d65.0611188886071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4681cd52c7bb803d%3A0x40f55b6d25f0d1db!2sOulun%20ammattikorkeakoulu!5e0!3m2!1sfi!2sfi!4v1616943535611!5m2!1sfi!2sfi"></iframe>

                    </div>
                </div>
            </div>
        </footer>
        <div className="copyright py-4 text-center">
            <div className="container"><p className="fw-light fst-italic">Copyright © Elukoille Rojuja Oy 2021</p></div>
        </div>
    </div>  
    )
}


