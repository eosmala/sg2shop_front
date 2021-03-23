import React from 'react';
import banner from './img/header.png';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div className="col-7 col-md-3">
            <Link to="/"><img className="img-fluid mw-100 "
            src = {banner} alt="header"
            /></Link>
        </div>
    )
}
