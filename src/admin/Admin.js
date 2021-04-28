import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Admin({ url }) {
    //     const [products, setProducts] = useState([]);



    return (
        <>

            <div className="container my-3" >
                <h3>Products</h3>
                <Link className="btn mx-2" to="/admin/aproducts" >Selaa tuotteita</Link>
                <Link className="btn mx-2" to="/admin/addproduct" >Lisää tuote</Link>
            </div>
        </>
    )
}
