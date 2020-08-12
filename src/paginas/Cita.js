import React from 'react';
import './../css/estilos.css';
import Frutos from './../imagenes/Frutos-Rojos.jpg';
import Header from './../componentes/Header';
import Footer from './../componentes/Footer'

  function Cita(){
    return(
      <div>
        <h1> Pagina Cita</h1>
        <Header/>
        <div class="wrapper">
          <section  class="contenido">
            <img src={Frutos}/>
          </section>
        </div>
        <Footer/>
     
      </div>

    );
  }

export default Cita;