import React from 'react';
import './../css/estilos.css';

import Helmet from "react-helmet";
import {Link} from 'react-router-dom';

  function Header(){
    return(
      <div>
      <header class="header"> 
        <div className="wrapper">
        <div className="menu_bar">
          <a href="#" className="bt-menu"> <span className="icon-menu"></span>NUTRIOLOGA</a>
        </div>
        <div className="logo"> NUTRIOLOGA </div>
          <nav>
              <a><Link to="/cita">Cita</Link></a>
              <a><Link to="/contacto">Contacto</Link></a>
              <a><Link to="/nutriologa">Nutriologa</Link></a>
              <a><Link to="/principal">Principal</Link></a>


{/*            <ul>
              <li>
                <Link to="/cita">Cita</Link>
              </li>
              <li>
                <Link to="/contacto">Contacto</Link>
              </li>
              <li>
                <Link to="/nutriologa">Nutriologa</Link>
              </li>
              <li>
                <Link to="/principal">Principal</Link>
              </li>
            </ul>  */}
          </nav>
        </div>
        </header>
 



      </div>

    );
  }


export default Header;