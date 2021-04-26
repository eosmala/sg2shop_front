import React, { useState } from 'react'

export default function Addproduct ({ URL }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [category, setCategory] = useState('')

  return (
    <div className='row'>
      <h4>Lisää tuote</h4>
      <form onSubmit=''>
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
          <label className='col-sm-2 col-form-label'>Kuvaus</label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-sm-2 col-form-label'>Hinta</label>
          <div className='col-sm-10'>
            <input
              type='number'
              className='form-control'
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-sm-2 col-form-label'>Varastomäärä</label>
          <div className='col-sm-10'>
            <input
              type='number'
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
        <div className="text-right">
 
            <button type='submit' className='btn'>
              Tallenna
            </button>

            <button type='submit' className='btn'>
              tyhjennä
            </button>

        </div>
      </form>
    </div>
  )
}
