import React from 'react';
import './../css/estilos.css';
import Header from './../componentes/Header';
import Footer from './../componentes/Footer';
import ImagenContacto from './../imagenes/contacto.png';


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
                  <h6>Envía un mensaje y nos pondremos en contacto contigo.  </h6>
              </div>
              <form>
                <div className="row">
                    <div className="col">
                      <input type="text" className="form-control" placeholder="Nombre" id="Nombre" />
                    </div>
                    <div className="col">
                      <input type="text" className="form-control" placeholder="Apellidos" id="Apellidos" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Correo</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" id="correo"/>
                </div>               
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Mensaje</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" onclick="validateInputs()">Enviar</button>
            </form>    
          </div>
        </div>
       <Footer/>
      </div>

    );
  }

export default Contacto;