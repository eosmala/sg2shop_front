import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Editproduct({url, product_name, product_id}) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [category, setCategory] = useState(1)

  useEffect(() => {
      setName(product_name)

  }, [])

 


  function save(e) {
    e.preventDefault()
    let status = 0
    fetch(url + 'admin/editproduct.php', {
      method: 'POST',
      headers: {
        Accept: 'application(json)',
        'Content-type': 'application(json)'
      },
      body: JSON.stringify({
        product_name: name,
        price: price,
        stock_amount: stock,
        category_id: category,
        description: description,
      })
    })
      .then(res => {
        status = parseInt(res.status)
        return res.json()
      })
      .then(
        res => {
          if (status === 200) {
           alert("muokkaus onnistui")
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
    <div className='row my-3'>
      <h4>Muokkaa tuotetta</h4>
      <form onSubmit={save}>
        <div className='form-group row'>
          <label for='nimi' className='col-sm-2 col-form-label'>
            Tuotenimi
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              id='nimi'
              className='form-control'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
        </div>
        <div className='form-group row'>
          <label for="description" className='col-sm-2 col-form-label'>Kuvaus</label>
          <div className='col-sm-10'>
            <input
              type='text'
              id="description"
              className='form-control'
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className='form-group row'>
          <label for="price" className='col-sm-2 col-form-label'>Hinta</label>
          <div className='col-sm-10'>
            <input
              type='number'
              id='price'
              className='form-control'
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className='form-group row'>
          <label for="stock" className='col-sm-2 col-form-label'>Varastomäärä</label>
          <div className='col-sm-10'>
            <input
              type='number'
              id="stock"
              className='form-control'
              value={stock}
              onChange={e => setStock(e.target.value)}
            />
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-sm-2 col-form-label'>Tuoteryhmä</label>
          <div className='col-sm-10'>
            <select
              className='form-control'
              id='select'
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value='1'>Koirat</option>
              <option value='2'>Kissat</option>
              <option value='3'>Pieneläimet</option>
              <option value='4'>Tarjoukset</option>
            </select>
          </div>
        </div>
        <div className='form-group row'>
          <label for='tiedosto' className='col-sm-2 col-form-label'>
            Kuva
          </label>
          <div className='col-sm-10'>
            <input type='file' class='form-control-file' id='tiedosto' />
          </div>
        </div>
        <div className='form-group text-right'>
          <Link className='btn mx-2' to='/admin/aproducts'>
            Hylkää
          </Link>
          <button type='submit' className='btn mx-2'>
            Tallenna
          </button>
        </div>
      </form>
    </div>
  )
}
