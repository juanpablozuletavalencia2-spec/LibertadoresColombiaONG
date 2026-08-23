'use client'

import React, { useState } from 'react'
import axios from 'axios'

import '../css/Donaciones.css'

export default function Donaciones() {

  const [form, setForm] = useState({
    name: '',
    n_Cuenta: '',
    Banco: '',
    cvv: ''
  })

  // GUARDAR INPUTS
  function handleChange(e) {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  // ENVIAR FORMULARIO
  async function handleSubmit(e) {

    e.preventDefault()

    try {

      const response = await axios.post(
        'http://localhost:3000/api/tarjetas',
        form
      )

      console.log(response.data)

      alert('Donación enviada')

    } catch (error) {

      console.log(error)

      alert('Error al enviar')
    }
  }

  return (

    <div className="padre">

      <form onSubmit={handleSubmit}>

        <div className='name'>
          <label htmlFor="name">Nombre</label>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Agrega nombre"
            onChange={handleChange}
            required
          />
        </div>


        <div className='n_Cuenta'>
          <label htmlFor="n_Cuenta">Ingresa Tu tarjeta</label>

          <input
            type="text"
            id="n_Cuenta"
            name="n_Cuenta"
            placeholder="123 456 789"
            onChange={handleChange}
            required
          />
        </div>


        <div className='cvv'>
          <label htmlFor="cvv">CVV</label>

          <input
            type="password"
            id="cvv"
            name="cvv"
            placeholder="Ingresa tu clave"
            onChange={handleChange}
            required
          />
        </div>


        <div>
          <label>Banco</label>
        </div>


        <div className='Banco'>

          <label>
            <input
              type="radio"
              name="Banco"
              value="BBVA"
              onChange={handleChange}
            />

            <i id='bbva' className="fa-solid fa-building-columns"></i>

            BBVA
          </label>


          <label>
            <input
              type="radio"
              name="Banco"
              value="Davivienda"
              onChange={handleChange}
            />

            <i id='davi' className="fa-solid fa-building-columns"></i>

            Davivienda
          </label>


          <label>
            <input
              type="radio"
              name="Banco"
              value="Santander"
              onChange={handleChange}
            />

            <i id='San' className="fa-solid fa-building-columns"></i>

            Santander
          </label>


          <label>
            <input
              type="radio"
              name="Banco"
              value="Anonimas"
              onChange={handleChange}
            />

            <i id='ent' className="fa-solid fa-money-bill-1-wave"></i>

            Entidades Anónimas
          </label>


          <label>
            <input
              type="radio"
              name="Banco"
              value="Bancolombia"
              onChange={handleChange}
            />

            <i id='banl' className="fa-solid fa-building-columns"></i>

            Bancolombia
          </label>

        </div>

        <button type="submit">
          Donar
        </button>

      </form>

    </div>
  )
}