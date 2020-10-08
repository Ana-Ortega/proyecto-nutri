import React from 'react';
import './../css/estilos.css';
import Navbar from './../componentes/Nav/Navbar';
import Footer from './../componentes/Footer';
import ImagenEmbarazo from './../imagenes/dietas-embarazadas.jpg';

  function AlimentacionEmbarazo(){
    return(
      <div>
        <Navbar />
        <div className="wrapper">
          <section  className="contenido">
            <img src= {ImagenEmbarazo} />
          </section>
        </div>
 
        <div className="wrapper">
          <h3 align="center">Nutriólogo para el cuidado del Embarazo</h3>
          <p></p>
          <h5 align="center"> Alimentación durante el embarazo para ti y tu bebé </h5>
          <p></p>
          <p>¿De qué manera nuestra nutrióloga te puede ayudar a cuidar tu embarazo?</p>
          <p> 
              <ul>
                    <li>✦ Revisar <b>complementos vitamínicos y suplementos ideales para tu embarazo </b></li>
                    <li>✦ <b>Alimentación en el embarazo saludable </b> para prevenir enfermedades durante el embarazo</li>
                    <li>✦ <b>Seguimiento de tu aumento de peso </b> durante el embarazo</li>
              </ul>
          </p> 
          <p> </p>
          <p>¿Qué efectos tiene una buena nutrición en tu embarazo?</p>
          <p> 
              <ul>
                    <li>✦ <b>Adecuado crecimiento y desarrollo </b>durante el embarazo</li>
                    <li>✦ <b>Prevención de enfermedades </b> en edad adulta</li>
                    <li>✦ Evitar la necesidad de un parto prematuro</li>
                    <li>✦ <b>Aumento de peso durante el embarazo</b>de acuerdo a tu estado gestacional</li>
                    <li>✦ Alimentación en el embarazo</li>
              </ul>
          </p> 

        </div>
        <Footer/>

      </div>
    );
  }

export default AlimentacionEmbarazo;