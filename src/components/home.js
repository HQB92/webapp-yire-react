import React, { useEffect,useState }  from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ListAltIcon from '@material-ui/icons/ListAlt';
import FaceIcon from '@material-ui/icons/Face';
import DateRangeIcon from '@material-ui/icons/DateRange';
import SettingsInputHdmiIcon from '@material-ui/icons/SettingsInputHdmi';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import  jwt from 'jwt-decode';

const Home = () =>{
    const [user, setUser]=useState({
        id:'',
        firstname:'',
        lastname:'',
        email:'',
        tipo_user:''
    });
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
        }else{
            localStorage.removeItem("data_token");
            localStorage.removeItem("expire_at");
            window.location = './';
        }
    }, []);
    return(
        <Container fluid className="home h100 justify-content-md-center">
            <Row xs="auto">
                <Col className="icon-tam">
                    <a  href="/presenciales">
                        <ListAltIcon style={{ fontSize: 80}}></ListAltIcon>
                        <h6>Alumnos Presenciales</h6>
                    </a>
                </Col>
                {user.tipo_user === 'Administrador' ? <Col className="icon-tam">
                    <a  href="/dispositivos">
                        <AddShoppingCartIcon style={{ fontSize: 80}}></AddShoppingCartIcon>
                        <h6>Dispositivos</h6>
                    </a>
                </Col> : ""}
                {user.tipo_user === 'Administrador' ?<Col className="icon-tam">
                        <FaceIcon color="disabled" style={{ fontSize: 80 }}></FaceIcon>
                        <h6>Control T°</h6>
                </Col>: ""}
                <Col className="icon-tam">
                        <DateRangeIcon color="disabled" style={{ fontSize: 80 }}></DateRangeIcon>
                        <h6>Solicitar Laboratorio</h6>
                </Col>
                <Col className="icon-tam">
                        <SettingsInputHdmiIcon color="disabled" style={{ fontSize: 80 }}></SettingsInputHdmiIcon>
                        <h6>Solicitar Dispositivo</h6>
                </Col>
                {user.tipo_user === 'Administrador' ?<Col className="icon-tam">
                        <NoteAddIcon color="disabled" style={{ fontSize: 80 }}></NoteAddIcon>
                        <h6>Nueva Noticia</h6>
                </Col>: ""}
                {user.tipo_user === 'Administrador' ?<Col className="icon-tam">
                        <ViewCarouselIcon color="disabled" style={{ fontSize: 80 }}></ViewCarouselIcon>
                        <h6>Imagenes</h6>
                </Col>: ""}
            </Row>
        </Container>
    )
}

export default Home;