import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Aproducts ({ url }) {
  const [products, setProducts] = useState([])
  const [productname, setProductname] = useState('')
 // const [productId, setProductId] = useState('')

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
  }, [url])

  function remove(id){
    console.log(id)
    
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
          <div key={product.product_id} className='p-2 m-2 col-10 col-md-3'>
            <p>Tuotenumero: {product.product_id} </p>
            <p>Tuotenimi: {product.product_name}</p>
            <p>Hinta: {product.price} € </p>
            <p>Varastossa: {product.stock_amount} kpl</p>
            <p>Kategoria: {product.category_name}</p>
            <p>
              <button
                className='btn m-2'
                type='button'
                // data-toggle='collapse'
                // data-target={`#collapse${product.product_id}`}
                // aria-expanded='false'
                // aria-controls='collapse'
                // onClick={'setProductname({product.product_name})'}
              >
                muokkaa
              </button> 
              <button className='btn m-2' 
              value={`${product.product_id}`} onClick={e => remove(e.target.value)} 
              >
                poista
              </button>
            </p>
            {/* <div className='collapse' id={`collapse${product.product_id}`}>
              <form action=''>
                <label for='product_name'>Tuotenimi</label>
                <input
                  name='product_name'
                  type='text'
                  value={productname}
                  onChange={e => setProductname(e.target.value)}
                />
                <label for='price'>Hinta</label>
                <input name='price' type='number' value={product.price} />
                <label for='stock_amount'>Varastossa</label>
                <input
                  name='stock_amount'
                  type='number'
                  value={product.stock_amount}
                />
              </form>
            </div> */}
            <hr></hr>
          </div>
        ))}
      </div>
    </div>
  )
}
