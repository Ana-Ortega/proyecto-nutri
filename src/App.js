import React from 'react';
import {BrowserRouter, Link, Switch, Route, Redirect} from 'react-router-dom';
import Principal from  './paginas/Principal';
import Cita from './paginas/Cita';
import Nutriologa from './paginas/Nutriologa';
import Contacto from './paginas/Contacto';
import AlimentacionSana from './paginas/AlimentacionSana';
import AlimentacionEmbarazo from './paginas/AlimentacionEmbarazo';
import AlimentacionGym from './paginas/AlimentacionGym';
import AlimentacionAdultoMAyor from './paginas/AlimentacionAdultoMayor';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Redirect
          from="/"
          to="/principal"/>
      <switch>
       
        <Route exact path="/principal" component={Principal}/>
        <Route exact path="/cita" component={Cita}/>
        <Route exact path="/nutriologa" component={Nutriologa}/>
        <Route exact path="/contacto" component={Contacto}/>
        <Route exact path="/alimentacionsana" component={AlimentacionSana}/>
        <Route exact path="/alimentacionembarazo" component={AlimentacionEmbarazo}/>
        <Route exact path="/alimentacionGym" component={AlimentacionGym}/>
        <Route exact path="/alimentacionAdulto" component={AlimentacionAdultoMAyor}/>

      </switch>
    
    </BrowserRouter>

  </div>
  );
}

export default App;
