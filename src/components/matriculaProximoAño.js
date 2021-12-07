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
                <Col lg={2}>
                    <InputGroup className="">
                        <InputGroup.Text id="">Sexo</InputGroup.Text>
                        <select className="form-select select_matricula" aria-label="Username"
                        aria-describedby="basic-addon1" name="curso" >
                            <option>Hombre</option>
                            <option>Mujer</option>
                        </select>
                    </InputGroup>
                </Col>
                <Col lg={3}>
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
                <Col lg={2}>
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
            </Row>
            <Row>
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
            <Row >
                
                <Col lg={3}>
                    <select className="form-select select_matricula" aria-label="Username"
                                aria-describedby="basic-addon1" name="curso" placeholder=''>
                        <option>Seleccione Persona a ingresar...</option>
                        <option>Padre</option>
                        <option>Madre</option>
                    </select>
                    </Col>
            </Row>
            <Row>
                <h5> Antecedentes Padre</h5>
                <Col lg={3}>
                    <InputGroup className="">
                        <InputGroup.Text id="">Rut</InputGroup.Text>
                            <FormControl
                            placeholder="..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="">
                        <InputGroup.Text id="">Nombre</InputGroup.Text>
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
                        <InputGroup.Text id="">Fecha de Nacimiento</InputGroup.Text>
                            <FormControl
                            placeholder="..."
                            aria-label="Username"
                            type='date'
                            aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                </Col>
                <Col lg={3}>
                    <InputGroup className="">
                        <InputGroup.Text id="">Teléfono</InputGroup.Text>
                            <FormControl
                            placeholder="..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="">
                        <InputGroup.Text id="">Nivel Educacional</InputGroup.Text>
                        <select className="form-select select_matricula" aria-label="Username"
                        aria-describedby="basic-addon1" name="curso" >
                            <option>Sin Estudio</option>
                            <option>Basica Incompleta</option>
                            <option>Basica Completa</option>
                            <option>Media Incompleta</option>
                            <option>Media Completa</option>
                            <option>Universitaria Incompleta</option>
                            <option>Universitaria Completa</option>
                        </select>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col lg={8}>
                    <InputGroup className="">
                    <InputGroup.Text id="">Ocupación</InputGroup.Text>
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
            <Row>
                <h5> Antecedentes Madre</h5>
                <Col lg={3}>
                    <InputGroup className="">
                        <InputGroup.Text id="">Rut</InputGroup.Text>
                            <FormControl
                            placeholder="..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="">
                        <InputGroup.Text id="">Nombre</InputGroup.Text>
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
                        <InputGroup.Text id="">Fecha de Nacimiento</InputGroup.Text>
                            <FormControl
                            placeholder="..."
                            aria-label="Username"
                            type='date'
                            aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                </Col>
                <Col lg={3}>
                    <InputGroup className="">
                        <InputGroup.Text id="">Teléfono</InputGroup.Text>
                            <FormControl
                            placeholder="..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="">
                        <InputGroup.Text id="">Nivel Educacional</InputGroup.Text>
                        <select className="form-select select_matricula" aria-label="Username"
                        aria-describedby="basic-addon1" name="curso" >
                            <option>Sin Estudio</option>
                            <option>Basica Incompleta</option>
                            <option>Basica Completa</option>
                            <option>Media Incompleta</option>
                            <option>Media Completa</option>
                            <option>Universitaria Incompleta</option>
                            <option>Universitaria Completa</option>
                        </select>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col lg={8}>
                    <InputGroup className="">
                    <InputGroup.Text id="">Ocupación</InputGroup.Text>
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
                    <h4>IV-. Apoderado(a) o Tutor(a)</h4>
            </Row>
            <Row>
                 <h5>Apoderado(a) Titular</h5>
                <Col lg={3}>
                    <InputGroup className="">
                        <InputGroup.Text id="">Rut</InputGroup.Text>
                            <FormControl
                            placeholder="..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="">
                        <InputGroup.Text id="">Nombre Completo</InputGroup.Text>
                            <FormControl
                            placeholder="..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
            <Col >
                    <InputGroup className="">
                        <InputGroup.Text id="">Domicilio</InputGroup.Text>
                            <FormControl
                            placeholder="..."
                            aria-label="Username"
                            type='date'
                            aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                </Col>
                <Col >
                    <InputGroup className="">
                        <InputGroup.Text id="">Teléfono</InputGroup.Text>
                            <FormControl
                            placeholder="..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                 <h5>Apoderado(a) Suplente</h5>
                <Col lg={3}>
                    <InputGroup className="">
                        <InputGroup.Text id="">Rut</InputGroup.Text>
                            <FormControl
                            placeholder="..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="">
                        <InputGroup.Text id="">Nombre Completo</InputGroup.Text>
                            <FormControl
                            placeholder="..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
            <Col >
                    <InputGroup className="">
                        <InputGroup.Text id="">Domicilio</InputGroup.Text>
                            <FormControl
                            placeholder="..."
                            aria-label="Username"
                            type='date'
                            aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                </Col>
                <Col >
                    <InputGroup className="">
                        <InputGroup.Text id="">Teléfono</InputGroup.Text>
                            <FormControl
                            placeholder="..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                 <h5>En caso de emergencia llamar a:</h5>
                 <Col lg={2}>
                    <InputGroup className="">
                        
                        <select className="form-select select_matricula" aria-label="Username"
                        aria-describedby="basic-addon1" name="curso" >
                            <option>Padre</option>
                            <option>Madre</option>
                            <option>Apoderado(a) Titular</option>
                            <option>Apoderado(a) Suplente</option>
                            <option>Otro</option>
                        </select>
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="">
                        <InputGroup.Text id="">Nombre</InputGroup.Text>
                            <FormControl
                            placeholder="..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                </Col>
                <Col lg={3}>
                    <InputGroup className="">
                        <InputGroup.Text id="">Teléfono</InputGroup.Text>
                            <FormControl
                            placeholder="..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                    </InputGroup>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h5>Anexo 1:</h5> 
                    <p>Apoderado(a) toma conocimiento y acepta, que en edificio de básica contamos con un sistema de 
                        tele monitoreo (cámaras) en salas y hall de pre- básica, además de dos cámaras instaladas en zona de recreos 
                        de básica, las que se sumaran a las cámaras ya instaladas en el edificio de media (oficinas, CRA, y sala de 
                        enlaces), lo anterior mencionado con el fin de resguardar el cuidado de nuestros niños y niñas.
                    </p>
                </Col>
                
            </Row>
            <Row>
                <Col>
                    <h5>Anexo 2:</h5> 
                    <p> Debido a la inclusión de las nuevas tecnologías y la utilización de medios virtuales, en el área
                        educativa, como Apoderado(a) y representante legal del Alumno(a), tomo conocimiento y autorizo el uso 
                        de imágenes y videos con fines educativos de los Alumnos y Alumnas, para que puedan ser publicados y 
                        difundidos en los diferentes canales de comunicación que el Establecimiento posee, como la agenda escolar, 
                        página web, colegio interactivo, redes sociales (CRA), pendones de información y promoción educativa. Etc.
                    </p>
                </Col>
                
            </Row>
            <Row>
                <Col>
                    <h2>_________________________</h2> 
                    <h3> Firma Apoderado</h3>
                </Col>
                
            </Row>
            

        </Container>
    )
}

export default MatriculaProximoAño;