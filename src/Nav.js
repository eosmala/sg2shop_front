import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Cart from './Cart';
import SearchBar from './SearchBar';
import Login from './Login';
import LikePage from './LikePage';

export default function Nav({ url, cart, setCategory, addToCart, emptyCart, removeFromCart, changeAmount, login }) {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        async function categ() {
            try {
                const response = await fetch(url + 'products/getcategories.php');
                const json = await response.json();
                if (response.ok) {
                    setCategories(json);
                    setCategory(json[0]);
                } else {
                    alert(json.error);
                }
            } catch (error) {
                alert(error);
            }
        }
        categ();
    }, [])


    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg ps-2 rounded">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li>
                            <Login login={login} />
                        </li>
                    </ul>
                    <ul className="navbar-nav m-auto">
                    
                        {categories.map(category => (
                            <li key={category.id}>
                                <NavLink
                                    activeClassName="active"
                                    className="nav-link text-decoration-none rounded"
                                    to={{
                                        pathname: "/" + category.name,
                                        state: {
                                            id: category.id,
                                            name: category.name
                                        }
                                    }}
                                >{category.name}
                                </NavLink>
                            </li>
                        ))}
                                <SearchBar></SearchBar>
                    </ul>
            
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Cart 
                            url={url}
                            cart={cart} 
                            addToCart={addToCart}
                            emptyCart={emptyCart}
                            removeFromCart={removeFromCart}
                            changeAmount={changeAmount}
                            />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
