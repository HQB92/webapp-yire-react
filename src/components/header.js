import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import MenuIcon from '@material-ui/icons/Menu';
import  jwt from 'jwt-decode';
import HomeIcon from '@material-ui/icons/Home';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import VpnKeyIcon  from '@material-ui/icons/VpnKey';

const Header = () =>{
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
            window.location = './';
        }
    }, []);
    const logout = () => {
        localStorage.removeItem("data_token");
        localStorage.removeItem("expire_at");
    }
    return(
        <Container className="header"  >
            <Navbar className="div " collapseOnSelect expand="lg" fixed="top" >
            <div>{user.tipo_user === 'Administrador' ? <SupervisorAccountIcon style={{ fontSize: 40,marginRight:10}}></SupervisorAccountIcon>  : <LocalLibraryIcon style={{ fontSize: 60,marginRight:10}}></LocalLibraryIcon>}  {user.firstname}</div>
                    <Navbar.Toggle aria-controls="navbar-borde responsive-navbar-nav ">
                        <span><MenuIcon style={{ fontSize: 40 }}></MenuIcon></span>
                    </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav navbar-right navbar-borde " >
                    <Nav className="me-auto navbar-borde"></Nav>
                    <Nav className="navbar-right div navbar-borde ">
                        <Link className="navbar-right div" to="/home"><HomeIcon style={{ fontSize: 20,marginRight:7}}></HomeIcon>Inicio</Link>
                        <NavDropdown.Divider />
                        <Link className="navbar-right div" to="/cambiar_pass"><VpnKeyIcon style={{ fontSize: 20,marginRight:7}}></VpnKeyIcon>Contraseña </Link>
                        <Link className="navbar-right div" onClick={logout} to="/"><PowerSettingsNewIcon style={{ fontSize: 20,marginRight:7}}></PowerSettingsNewIcon>cerrar</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default Header;