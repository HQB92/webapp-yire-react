import React, { useState } from 'react';
import { Form, Container, Button, Row, Col} from 'react-bootstrap';

const AsisAlumno= () =>{
    const [alumno, alumnoSeleccionado]=useState([]);

    const [rut, rutAlumno]= useState({
        rut:""
    });

    const rutChange=e=>{
        const{name, value}= e.target;
        rutAlumno((prevState)=>({
            ...prevState,
            [name]: value
        }))
    };
    return(
        <Container fluid="md" className="justify-content-md-center barra-login">
            <Row className="justify-content-md-center barra-login">
                <Col md="auto"> <h1>Asistencia Presencial a Clase Octubre</h1></Col>
            </Row>
            <Row >
                <Col xs={2} md={2}></Col>
                  <Col xs={8} md={8} >
                    <Form>

                        <Form.Group className="mb-5" >
                            <Form.Label>Ingresear Rut Alumno</Form.Label>
                            <Form.Control type="text" id="rut" name="rut" placeholder="11111111-1" onChange={rutChange}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" href="/asistencia/pregunta">
                            Ingresar
                        </Button>
                    </Form>
                </Col>
                <Col xs={4} md={2}></Col>
            </Row>
        </Container>
    )
}

export default AsisAlumno;