import React from 'react';
import { Container, Button, Row, Col} from 'react-bootstrap';

const Pregunta= () =>{
    return(
        <Container fluid="md" className="justify-content-md-center barra-login">
            <Row className="justify-content-md-center barra-login">
                <Col md="auto"> <h2>Asistencia Presencial a Clase</h2></Col>
            </Row>
            <Row className="justify-content-md-center ">
                <Col md="auto"> <h4>¿El Alumno asistira presencialmente al establecimiento?</h4></Col>
            </Row>
            <Row >
                <Col xs={2} md={2}></Col>
                  <Col xs={4} md={4} >
                        <Button variant="primary"  href="/app/">
                            SI
                        </Button>
                </Col>
                <Col xs={4} md={4} >
                        <Button variant="secondary"  href="/app/">
                            NO
                        </Button>
                </Col>
                <Col xs={2} md={2}></Col>
            </Row>
        </Container>
    )
}

export default Pregunta;