import React from 'react';
import banner from './img/header.png';

export default function Header() {
    return (
        <div className="col-8 col-md-5">
            <img className="img-fluid mw-100 "
            src = {banner} alt="header"
            />
        </div>
    )
}
