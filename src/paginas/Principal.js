import React from 'react';

import Header from './../componentes/Header';
import Footer from './../componentes/Footer';
import Servicios from './../componentes/Servicios';
import Blog from './../componentes/Blog';
import ImagenFrutas from './../imagenes/frutitas_texto.jpg'


  function Principal(){
    return(
      <div>
        <Header/>
        <div class="wrapper">
            <section  class="contenido">
              <img src={ImagenFrutas} />
            </section>
        </div>
        <Servicios/>
        <Blog/>
        <Footer/>
      </div>

    );
  }

export default Principal;