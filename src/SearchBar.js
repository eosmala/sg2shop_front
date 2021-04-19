import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function SearchBar() {
    const style = { marginLeft: "50px" };
    const [criteria,setCriteria] = useState('');

    function doSearch(e) {
        e.preventDefault();
    }

    return (
        <div>
        <form 
        onSubmit={doSearch}
        action="http://localhost/sg2shop_back/products/search.php"
        method="get"
        >
        <input
            type="text"
            id="product"
            name="product"
            style={style}
            placeholder="Hae tuotteita"
            value={criteria}
            onChange={e => setCriteria(e.target.value)} />
        <Link to={'SearchResults?product=' + criteria} criteria={criteria}>
        <button id="searchBtn" type="submit"id="submit">Hae</button>
        </Link>
        </form>
        </div>
    )

}