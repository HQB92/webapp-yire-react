import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/footer';
import Login from './components/login';
import { Container } from 'react-bootstrap';
import Header from './components/header';
import Home from './components/home';
import Presenciales from './components/presensiales';
import Navegacion from './components/navegacion';
import DatosPersonales from './components/datosPersonales';
import Dispositivos from './components/dispositivos';

function App() {
  var token = localStorage.getItem('data_token')
  if (token === null ){
      return(
      <Container fluid className="body-panddin">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Navegacion></Navegacion>
            <Login></Login>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </Container>
      )
  }else{
    return (
      <Container fluid className="body-panddin">
        <Router>
        <Header></Header>
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/presenciales'>
              <Presenciales></Presenciales>
            </Route>
            <Route path='/cambiar_pass'>
              <DatosPersonales></DatosPersonales>
            </Route>
            <Route path='/dispositivos'>
              <Dispositivos></Dispositivos>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </Container>
    );
  }
}

export default App;
