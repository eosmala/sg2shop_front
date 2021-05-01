import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Editproduct from './Editproduct';


export default function Aproducts ({ url }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function prod () {
      try {
        const address = url + 'admin/getproducts.php'
        const response = await fetch(address)
        let json = await response.json()
        if (response.ok) {
          setProducts(json)
        } else {
          alert(json.error)
        }
      } catch (error) {
        alert(error)
      }
    }
    prod()
  }, [url, products])

  function remove (id) {
    let status = 0
    fetch(url + 'admin/deleteproduct.php', {
      method: 'POST',
      headers: {
        Accept: 'application(json)',
        'Content-type': 'application(json)'
      },
      body: JSON.stringify({
        product_id: id
      })
    })
      .then(res => {
        status = parseInt(res.status)
        return res.json()
      })
      .then(
        res => {
          if (status === 200) {
            alert('poistaminen onnistui')
          } else {
            alert(res.error)
          }
        },
        error => {
          alert(error)
        }
      )
  }

  return (
    <div className='container my-3'>
      <div className='text-center'>
        <h3>Tuotteet</h3>
        <Link className='btn mx-2' to='/admin'>
          Takaisin
        </Link>
        <Link className='btn mx-2' to='/admin/addproduct'>
          Lisää tuote
        </Link>
      </div>
      <hr></hr>
      <div className='row'>
        {products.map(product => (
          <div key={product.product_id} className='p-2 m-2 col-12 col-md-5'>
            <p>Tuotenumero: {product.product_id} </p>
            <p>Tuotenimi: {product.product_name}</p>
            <p>Hinta: {product.price} € </p>
            <p>Varastossa: {product.stock_amount} kpl</p>
            <p>Kategoria: {product.category_name}</p>
            <p>Kuvaus: {product.description}</p>
            <p>
              <button
                className='btn m-2'
                type='button'
                data-toggle='collapse'
                data-target={`#collapse${product.product_id}`}
                aria-expanded='false'
                aria-controls='collapse'
              >
                Muokkaa
              </button>  

              <button
                className='btn m-2'
                value={`${product.product_id}`}
                onClick={e => remove(e.target.value)}
              >
                Poista
              </button>
            </p>
             <div className='collapse' id={`collapse${product.product_id}`}>
               <Editproduct 
               prod_id={`${product.product_id}`} 
               prod_name={`${product.product_name}`}
               prod_desc={`${product.description}`}
               prod_price= {`${product.price}`}
               prod_stock={`${product.stock_amount}`}
               prod_cat={`${product.category_id}`}
               url={url}
               />
            </div>
            <hr></hr>
          </div>
        ))}
      </div>
    </div>
  )
}
