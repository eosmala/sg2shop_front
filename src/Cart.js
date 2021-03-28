import React from 'react';
import {Link} from 'react-router-dom';

export default function Cart({cart}) {
    return (
        <Link id="cart" to="/order">
         <i class="fa fa-shopping-cart" aria-hidden="true"></i>
         <span>{cart.length}</span>
        </Link>
    )
}