import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Nav({url}) {
    const [categories, setCategories] = useState([]);
    console.log("Navissa oleva url muuttuja: ", url);
    useEffect(async() => {
        try {
            const response = await fetch(url + 'koulu/sg2shop_back/inc/getcategories.php'); // VAIHDA TÄMÄ POLKUUN, JOHON OLET TALLENTANUT BACKENDIN.
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
                <Link to="/" className="navbar-brand text-decoration-none text-dark">Elukoille rojuja</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link text-decoration-none text-dark">Home</Link>
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
