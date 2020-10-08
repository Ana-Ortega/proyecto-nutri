import React from 'react';
import './../css/estilos.css';
import Navbar from './../componentes/Nav/Navbar';
import Footer from './../componentes/Footer';
import ImagenSana from './../imagenes/alimentacionsana.jpg';


  function AlimentacionSana(){
    return(
      <div>
        <Navbar />
        <div className="wrapper">
          <section  className="contenido">
            <img src={ImagenSana} />
          </section>
        </div>

        <div className="wrapper">
          <h3 align="center">Alimentación Eficaz</h3>
          <p></p>
          <h5 align="center"> Protege tu Cuerpo </h5>
          <p></p>
          <p>
            Nutre tu cuerpo de manera inteligente y alcanza tus objetivos con un plan de alimentación especializado. Alcanza tus objetivos, desde el control de peso hasta enfermedades relacionadas con la alimentación.
          </p>
          <p>¿De qué manera nuestra nutrióloga te puede ayudar?</p>
          <p></p>
          <p>Te llevamos de la mano para lograr un mejor control sobre tu peso, con el fin de prevenir:
            <b> desnutrición, sobrepeso, obesidad </b> y otras enfermedades derivadas de estas dos. 
          </p>
          <p>Con apoyo de tu nutrióloga definirán una
            <b> meta para conseguir cambios en tus hábitos alimenticios. </b> Damos asesoramiento para llevar una alimentación adecuada. Lograrás el automanejo de tu alimentación y tener una buena calidad de vida.   
          </p>         
          <p>¿Qué ofrecemos?</p>
          <p></p>
          <p>Realizamos un
            <b>asesoramiento y el diseño de un plan alimenticio completo.</b> 
            Ideal para:  
          </p>    
          <p> 
              <ul>
                    <li>✦ Conseguir un <b>peso adecuado</b></li>
                    <li>✦ Evitar la recuperación del peso perdido</li>
                    <li>✦ Mejorar los <b>hábitos alimentarios</b></li>
                    <li>✦ Mejorar el estilo y calidad de vida</li>
              </ul>
          </p> 

         

        </div>

      <Footer/>
      </div>

    );
  }

export default AlimentacionSana;