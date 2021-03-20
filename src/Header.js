import React from 'react';
import banner from './img/header.png';

export default function Header() {
    return (
        <div className="col-7 col-md-3">
            <img className="img-fluid mw-100 "
            src = {banner} alt="header"
            />
        </div>
    )
}
