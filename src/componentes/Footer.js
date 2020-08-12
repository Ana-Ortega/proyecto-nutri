import React from 'react';
import './../css/estilos.css';
import barra from './../imagenes/barra-saludable_pequeña.jpg';



  function Footer(){
    return(
      <div>
      <div className="footer">
          <img src={barra} />
          <div className="social"> 
            <a href="https://twitter.com" className="social-link twitter" target="_blank" ></a>
            <a href="https://facebook.com" className="social-link facebook" target="_blank" ></a>
            <a href="https://youtube.com" className="social-link youtube" target="_blank" ></a>
            <a href="https://linkedin.com" className="social-link linkedin" target="_blank" ></a>
          </div>
        </div>
      </div>        


    );
  }

export default Footer;