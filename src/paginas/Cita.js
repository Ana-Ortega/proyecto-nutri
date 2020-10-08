import React from 'react';
import './../css/estilos.css';
import Frutos from './../imagenes/Frutos-Rojos.jpg';
import Navbar from './../componentes/Nav/Navbar';
import Footer from './../componentes/Footer'

  function Cita(){
    return(
      <div>
        <Navbar />
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