import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/footer';
import Login from './components/login';
import { Container } from 'react-bootstrap';
import Header from './components/header';
import Home from './components/home';
import AsisAlumno from './components/asis-alumno';
import Pregunta from './components/preguntaAsistencia';
import Presenciales from './components/presensiales';

function App() {
  return (
    <Container fluid className="body-panddin">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login></Login>
          </Route>
          <Route path='/home'>
            <Header></Header>
            <Home></Home>
          </Route>
          <Route path='/presenciales'>
            <Header></Header>
            <Presenciales></Presenciales>
          </Route>
          <Route path='/asistira'>
              <AsisAlumno></AsisAlumno>
          </Route>
          <Route path='/asistencia/pregunta'>
              <Pregunta></Pregunta>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </Container>
  );
}

export default App;
