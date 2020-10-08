import React from 'react';
import './../css/estilos.css';
import Navbar from './../componentes/Nav/Navbar';
import Footer from './../componentes/Footer';
import ImagenAdulto from './../imagenes/alimentacionadulto.jpeg';

  function AlimentacionAdultoMAyor(){
    return(
      <div>
        <Navbar />
        <div className="wrapper">
          <section  className="contenido">
            <img src= {ImagenAdulto} />
          </section>
        </div>
 
        <div className="wrapper">
          <h3 align="center">Nutrióloga Geriatra</h3>
          <p></p>
          <h4 align="center"> Alimentación para adultos mayores </h4>
          <p></p>
          <h5>¿Qué ofrecemos para adultos de la tercera edad? </h5>
          <p></p>
          <p> 
              <ul>
                    <li>✦ <b>Prevención de deficiencias </b>y desnutrición causada por dificultades para alimentarse</li>
                    <li>✦ <b>Disminuir la necesidad de un elevado consumo de fármacos </b> y el control de enfermedades en caso de existir</li>
                    <li>✦ Damos <b>asesoría a la familia </b> o al cuidador principal.</li>
              </ul>
          </p> 
          <p></p>

          <p></p>
          <h5>¿Cómo nuestro Nutriólogo Geriatra puede ayudarte a ti o a tu familiar? </h5>
          <p></p>  
          <p> 
              <ul>
                    <li>✦ <b>Brindamos alimentación que cubra deficiencias</b>y desnutrición </li>
                    <li>✦ <b>Damos asesoramiento </b> para el mantenimiento de funcionalidad muscular adecuado a las condiciones del paciente</li>
                    <li>✦ <b>Recomendaciones  </b> con base en los resultados de estudios de laboratorio</li>
              </ul>
          </p> 
          <p></p>

<p></p>  
            
           
            
        </div>
        <Footer/>

      </div>
    );
  }

export default AlimentacionAdultoMAyor;