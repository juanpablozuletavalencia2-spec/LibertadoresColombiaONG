import React from 'react';
import { Link } from 'react-router-dom';
import '../css/General.css';

function Maquetación() {
  return (
    <div className='header'>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Contactos'>Contactos</Link></li>
          <li><Link to='/Donaciones'>Donaciones</Link></li>
          <li><Link to='/Ayuda'>Ayuda</Link></li>
        </ul>

        <Link to='#' className='s'>Iniciar sesión</Link>
        <Link to='#' className='s'>Registrarse</Link>
      </nav>
    </div>
  );
}

export default Maquetación;