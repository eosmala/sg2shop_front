import React from 'react'
import { useState, useEffect } from 'react'


export default function Aproducts ({ url }) {
  const [products, setProducts] = useState([]);
  const [productname, setProductname] = useState('');
  const [productId, setProductId] = useState('');
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

  return (
    <div className='container' id='category-page'>
      <h3>Tuotteet</h3>
      {products.map(product => (
        <div key={product.product_id} className='p-2 m-2'>
          <p>Tuotenumero: {product.product_id} </p>
          <p>Tuotenimi: {product.product_name}</p>
          <p>Hinta: {product.price} € </p>
          <p>Varastossa: {product.stock_amount} kpl</p>
          <p>Kategoria: {product.category_name}</p>
          <p>
            <button
              className='btn'
              type='button'
              data-toggle='collapse'
              data-target={`#collapse${product.product_id}`}
              aria-expanded='false'
              aria-controls='collapse'
              onClick={'setProductname({product.product_name})'}
            >
              muokkaa
            </button>
          </p>
          <div className='collapse' id={`collapse${product.product_id}`}>
            <form action=''>
              <label for='product_name'>Tuotenimi</label>
              <input
                name='product_name'
                type='text'
                value={productname}
                onChange={e => setProductname(e.target.value)}
              />
                <label for='price'>Hinta</label>
              <input
                name='price'
                type='number'
                value={product.price}
              />
                <label for='stock_amount'>Varastossa</label>
              <input
                name='stock_amount'
                type='number'
                value={product.stock_amount}
              />
            </form>
          </div>
          <hr></hr>
        </div>
      ))}
    </div>
  )
}
