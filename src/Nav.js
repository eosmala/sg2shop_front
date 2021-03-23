import React from 'react';
import {useState, useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';

export default function Nav({url}) {
    const [categories, setCategories] = useState([]);
    console.log("Navissa oleva url muuttuja: ", url);
    useEffect(async() => {
        try {
            const response = await fetch(url + '/sg2shop_back/inc/getcategories.php');
            const json = await response.json();
            if (response.ok) {
                setCategories(json);
            } else {
                alert(json.error);
            }
        } catch (error) {
            alert(error);
        }
    }, [])


    return (
        <div className="container">
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
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Products
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {categories.map(category => (
                                <li key={category.id}>
                                    <Link
                                    className="dropdown-item"
                                    to={{
                                        pathname: '/',
                                        state: {
                                            id: category.id,
                                            name: category.name
                                        }
                                    }}
                                    >{category.name}
                                    </Link>
                                    </li>
                                ))}
                                </div>
                            </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
