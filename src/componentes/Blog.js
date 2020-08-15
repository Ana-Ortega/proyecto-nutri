import React from 'react';
import {Link} from 'react-router-dom';
import './../css/estilos.css';
import Imagencoco from './../imagenes/aceite-de-coco-propiedades.jpg';
import Imagencarbohidratos from './../imagenes/carbohidratos-malos.jpg';
import Imagencolesterol from './../imagenes/colesterol-bueno-malo.jpg';

import 'bootstrap/dist/css/bootstrap.css';

  function Blog(){
    const style = {width: '18rem'};

    return(
      
      <div>     
              <div className="wrapper">
                <section id="articulos" className="articulos">
                  <p className="text-center mt-5 bd-content-title subtitle-shadow"></p>
                  <div className="container mt-5">
                    <div className="row">
                      
                      <div className="col-sm">
                        <div className="card" style={style}>
                          <img src={Imagencoco} className="card-img-top"/>
                          <div className="card-body">
                              <h5 className="card-title">Aceite de coco</h5>
                              <p className="card-text">
                                El aceite de coco ¿es tan beneficioso como dicen? 
                              </p>
                              <a href="https://www.barnaclinic.com/blog/nutricion/aceite-de-coco/" target="_blank" className="btn btn-outline-primary">¡Descubrelo!</a>
                          </div>
                        </div>
                      </div>
 
                      <div class="col-sm">
                        <div class="card" style={style}>
                          <img src={Imagencarbohidratos}  class="card-img-top" />
                          <div class="card-body">
                            <h5 class="card-title">Carbohidratos</h5>
                            <p class="card-text">
                              ¿Por qué los carbohidratos son siempre los malos de la película?
                            </p> 
                            <a href="https://www.barnaclinic.com/blog/nutricion/?s=carbohidratos&submit=Buscar&lang=es" target="_blank" class="btn btn-outline-primary" >¡Descubrelo!</a>
                          </div>
                        </div>
                      </div>
   
                      <div class="col-sm">
                        <div class="card" style={style}>
                          <img src={Imagencarbohidratos} class="card-img-top"/>
                          <div class="card-body">
                            <h5 class="card-title">Alimentacion</h5>
                            <p class="card-text">
                              Cómo mantener a raya el colesterol
                            </p>
                            <a href="https://www.barnaclinic.com/blog/nutricion/colesterol/" target="_blank" class="btn btn-outline-primary"  >¡Descubrelo!</a>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="link-blog">
                      <a className="" href="https://www.barnaclinic.com/blog/nutricion/" target="_blank"  > mas articulos ...</a>
                    </div>
                  </div> 
                </section>
              </div>

      </div>
    );
  }

export default Blog;