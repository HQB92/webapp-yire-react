import React from 'react';
import Logo  from '../img/header-footer/logo-yire.png';
import {Navbar, Container} from 'react-bootstrap';

const Navegacion= () =>{
    return(
        <Container className="header_login">
            <Navbar  className="header_login" collapseOnSelect expand="lg" fixed="top" >
                    <Navbar.Brand href="/" >
                    <img
                        alt=""
                        src={Logo}
                        width="100px"
                        height="100px" />
                    </Navbar.Brand>
                            <p>Corporación Educacional YIRE</p>
            </Navbar>
        </Container>
    )
}

export default Navegacion;