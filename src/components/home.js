import React, { useEffect,useState }  from 'react';
import {Link} from 'react-router-dom';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import SettingsInputHdmiIcon from '@material-ui/icons/SettingsInputHdmi';
import WebIcon from '@material-ui/icons//Web';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import  jwt from 'jwt-decode';

const Home = () =>{
    const [user, setUser]=useState({
        id:'',
        firstname:'',
        lastname:'',
        email:'',
        tipo_user:''
    });
    const [perfil, SetPerfil]=useState(false)
    var token = localStorage.getItem('data_token')
    if (token === null ){
        window.location = './';
    }
    var token_exp = parseInt(localStorage.getItem('expire_at'));
    const desencrip = jwt(JSON.parse(token));
    var  today = new Date();
    const hor=today.getHours();
    const min=today.getMinutes();
    const time=hor+""+min;
    useEffect(() => {
        if(time <= token_exp ){
            setUser(desencrip.data);
            if(user.tipo_user === "Administrador"){
                SetPerfil(true);
            }
        }else{
            localStorage.removeItem("data_token");
            localStorage.removeItem("expire_at");
            window.location = './';
        }
        // eslint-disable-next-line
    },[]);
    useEffect(() => {
        if(user.tipo_user === "Administrador"){
            SetPerfil(true);
        }
    },[user]);
    return(
        <Container fluid className="home h100 justify-content-md-center">
        <Col >   <h1>Aplicaciones</h1></Col>
            <Row xs="auto" className="justify-content-center">
                <Col>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1" className="">
                            <Accordion.Header className="" ><AccountCircleIcon  style={{ fontSize: 80}}></AccountCircleIcon> <p>Personal</p></Accordion.Header>
                            <Accordion.Body className="icon-tam2 ">
                                <Col className="icon-tam2">
                                        <Link to={perfil ? '/link-to-route' : '#'} className={perfil ? '' : 'desactivar'}>• Agregar Usuario</Link>
                                </Col>
                                <Col className="icon-tam2 justify-content-md-center">
                                        <Link to={perfil ? '/link-to-route' : '#'} className={perfil ? '' : 'desactivar'}>• Editar o Eliminar</Link>
                                </Col>
                                <Col className="icon-tam2 justify-content-md-center">
                                        <Link to="/home">• Listar Usuarios</Link>
                                </Col>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1" className="">
                            <Accordion.Header className="" ><PersonIcon style={{ fontSize: 80}}></PersonIcon> <p>Alumnos</p></Accordion.Header>
                            <Accordion.Body className="icon-tam2 ">
                                <Col className="icon-tam2">
                                        <Link to={perfil ? '/link-to-route' : '#'} className={perfil ? '' : 'desactivar'}>• Agregar Alumno</Link>
                                </Col>
                                <Col className="icon-tam2 justify-content-md-center">
                                        <Link to={perfil ? '/link-to-route' : '#'} className={perfil ? '' : 'desactivar'}>• Editar o Eliminar</Link>
                                </Col>
                                <Col className="icon-tam2 justify-content-md-center">
                                        <Link to="/home">• Listar por Curso </Link>
                                </Col>
                                <Col className="icon-tam2 justify-content-md-center">
                                        <Link to="/presenciales">• Listar Presenciales</Link>
                                </Col>
                                <Col className="icon-tam2 justify-content-md-center">
                                    <Link to={perfil ? '/link-to-route' : '#'} className={perfil ? '' : 'desactivar'}>• Editar Respuesta</Link>
                                </Col>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1" className="">
                            <Accordion.Header className="" ><FormatListNumberedIcon style={{ fontSize: 80}}></FormatListNumberedIcon> <p>Asistencia</p></Accordion.Header>
                            <Accordion.Body className="icon-tam2 ">
                                <Col className="icon-tam2">
                                        <Link to="/home">• Ingresar Asistencia</Link>
                                </Col>
                                <Col className="icon-tam2 justify-content-md-center">
                                        <Link to={perfil ? '/link-to-route' : '#'} className={perfil ? '' : 'desactivar'}>• Editar Asistencia</Link>
                                </Col>
                                <Col className="icon-tam2 justify-content-md-center">
                                        <Link to="/home">• Asistencia por Curso </Link>
                                </Col>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1" className="">
                            <Accordion.Header className="" ><SettingsInputHdmiIcon style={{ fontSize: 80}}></SettingsInputHdmiIcon> <p>Dispositivos</p></Accordion.Header>
                            <Accordion.Body className="icon-tam2 ">
                                <Col className="icon-tam2">
                                        <Link to={perfil ? '/dispositivos' : '#'} className={perfil ? '' : 'desactivar'}>• Agregar Dispositivo</Link>
                                </Col>
                                <Col className="icon-tam2 justify-content-md-center">
                                        <Link to={perfil ? '/disposasasaitivos' : '#'} className={perfil ? '' : 'desactivar'}>• Editar o Eliminar</Link>
                                </Col>
                                <Col className="icon-tam2 justify-content-md-center">
                                        <Link to="/home">• Solicitar Dispositivo </Link>
                                </Col>
                                <Col className="icon-tam2 justify-content-md-center">
                                        <Link to="/home">• Listar Disponibles</Link>
                                </Col>
                                <Col className="icon-tam2 justify-content-md-center">
                                    <Link to={perfil ? '/asdasda' : '#'} className={perfil ? '' : 'desactivar'}>• Listar No Entregados</Link>
                                </Col>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1" className="">
                            <Accordion.Header className="" ><DesktopMacIcon style={{ fontSize: 80}}></DesktopMacIcon> <p>Laboratorio</p></Accordion.Header>
                            <Accordion.Body className="icon-tam2 ">
                                <Col className="icon-tam2">
                                        <Link to="/home">• Solicitar Laboratorio</Link>
                                </Col>
                                <Col className="icon-tam2">
                                        <Link to={perfil ? '/disposaaitivos' : '#'} className={perfil ? '' : 'desactivar'}>• Editar Solicitud</Link>
                                </Col>
                                <Col className="icon-tam2 justify-content-md-center">
                                        <Link to="/home">• Calendario </Link>
                                </Col>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1" className="">
                            <Accordion.Header className="" ><WebIcon color={perfil ?"inherit":"disabled"} style={{ fontSize: 80}}></WebIcon> <p>Pagina Web</p></Accordion.Header>
                            <Accordion.Body className="icon-tam2 ">
                                <Col className="icon-tam2">
                                        <Link to={perfil ? '/disposaaitivos' : '#'} className={perfil ? '' : 'desactivar'}>• Nueva Noticia</Link>
                                </Col>
                                <Col className="icon-tam2">
                                        <Link to={perfil ? '/disposaaitivos' : '#'} className={perfil ? '' : 'desactivar'}>• Eliminar Noticia</Link>
                                </Col>
                                <Col className="icon-tam2 justify-content-md-center">
                                        <Link to={perfil ? '/disposaaitivos' : '#'} className={perfil ? '' : 'desactivar'}>• Nueva Imagen </Link>
                                </Col>
                                <Col className="icon-tam2 justify-content-md-center">
                                        <Link to={perfil ? '/disposaaitivos' : '#'} className={perfil ? '' : 'desactivar'}>• Eliminar Imagen </Link>
                                </Col>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1" className="">
                            <Accordion.Header className="" ><SettingsIcon style={{ fontSize: 80}}></SettingsIcon> <p>Configuraciones</p></Accordion.Header>
                            <Accordion.Body className="icon-tam2 ">
                                <Col className="icon-tam2">
                                        <Link to="/home">• Editar Mis Datos</Link>
                                </Col>
                                <Col className="icon-tam2">
                                        <Link to="/cambiar_pass">• Cambiar Contraseña</Link>
                                </Col>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;