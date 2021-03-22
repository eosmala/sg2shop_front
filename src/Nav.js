import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <div class="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ paddingLeft: '12px' }}>
                <Link to="/" className="navbar-brand text-decoration-none text-dark">Elukoille rojuja</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link text-decoration-none text-dark">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-decoration-none text-dark" to="/Products">Products</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
