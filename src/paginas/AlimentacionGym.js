import React from 'react';
import './../css/estilos.css';
import Navbar from './../componentes/Nav/Navbar';
import Footer from './../componentes/Footer';
import Imagengym from './../imagenes/alimentacion-gym.jpg';


  function AlimentacionGym(){
    return(
      <div>
        <Navbar />          
            <div className="wrapper">
                <section  className="contenido">
                  <img src={Imagengym} />
                </section>
            </div>     
            <div className="wrapper">
              <h2  align="center" >Nutrióloga Deportiva</h2>
              <p></p>
              <p >Cubre tus requerimientos de nutrientes e hidratación para llevar a cabo tu actividad física.<br></br>
               Brindamos planes de alimentación para  deportistas.
              </p>
              <p></p>
              <p> ∘ Acompañamiento nutricional </p>
              <p> ∘ Alimentación enfocada a tus objetivos</p>           
              <p> ∘ Plan personalizado de alimentación semanal para  </p>
              <p> 
                <ul>
                    <li> &nbsp;&nbsp;❁ entrenamiento</li>
                    <li> &nbsp;&nbsp;❁ competencia</li>
                    <li> &nbsp;&nbsp;❁ recuperación</li>
                </ul>
              </p>
              <p> ∘ Control de composición corporal, hidratación y calidad celular</p>
            

          </div>  
        <Footer/>
      </div>

    );
  }

export default AlimentacionGym;