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
import Sidebar from './components/sidebar';
import TomarAsitencia from './components/tomarasistencia';
import ControlAsistenciaUsuarios from './components/controlAsisteciaUsuarios';
import ControlAsistenciaAlumnos from './components/controlAsisteciaAlumnos';
import HorarioLaboratorio from './components/horarioLaboratorio';
import SolicitarLaboratorio from './components/solicitarLaboratorio'
//import MatriculaProximoAño from './components/matriculaProximoAño';
import ConfirmacionMatricula from './components/confirmacionMatricula';
import Example from './components/ComponentToPrint';
import Example2 from './components/ComponentToPrint2';
import Inventario from './components/inventario';
function App() {
    var token = localStorage.getItem('data_token')
  return (
    <Container fluid className="body-panddin">
      <Router>
      {token !== null ?(<Header></Header>):<Navegacion></Navegacion>}
      {token !== null ?(<Sidebar></Sidebar>):''}
        <Switch>
          <Route exact path='/'>
            {token === null?<Login></Login>:<Home></Home>}
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/alumno/listar_presenciales'>
            <Presenciales></Presenciales>
          </Route>
          <Route path='/cambiar_pass'>
            <DatosPersonales></DatosPersonales>
          </Route>
          <Route path='/dispositivos'>
            <Dispositivos></Dispositivos>
          </Route>
          <Route path='/tomarasistencia'>
            <TomarAsitencia></TomarAsitencia>
          </Route>
          <Route path='/horario_ingreso'>
            <ControlAsistenciaUsuarios></ControlAsistenciaUsuarios>
          </Route>
          <Route path='/asistencia_alumnos'>
            <ControlAsistenciaAlumnos></ControlAsistenciaAlumnos>
          </Route>
          <Route path='/laboratorio'>
            <HorarioLaboratorio></HorarioLaboratorio>
          </Route>
          <Route path='/solicitar_laboratorio'>
            <SolicitarLaboratorio></SolicitarLaboratorio>
          </Route>
          <Route path='/matricular'>
            <Example></Example>
          </Route>
          <Route path='/matricular_nuevo'>
            <Example2></Example2>
          </Route>
          <Route path='/confirmacion_matricula'>
            <ConfirmacionMatricula></ConfirmacionMatricula>
          </Route>
          <Route path='/listar_inventario'>
            <Inventario></Inventario>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </Container>
  );
}

export default App;
