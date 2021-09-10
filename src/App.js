import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/footer';
import Login from './components/login';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container fluid className="body-panddin">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login></Login>
          </Route>
          <Route path='*'>
            error404
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </Container>
  );
}

export default App;
