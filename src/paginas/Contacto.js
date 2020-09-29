import React from 'react';
import './../css/estilos.css';
import Header from './../componentes/Header';
import Footer from './../componentes/Footer';
import ImagenContacto from './../imagenes/contacto.png';
import contactoImagen from './../imagenes/contactoImagen.jpg';


  function Contacto(){
    return(
      <div>
        <Header/>
        <div className="wrapper">
        <section  class="contenido">
            <img src={ImagenContacto} />
          </section>
        </div>

        <div className="wrapper">
          <div className="contacto">
              <div className="contacto-texto">
                  <h5>Envianos un mensaje</h5>
                  <h6>¿Tiene alguna pregunta? Estamos aquí para ayudarte.  </h6>
                  <img src={contactoImagen} />
              </div>

          </div>
        </div>
       <Footer/>
      </div>

    );
  }

export default Contacto;