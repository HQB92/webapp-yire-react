import React from 'react';
import { Form, Container, Button, Row, Col} from 'react-bootstrap';

const Login= () =>{
    return(
        <Container fluid>
            <Row className="justify-content-md-center barra-login">
                <Col md="auto"> <h1>Iniciar Sesión</h1></Col>
            </Row>

            <Row className="justify-content-md-center centrar-login">
                <Col md="md">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo electronico</Form.Label>
                            <Form.Control type="email" placeholder="Ingres su Correo..." />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña..." />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Iniciar Sesión
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;