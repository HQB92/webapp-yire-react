import React from 'react';
import { Container, Col } from 'react-bootstrap';
import Logo  from '../img/header-footer/logo-yire.png';

const Home = () =>{
    return(
        <Container fluid className="home h100 justify-content-md-center">
            <Col>
                <h1>Bienvenidos al Portal Intitucional YIRE</h1>
            </Col>
            <Col className="title_home" >
            <img
                    className="img-fluid"
                    alt=""
                    src={Logo}
                    width="350px"
                />
            </Col>
        </Container>
    )
}

export default Home;