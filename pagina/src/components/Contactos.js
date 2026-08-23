import React from 'react'
import Maquetación from './Maquetación';
import '../css/Contactos.css';
import { Link } from 'react-router-dom';
export default function Contactos() {
  return (
    <>
    <Maquetación></Maquetación>
        <div className='padre'>
           
        <div className='article1'>
            <h2>
                <i className="fa-brands fa-instagram in" ></i>
            </h2>
            <p>
                Esta es una ventana directa a nuestra pagina de instagram 
                , podras ver el contenido relacionado con nuestros servicios , 
                sociós , noticias y mas contenido multimedia
            </p>
            <Link className='inst' to='https://www.instagram.com'><i className="fa-brands fa-instagram in" ></i><span className='instxt'>INSTAGRAM</span></Link>
        </div>
        <div className='article2'>
            <h2>
                <i className="fa-brands fa-facebook fa"></i>
            </h2>
            <p>
                Siguenos en nuestras paginas de facebook para conocer noticias acerca del proyecto 
                y conocer mas sobre nosotros y como ayudarnos.
            </p>
        
            <Link className='inst' to='/'><i className="fa-brands fa-facebook fa"></i><span className='instxt'>FACEBOOK</span></Link>
        </div> 

        <div className='article3'>
            <h2>
               <i  className="fa-brands fa-square-x-twitter"></i>
            </h2>
            <p>
                Siguenos en x para que te enteres de todo lo que pasa en colombia y en con nuestro proyecto Social
            </p>
            <Link className='inst' to='/'><span className='instxt'>X</span></Link>
        </div> 

        <div className='article4'>
            <h2>
               <i class="fa-brands fa-whatsapp wh"></i>
            </h2>
            <p>
                Este es nuestro enlace directo a nuestros numero de Whats App para que contactes con nosotros de manera directa
            </p>
            <Link className='inst' to='/'><i class="fa-brands fa-whatsapp wh"></i><span className='instxt'>WhatssAPP</span></Link>
        </div> 

        <div className='article5'>
            <h2>
                <i className="fa-regular fa-comment"></i>
            </h2>
            <p>
                Este es nuestro enlace para correo electronico para que envies tus mensajes directos a nuestros buzones
            </p>
            <Link className='inst' to='/'><i className="fa-regular fa-comment"></i><span className='instxt'>HOTMAIL-Outlook</span></Link>
        </div> 

        </div>



    </>
  )
}
