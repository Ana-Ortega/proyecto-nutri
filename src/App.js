import React from 'react';
import {BrowserRouter, Link, Switch, Route, Redirect} from 'react-router-dom';
import Principal from  './paginas/Principal';
import Cita from './paginas/Cita';
import Nutriologa from './paginas/Nutriologa';
import Contacto from './paginas/Contacto';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Redirect
          from="/"
          to="/principal" />
      <switch>
       
        <Route exact path="/principal" component={Principal}/>
        <Route exact path="/cita" component={Cita}/>
        <Route exact path="/nutriologa" component={Nutriologa}/>
        <Route exact path="/contacto" component={Contacto}/>
        
      </switch>
    
    </BrowserRouter>

  </div>
  );
}

export default App;
