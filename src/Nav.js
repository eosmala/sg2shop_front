import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export default function Nav() {
    return (
        <div class="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ paddingLeft: '12px' }}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link text-decoration-none text-dark" to="/Dogs">Koirat</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link text-decoration-none text-dark" to="/Cats">Kissat</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link text-decoration-none text-dark" to="/SmallPets">Pieneläimet</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link text-decoration-none text-dark" to="/Sale">Tarjoukset</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link text-decoration-none text-dark" to="/Products">Products</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
