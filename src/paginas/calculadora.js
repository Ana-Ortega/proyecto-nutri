import React from 'react';

import './../css/estilos.css';

import Header from './../componentes/Header';

import Footer from './../componentes/Footer';

import ImagenAlimentacion from './../imagenes/alimentacion-gym.jpg';

import 'bootstrap/dist/css/bootstrap.css';



  function Calculadora(){
    return(
      <div>

        <Header/>
        <div className="wrapper">
          <section  className="contenido">
            <img src={ImagenAlimentacion} />
          </section>
        </div>

        <div className="wrapper">
            <h3 className=""> </h3>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-9">
                  <div className="card my-5 bg-light text-center">



                          <div className="card-header">
                            <h1>CONTADOR DE CALORIAS</h1>
                          </div>
                          <div className="card-body">
                            <table className="table table-hover">
                                <thead>
                                  <tr>
                                    <th scope="col">Descripcion</th>
                                    <th scope="col">Calorias</th>
                                    <th scope="col">Carbohidratos</th>
                                    <th scope="col">Proteinas</th>
                                    <th></th>
                                  </tr>
                                </thead>
                                <tbody>
                                </tbody>
                                <thead className="thead-light">
                                  <tr>
                                    <th>Total</th>
                                    <th id="totalCalories">0</th>
                                    <th id="totalCarbs">0</th>
                                    <th id="totalProtein">0</th>
                                    <th></th>
                                  </tr>
                                </thead>
                            </table>
                          </div>


                          <div className="card-footer">
                            <div className="row mb-2">
                              <div className="col">                     
                                  <input type="text" className="form-control mb-2 mr-sm-2" id="description" placeholder="Descripcion"/>
                              </div>
                              <div className="col">
                                  <input type="number" min="0" className="form-control mb-2 mr-sm-2" id="calories" placeholder="Calorias"/>
                              </div>
                              <div className="col">
                                  <input type="number" min="0" className="form-control mb-2 mr-sm-2" id="carbs" placeholder="Carbohidratos"/>
                              </div>
                              <div className="col">
                                  <input type="number" min="0" className="form-control mb-2 mr-sm-2" id="protein" placeholder="Proteinas"/>
                              </div>
                              <div className="col">
                                  <button className="btn btn-primary mb-2" onclick="validateInputs()">
                                    <i className="fas fa-plus"> + </i>
                                  </button>
                              </div>
                            </div>
                          </div>



                  </div>
                </div>
              </div>
            </div>
          </div>

        <Footer/>

      </div>

    );
  }

export default Calculadora;