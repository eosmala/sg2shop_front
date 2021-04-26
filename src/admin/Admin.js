import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Admin({ url }) {
    //     const [products, setProducts] = useState([]);



    return (
        <>

            <div className="container" >
                <h3>Products</h3>
                <Link className="btn" to="/admin/aproducts" >Selaa tuotteita</Link>
                <Link className="btn" to="/admin/addproduct" >Lisää tuote</Link>
            </div>
        </>
    )
}
