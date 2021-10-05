import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/footer';
import Login from './components/login';
import { Container } from 'react-bootstrap';
import Header from './components/header';
import Home from './components/home';
import Presenciales from './components/presensiales';
import Navegacion from './components/navegacion';


function App() {
  return (
    <Container fluid className="body-panddin">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Navegacion></Navegacion>
            <Login></Login>
          </Route>
          <Route path='/home'>
            <Header></Header>
            <Home></Home>
          </Route>
          <Route path='/presenciales'>
            
            <Presenciales></Presenciales>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </Container>
  );
}

export default App;
