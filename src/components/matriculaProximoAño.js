import React from 'react';
import { Container, Col, Row,InputGroup, FormControl } from 'react-bootstrap';
import Logo  from '../img/header-footer/logo-yire.png';

const MatriculaProximoAño = () =>{
    return(
        <Container fluid className="home h100 justify-content-md-center">
            <Row>
                <Col className="matricula" >
                    <Col xs={1} md={2}>
                    <img
                            className="img-fluid start"
                            alt=""
                            src={Logo}
                            width="70px"
                        />
                    </Col>
                    <Col>
                    <h2>Ficha Matricula 2022</h2> 
                    </Col>
                    <Col xs={1} md={3} >
                        <InputGroup className="">
                            <InputGroup.Text id="">N°</InputGroup.Text>
                                <FormControl
                                placeholder="Matricula"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                />
                        </InputGroup>
                        <InputGroup className="">
                            <InputGroup.Text id="">Curso</InputGroup.Text>
                            <select className="form-select select_matricula" aria-label="Username"
                                aria-describedby="basic-addon1" name="curso" >
                                <option>PREKINDER</option>
                                <option>KINDER</option>
                                <option>1 BASICO</option>
                                <option>2 BASICO</option>
                                <option>3 BASICO</option>
                                <option>4 BASICO</option>
                                <option>5 BASICO</option>
                                <option>6 BASICO</option>
                                <option>7 BASICO</option>
                                <option>8 BASICO</option>
                                <option>1 MEDIO</option>
                                <option>2 MEDIO</option>
                                <option>3 MEDIO A TP</option>
                                <option>3 MEDIO B HC</option>
                                <option>4 MEDIO A TP</option>
                                <option>4 MEDIO B HC</option>
                            </select>
                        </InputGroup>
                    </Col>
                </Col>
            </Row>
            <Row >
                    <h4> I-. Datos Personales</h4>
            </Row>
            <Row>
                <Col>
                    <InputGroup className="">
                        <InputGroup.Text id="">Apellido Paterno</InputGroup.Text>
                            <FormControl
                            placeholder="..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="">
                    <InputGroup.Text id="">Apellido Materno</InputGroup.Text>
                        <FormControl
                        placeholder="..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <InputGroup className="">
                    <InputGroup.Text id="">Nombres</InputGroup.Text>
                        <FormControl
                        placeholder="..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                </InputGroup>
            </Row>
            <Row>
                <Col>
                    <InputGroup className="">
                        <InputGroup.Text id="">Sexo</InputGroup.Text>
                        <select className="form-select select_matricula" aria-label="Username"
                        aria-describedby="basic-addon1" name="curso" >
                            <option>Hombre</option>
                            <option>Mujer</option>
                        </select>
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="">
                    <InputGroup.Text id="">RUN</InputGroup.Text>
                        <FormControl
                        placeholder="..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="">
                    <InputGroup.Text id="">Fecha Nacimeinto</InputGroup.Text>
                        <FormControl
                        placeholder="..."
                        aria-label="Username"
                        type='date'
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="">
                    <InputGroup.Text id="">Edad</InputGroup.Text>
                        <FormControl
                        placeholder="..."
                        aria-label="Username"
                        type='number'
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col lg={8}>
                    <InputGroup className="">
                    <InputGroup.Text id="">Dirección</InputGroup.Text>
                        <FormControl
                        placeholder="..."
                        aria-label="Username"
                        type='text'
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="">
                    <InputGroup.Text id="">Comuna</InputGroup.Text>
                        <FormControl
                        placeholder="..."
                        aria-label="Username"
                        type='text'
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col >
                    <InputGroup className="">
                    <InputGroup.Text id="">Tiene o ha tenido alguna enfermedad crónica</InputGroup.Text>
                        <FormControl
                        placeholder="..."
                        aria-label="Username"
                        type='text'
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col >
                    <InputGroup className="">
                    <InputGroup.Text id="">Tiene algún medicamento o tratamiento especifico</InputGroup.Text>
                        <FormControl
                        placeholder="..."
                        aria-label="Username"
                        type='text'
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
                <Col >
                    <InputGroup className="">
                    <InputGroup.Text id="">Es alérgico</InputGroup.Text>
                        <FormControl
                        placeholder="..."
                        aria-label="Username"
                        type='text'
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row >
                    <h4> II-. Antecedentes Escolares</h4>
            </Row>
            <Row>
                <Col>
                    <InputGroup className="">
                        <InputGroup.Text id="">Establecimiento de Procedencia</InputGroup.Text>
                            <FormControl
                            placeholder="..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col lg={3}>
                    <InputGroup className="">
                        <InputGroup.Text id="">Fecha de Ingreso</InputGroup.Text>
                            <FormControl
                            placeholder="..."
                            aria-label="Username"
                            type='date'
                            aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                </Col>

            </Row>
            <Row>
                <Col>
                    <InputGroup className="">
                        <InputGroup.Text id="">Necesidades especificas del aprendizaje</InputGroup.Text>
                            <FormControl
                            placeholder="..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="">
                    <InputGroup.Text id="">Diagnostico</InputGroup.Text>
                        <FormControl
                        placeholder="..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col lg={8}>
                    <InputGroup className="">
                    <InputGroup.Text id="">Curso que ha repetido</InputGroup.Text>
                        <FormControl
                        placeholder="..."
                        aria-label="Username"
                        type='text'
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="">
                    <InputGroup.Text id="">Causales</InputGroup.Text>
                        <FormControl
                        placeholder="..."
                        aria-label="Username"
                        type='text'
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row >
                    <h4>III-. Antecedentes Familiares</h4>
            </Row>
            <Row>
                <Col>
                    <InputGroup className="">
                        <InputGroup.Text id="">Nombre del Padre</InputGroup.Text>
                            <FormControl
                            placeholder="..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="">
                        <InputGroup.Text id="">Nombre de la Madre</InputGroup.Text>
                            <FormControl
                            placeholder="..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col lg={3}>
                    <InputGroup className="">
                        <InputGroup.Text id="">Fecha de Ingreso</InputGroup.Text>
                            <FormControl
                            placeholder="..."
                            aria-label="Username"
                            type='date'
                            aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                </Col>

            </Row>
            <Row>
                <Col>
                    <InputGroup className="">
                        <InputGroup.Text id="">Necesidades especificas del aprendizaje</InputGroup.Text>
                            <FormControl
                            placeholder="..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="">
                    <InputGroup.Text id="">Diagnostico</InputGroup.Text>
                        <FormControl
                        placeholder="..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col lg={8}>
                    <InputGroup className="">
                    <InputGroup.Text id="">Curso que ha repetido</InputGroup.Text>
                        <FormControl
                        placeholder="..."
                        aria-label="Username"
                        type='text'
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="">
                    <InputGroup.Text id="">Causales</InputGroup.Text>
                        <FormControl
                        placeholder="..."
                        aria-label="Username"
                        type='text'
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
            </Row>

        </Container>
    )
}

export default MatriculaProximoAño;