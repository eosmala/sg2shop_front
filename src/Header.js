import React from 'react';
import logo from './img/logo.png';
import {Link} from 'react-router-dom';
import ThemeSwitch from './ThemeSwitch';

export default function Header() {
    return (
        <>
        <div className="row">
        <div className="col-7 col-md-3">
            <Link to="/"><img className="img-fluid mw-100 "
            src = {logo} alt="header" style={{width: "200px"}}
            /></Link>
        </div>
        <div className="col-3 col-md-2 position-absolute top-0 end-0">
            <ThemeSwitch />
        </div>
        </div>
        </>
    )
}
