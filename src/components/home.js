import React from 'react';
import { Container, Col } from 'react-bootstrap';
import Logo  from '../img/header-footer/logo-yire.png';

const Home = () =>{
    return(
        <Container fluid className="home h100 justify-content-md-center">
        <Col className="title_home" >
            <img
                className="img-fluid"
                alt=""
                src={Logo}
                 width="100px"   
                /><h1>Portal Intitucional YIRE</h1></Col>
        <Col>
        <div id="tiempo_26af593b6c47bfc5a5c07acc355bfc3c"> </div>
        <div> <img src="//www.tiempo.es/build/img/logo/tiempo133.png" width="80" height="18" alt="tiempo.es"/> </div>
        <div> {<script type="text/javascript" src="//www.tiempo.es/widload/es/ver/400/339/110/cl3894406/26af593b6c47bfc5a5c07acc355bfc3c.js"></script>} </div>
        </Col>
        </Container>
    )
}

export default Home;