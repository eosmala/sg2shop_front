import React from 'react';
import logo from './img/logo.png';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div className="col-7 col-md-3">
            <Link to="/"><img className="img-fluid mw-100 "
            src = {logo} alt="header" style={{width: "200px"}}
            /></Link>
        </div>
    )
}
