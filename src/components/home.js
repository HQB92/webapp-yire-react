import React from 'react';
import { Container, Col } from 'react-bootstrap';
import Logo  from '../img/header-footer/logo-yire.png';

const Home = () =>{
    return(
        <Container fluid className="home h100 justify-content-md-center">
        <Col ><h1>Portal Intitucional YIRE</h1></Col>
        <Col><img
                alt=""
                src={Logo}
                width="39%"
                height="39%"/>
        </Col>
        </Container>
    )
}

export default Home;