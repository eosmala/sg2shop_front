import React from 'react';
import {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';

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
            <nav className="navbar navbar-expand-lg ps-2 rounded">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    {categories.map(category => (
                                <li key={category.id}>
                                    <NavLink
                                    activeClassName="active"
                                    className="nav-link text-decoration-none rounded"
                                    to={{
                                        pathname: category.name,
                                        state: {
                                            id: category.id,
                                            name: category.name
                                        }
                                    }}
                                    >{category.name}
                                    </NavLink>
                                    </li>
                                ))}
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link text-decoration-none rounded" to="/Tuotteet">Tuotteet</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
