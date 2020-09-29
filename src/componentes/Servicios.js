import React from 'react';
import './../css/estilos.css';
import {Link} from 'react-router-dom';

import ImagenAlimentos from './../imagenes/servicio_alimentos_blanco.png';
import ImagenReceta from './../imagenes/servicio_receta_blanco.png';
import ImagenBalance from './../imagenes/servicio_balance_blanco.png';
import ImagenPlato from './../imagenes/servicio_plato_blanco.png';


  function Servicios(){
    return(
      <div>
        
        <div className="wrapper">  
              <div className="servicio-list">
                <article className="servicio">
                  <figure className="servicio-imageConteiner">
                    <img className="servicio-image" src={ImagenAlimentos}/>
                  </figure>
                  <div className="servicio-detail">
                    <h5 className="servicio-title">Alimentación Sana</h5>
                    <p className="servicio-description">No busques una dieta que terminará algún día... comienza un estilo de vida saludable que dure para siempre</p>
                    <a className="servicio-url"><Link to="/alimentacionsana">Ver</Link> </a>
                  </div>
                </article>
                <article className="servicio">
                  <figure className="servicio-imageConteiner">
                    <img className="servicio-image" src={ImagenBalance} />
                  </figure>
                  <div className="servicio-detail">
                    <h5 className="servicio-title">Nutrición en Embarazo y Lactancia</h5>
                    <p className="servicio-description">Los nueve meses de embarazo representan el periodo más intenso de crecimiento y desarollo humano.</p>
                    <a className="servicio-url"><Link to="/alimentacionembarazo">Ver</Link></a>
                  </div>
                </article>
                <article className="servicio">
                  <figure className="servicio-imageConteiner">
                    <img className="servicio-image" src={ImagenReceta} />
                  </figure>
                  <div className="servicio-detail">
                    <h5 className="servicio-title">Alimentación en Adultos Mayores</h5>
                    <p className="servicio-description">Una dieta  adecuada que le permita desarrollar sus actividades diarias y salud optimas.</p>
                    <a className="servicio-url"><Link to="/alimentacionAdulto">Ver</Link></a>
                  </div>
                </article>
                <article className="servicio">
                  <figure className="servicio-imageConteiner">
                    <img className="servicio-image" src={ImagenPlato} />
                  </figure>
                  <div className="servicio-detail">
                    <h5 className="servicio-title">Ejercicio</h5>
                    <p className="servicio-description">¿Ya tienes tiempo en el gimnasio y no ha logrado sus objetivos?, logra un mejor rendimiento deportivo mediante la alimentación. </p>
                    <a className="servicio-url" ><Link to="/alimentacionGym">Ver</Link></a>
                  </div>
                </article>
              </div>
            </div>




      </div>

    );
  }

export default Servicios;