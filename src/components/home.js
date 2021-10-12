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
        </Container>
    )
}

export default Home;