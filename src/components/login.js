import React from 'react';
import { Form, Container, Button, Row, Col} from 'react-bootstrap';

const Login= () =>{
    return(
        <Container fluid="md" className="justify-content-md-center barra-login">
            <Row className="justify-content-md-center barra-login">
                <Col md="auto"> <h1>Iniciar Sesión</h1></Col>
            </Row>
            <Row >
                <Col xs={2} md={2}></Col>
                  <Col xs={8} md={8} >
                    <Form>
                        <Form.Group className="mb-4" >
                            <Form.Label>Correo electronico</Form.Label>
                            <Form.Control type="email" placeholder="Ingres su Correo..." />
                        </Form.Group>
                        <Form.Group className="mb-5" >
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña..." />
                        </Form.Group>
                        <Button variant="primary" type="submit" href="/home">
                            Iniciar Sesión
                        </Button>
                    </Form>
                </Col>
                <Col xs={4} md={2}></Col>
            </Row>
        </Container>
    )
}

export default Login;