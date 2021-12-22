import React, { useState } from 'react';
import { Container, Col, Row,InputGroup, FormControl,Button,  Form } from 'react-bootstrap';
import Logo  from '../img/header-footer/logo-yire.png';


export const MatriculaProximoAño = React.forwardRef((props, ref) =>{
    const [datosGenera, setDatosGenera]=useState({
        rut:'' ,
        nombre_alumno:'' ,
        apellidoP_alumno:'' ,
        apellidoM_alumno:'' ,
        Sexo:'',
        fechaNacimiento_alumno:'' ,
        edad_alumno:'' ,
        direccion_alumno : '' ,
        comuna : '' ,
        enfermedad_cronica : '' ,
        medicamento_tratamiento : '' ,
        alergico : '' ,
        establecimineto_procedencia : '' ,
        fecha_ingreso_establecimineto : '' ,
        pie : '' ,
        curso_repetido : '' ,
        causlaes_repetir : '' ,
        rut_padre : '' ,
        nombreCompleto_padre : '' ,
        fechaNacimiento_padre : '' ,
        telefono_padre : '' ,
        estudios_padre : '' ,
        ocupacion_padre : '' ,
        rut_madre : '' ,
        nombreCompleto_madre : '' ,
        fechaNacimiento_madre : '' ,
        telefono_madre : '' ,
        estudios_madre : '' ,
        ocupacion_madre : '' ,
        rut_titular : '' ,
        nombreCompleo_titular : '' ,
        domicilio_titular : '' ,
        telefono_titular : '' ,
        rut_suplente : '' ,
        nombreCompleo_suplente : '' ,
        domicilio_suplente : '' ,
        telefono_suplente : '' ,
        llamado_emergencia:'',
        segurop_privado:'',
        derivacion_centrosalud:'',
        curso:''
   })

    const alumnoCurso = async()=>{
        const data = await fetch(`https://portal.yireliceo.com/API/obtener_alumno_matricula_rut.php?rut=${datosGenera.rut}`)
        const datoalumnos = await data.json();
        console.log(datoalumnos)
        setDatosGenera(datoalumnos);
    }

   const handleData =  (e) =>{
        setDatosGenera({
            ...datosGenera,
            [e.target.name]: e.target.value
        });
    }
    const enviarAPI = async (e) => {
        e.preventDefault();
        if (datosGenera.rut_madre !== "" || datosGenera.rut_padre !== "") {
            const cargaUtil = JSON.stringify(datosGenera);
            const resSql = await fetch(`https://portal.yireliceo.com/API/actualizar_alumno_matricula_rut.php`, {
                method: "PUT",
                body: cargaUtil
            });
            const exitoso = await resSql.json();
            console.log(exitoso)
            if (exitoso) {
                await setTimeout(redireccionarPagina2(), 5000);
            }
        }
    }
    function redireccionarPagina2() {
        window.location = "/";
    }
          return (
                <Container fluid className="home2 h100 justify-content-md-center" ref={ref}>
                    <Form onSubmit={enviarAPI}>
                <Row>
                    <Col className="matricula" >
                        <Col xs={4} md={4}>
                        <img
                                className="img-fluid start"
                                alt=""
                                src={Logo}
                                width="70px"
                            />
                        </Col>
                        <Col xs={5} md={4}>
                        <h2>Ficha Matricula 2022</h2> 
                        </Col>
                        <Col xs={3} md={4} >
                            <InputGroup className="">
                                <InputGroup.Text id="">N°</InputGroup.Text>
                                    <FormControl
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    />
                            </InputGroup>
                            <InputGroup className="">
                                <InputGroup.Text id="">Curso</InputGroup.Text>
                                <select className="form-select select_matricula" aria-label="Username"
                                    aria-describedby="basic-addon1" name="curso" onChange={handleData} value={datosGenera.curso}>
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
                                    <option>I NIVEL NOCTURA</option>
                                    <option>II NIVEL NOCTURNA</option>
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
                                value={datosGenera.apellidoP_alumno}
                                name='apellidoP_alumno'
                                className="text-uppercase"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={handleData}
                                />
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup className="">
                        <InputGroup.Text id="">Apellido Materno</InputGroup.Text>
                            <FormControl
                            value={datosGenera.apellidoM_alumno}
                            name='apellidoM_alumno'
                            className="text-uppercase"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={handleData}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs={8} md={6} lg={8}>
                        <InputGroup className="">
                            <InputGroup.Text id="">Nombres</InputGroup.Text>
                                <FormControl
                                value={datosGenera.nombre_alumno}
                                name='nombre_alumno'
                                className="text-uppercase"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={handleData}
                                />
                        </InputGroup>
                    </Col>
                    <Col xs={4} md={3} lg={4}>
                        <InputGroup className="">
                            <InputGroup.Text id="">Sexo</InputGroup.Text>
                            
                            <select className="form-select select_matricula" aria-label="Username" name='Sexo'
                                aria-describedby="basic-addon1" onChange={handleData} value={datosGenera.Sexo} >
                                    <option> </option>
                                    <option>Hombre</option>
                                    <option>Mujer</option>
                                </select>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                   
                    <Col xs={3} md={4} lg={3}>
                        <InputGroup className="">
                        <InputGroup.Text id="">Rut</InputGroup.Text>
                            <FormControl
                            
                            name='rut'
                            className="text-uppercase"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={handleData}
                            />
                        </InputGroup>
            
                    </Col>
                    <Col xs={1} md={1} lg={1}>
                        <Button className='zoom' onClick={alumnoCurso}>Buscar</Button>
                    </Col>
                    
                    <Col xs={5} md={4} lg={5}>
                        <InputGroup className="">
                        <InputGroup.Text id="">Fecha Nacimeinto</InputGroup.Text>
                            <FormControl
                             value={datosGenera.fechaNacimiento_alumno}
                             name='fechaNacimiento_alumno'
                             className="text-uppercase"
                             aria-label="Username"
                             type='date'
                             aria-describedby="basic-addon1"
                             onChange={handleData}
                            />
                        </InputGroup>
                    </Col>
                    <Col xs={3} md={3} lg={3}>
                        <InputGroup className="">
                        <InputGroup.Text id="">Edad</InputGroup.Text>
                            <FormControl
                             value={datosGenera.edad_alumno}
                             name='edad_alumno'
                             className="text-uppercase"
                             aria-label="Username"
                             type='number'
                             aria-describedby="basic-addon1"
                             onChange={handleData}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col  xs={8} md={3} lg={8}>
                        <InputGroup className="">
                        <InputGroup.Text id="">Dirección</InputGroup.Text>
                            <FormControl
                            value={datosGenera.direccion_alumno}
                            name='direccion_alumno'
                            className="text-uppercase"
                            aria-label="Username"
                            type='text'
                            aria-describedby="basic-addon1"
                            onChange={handleData}
                            />
                        </InputGroup>
                    </Col>
                    <Col  xs={4} md={3} lg={4}>
                        <InputGroup className="">
                        <InputGroup.Text id="">Comuna</InputGroup.Text>
                        <select className="form-select select_matricula" aria-label="Username" name='comuna'
                                aria-describedby="basic-addon1" onChange={handleData} value={datosGenera.comuna} >
                                    <option> </option>
                                    <option>COIHUECO</option>
                                </select>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <InputGroup className="">
                        <InputGroup.Text id="">Tiene o ha tenido alguna enfermedad crónica</InputGroup.Text>
                            <FormControl
                            value={datosGenera.enfermedad_cronica}
                            name='enfermedad_cronica'
                            className="text-uppercase"
                            aria-label="Username"
                            type='text'
                            aria-describedby="basic-addon1"
                            onChange={handleData}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <InputGroup className="">
                        <InputGroup.Text id="">Tiene algún medicamento o tratamiento especifico</InputGroup.Text>
                            <FormControl
                            value={datosGenera.medicamento_tratamiento}
                            name='medicamento_tratamiento'
                            className="text-uppercase"
                            aria-label="Username"
                            type='text'
                            aria-describedby="basic-addon1"
                            onChange={handleData}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <InputGroup className="">
                        <InputGroup.Text id="">Es alérgico</InputGroup.Text>
                            <FormControl
                            value={datosGenera.alergico}
                            name='alergico'
                            className="text-uppercase"
                            aria-label="Username"
                            type='text'
                            aria-describedby="basic-addon1"
                            onChange={handleData}
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
                                value={datosGenera.establecimineto_procedencia}
                                name='establecimineto_procedencia'
                                className="text-uppercase"
                                aria-label="Username"
                                type='text'
                                aria-describedby="basic-addon1"
                                onChange={handleData}
                                />
                        </InputGroup>
                    </Col>
                    <Col xs={5} md={3}>
                        <InputGroup className="">
                            <InputGroup.Text id="">Fecha de Ingreso</InputGroup.Text>
                                <FormControl
                                value={datosGenera.fecha_ingreso_establecimineto}
                                name='fecha_ingreso_establecimineto'
                                className="text-uppercase"
                                aria-label="Username"
                                type='date'
                                aria-describedby="basic-addon1"
                                onChange={handleData}
                                />
                        </InputGroup>
                    </Col>
                </Row>

                <Row>
                    <Col xs={5} md={4}>
                        <InputGroup className="">
                            <InputGroup.Text id="">Necesidades especificas del aprendizaje</InputGroup.Text>
                                <FormControl
                                value={datosGenera.pie}
                                name='pie'
                                className="text-uppercase"
                                aria-label="Username"
                                type='text'
                                aria-describedby="basic-addon1"
                                onChange={handleData}
                                />
                        </InputGroup>
                    </Col>
                    <Col xs={7} md={4}>
                        <InputGroup className="">
                        <InputGroup.Text id="">Diagnostico</InputGroup.Text>
                            <FormControl
                            name=''
                            className="text-uppercase"
                            aria-label="Username"
                            type='text'
                            aria-describedby="basic-addon1"
                            onChange={handleData}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs={5} md={4} lg={8}>
                        <InputGroup className="">
                        <InputGroup.Text id="">Curso que ha repetido</InputGroup.Text>
                            <FormControl
                            value={datosGenera.curso_repetido}
                            name='curso_repetido'
                            className="text-uppercase"
                            aria-label="Username"
                            type='text'
                            aria-describedby="basic-addon1"
                            onChange={handleData}
                            />
                        </InputGroup>
                    </Col>
                    <Col xs={7} md={4}>
                        <InputGroup className="">
                        <InputGroup.Text id="">Causales</InputGroup.Text>
                            <FormControl
                            value={datosGenera.causlaes_repetir}
                            name='causlaes_repetir'
                            className="text-uppercase"
                            aria-label="Username"
                            type='text'
                            aria-describedby="basic-addon1"
                            onChange={handleData}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row >
                        <h4>III-. Antecedentes Familiares</h4>
                </Row>
                <Row>
                    <h5> Antecedentes Padre</h5>
                    <Col xs={3} md={4} lg={2}>
                        <InputGroup className="">
                            <InputGroup.Text id="">Rut</InputGroup.Text>
                                <FormControl
                                value={datosGenera.rut_padre}
                                name='rut_padre'
                                className="text-uppercase"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={handleData}
                                />
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup className="">
                            <InputGroup.Text id="">Nombre Completo</InputGroup.Text>
                                <FormControl
                                value={datosGenera.nombreCompleto_padre}
                                name='nombreCompleto_padre'
                                className="text-uppercase"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={handleData}
                                />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                <Col xs={6} md={4} lg={6}>
                        <InputGroup className="">
                            <InputGroup.Text id="">Fecha de Nacimiento</InputGroup.Text>
                                <FormControl
                                value={datosGenera.fechaNacimiento_padre}
                                name='fechaNacimiento_padre'
                                aria-label="Username"
                                type='date'
                                aria-describedby="basic-addon1"
                                onChange={handleData}
                                />
                        </InputGroup>
                    </Col>
                    <Col xs={6} md={4} lg={6}>
                        <InputGroup className="">
                            <InputGroup.Text id="">Teléfono</InputGroup.Text>
                                <FormControl
                                value={datosGenera.telefono_padre}
                                name='telefono_padre'
                                type='number'
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={handleData}
                                />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                <Col xs={5} md={6} lg={5}>
                        <InputGroup className="">
                            <InputGroup.Text id="">Nivel Educacional</InputGroup.Text>
                            <select className="form-select select_matricula" name='estudios_padre'
                                aria-describedby="basic-addon1"  onChange={handleData} value={datosGenera.estudios_padre}>
                                    <option> </option>
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
                    <Col xs={7} md={6} lg={7}>
                        <InputGroup className="">
                        <InputGroup.Text id="">Ocupación</InputGroup.Text>
                            <FormControl
                            value={datosGenera.ocupacion_padre}
                            name='ocupacion_padre'
                            className="text-uppercase"
                            aria-label="Username"
                            type='text'
                            aria-describedby="basic-addon1"
                            onChange={handleData}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <h5> Antecedentes Madre</h5>
                    <Col xs={3} md={4} lg={2}>
                        <InputGroup className="">
                            <InputGroup.Text id="">Rut</InputGroup.Text>
                                <FormControl
                                value={datosGenera.rut_madre}
                                name='rut_madre'
                                className="text-uppercase"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={handleData}
                                />
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup className="">
                            <InputGroup.Text id="">Nombre Completo</InputGroup.Text>
                                <FormControl
                                value={datosGenera.nombreCompleto_madre}
                                name='nombreCompleto_madre'
                                className="text-uppercase"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={handleData}
                                />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                <Col xs={6} md={4} lg={6}>
                        <InputGroup className="">
                            <InputGroup.Text id="">Fecha de Nacimiento</InputGroup.Text>
                                <FormControl
                                 value={datosGenera.fechaNacimiento_madre}
                                name='fechaNacimiento_madre'
                                aria-label="Username"
                                type='date'
                                aria-describedby="basic-addon1"
                                onChange={handleData}
                                />
                        </InputGroup>
                    </Col>
                    <Col xs={6} md={4} lg={6}>
                        <InputGroup className="">
                            <InputGroup.Text id="">Teléfono</InputGroup.Text>
                                <FormControl
                                 value={datosGenera.telefono_madre}
                               name='telefono_madre'
                               type='number'
                               aria-label="Username"
                               aria-describedby="basic-addon1"
                               onChange={handleData}
                                />
                        </InputGroup>
                    </Col>
                    
                </Row>
                <Row>
                <Col xs={5} md={6} lg={5}>
                        <InputGroup className="">
                            <InputGroup.Text id="">Nivel Educacional</InputGroup.Text>
                            <select className="form-select select_matricula" name='estudios_madre'
                                aria-describedby="basic-addon1" onChange={handleData}  value={datosGenera.estudios_madre}>
                                    <option> </option>
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
                    <Col xs={7} md={6} lg={7}>
                        <InputGroup className="">
                        <InputGroup.Text id="">Ocupación</InputGroup.Text>
                            <FormControl
                            value={datosGenera.ocupacion_madre}
                            name='ocupacion_madre'
                            className="text-uppercase"
                            aria-label="Username"
                            type='text'
                            aria-describedby="basic-addon1"
                            onChange={handleData}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row >
                        <h4>IV-. Apoderado(a) o Tutor(a)</h4>
                </Row>
                <Row>
                    <h5>Apoderado(a) Titular</h5>
                    <Col xs={3} md={4} lg={3}>
                        <InputGroup className="">
                            <InputGroup.Text id="">Rut</InputGroup.Text>
                                <FormControl
                                value={datosGenera.rut_titular}
                                name='rut_titular'
                                className="text-uppercase"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={handleData}
                                />
                        </InputGroup>
                    </Col>
                    <Col xs={9} md={8} lg={9}>
                        <InputGroup className="">
                            <InputGroup.Text id="">Nombre Completo</InputGroup.Text>
                                <FormControl
                                value={datosGenera.nombreCompleo_titular}
                                name='nombreCompleo_titular'
                                className="text-uppercase"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={handleData}
                                />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs={9} md={8} lg={9} >
                        <InputGroup className="">
                            <InputGroup.Text id="">Domicilio</InputGroup.Text>
                                <FormControl
                                value={datosGenera.domicilio_titular}
                                name='domicilio_titular'
                                className="text-uppercase"
                                aria-label="Username"
                                type='text'
                                aria-describedby="basic-addon1"
                                onChange={handleData}
                                />
                        </InputGroup>
                    </Col>
                    <Col xs={3} md={4} lg={3} >
                        <InputGroup className="">
                            <InputGroup.Text id="">Teléfono</InputGroup.Text>
                                <FormControl
                                value={datosGenera.telefono_titular}
                                name='telefono_titular'
                                type='number'
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={handleData}
                                />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <h5>Apoderado(a) Suplente</h5>
                    <Col xs={3} md={4} lg={3}>
                        <InputGroup className="">
                            <InputGroup.Text id="">Rut</InputGroup.Text>
                                <FormControl
                                value={datosGenera.rut_suplente}
                                name='rut_suplente'
                                className="text-uppercase"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={handleData}
                                />
                        </InputGroup>
                    </Col>
                    <Col xs={9} md={8} lg={9}>
                        <InputGroup className="">
                            <InputGroup.Text id="">Nombre Completo</InputGroup.Text>
                                <FormControl
                                value={datosGenera.nombreCompleo_suplente}
                                name='nombreCompleo_suplente'
                                className="text-uppercase"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={handleData}
                                />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                <Col xs={9} md={8} lg={9} >
                        <InputGroup className="">
                            <InputGroup.Text id="">Domicilio</InputGroup.Text>
                                <FormControl
                                value={datosGenera.domicilio_suplente}
                                name='domicilio_suplente'
                                className="text-uppercase"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={handleData}
                                />
                        </InputGroup>
                    </Col>
                    <Col xs={3} md={4} lg={3} >
                        <InputGroup className="">
                            <InputGroup.Text id="">Teléfono</InputGroup.Text>
                                <FormControl
                                value={datosGenera.telefono_suplente}
                                name='telefono_suplente'
                                type='number'
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={handleData}
                                />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <h5>En caso de emergencia llamar a:</h5>
                    <Col xs={4} md={4} lg={3} >
                        <InputGroup className="">
                        <select className="form-select select_matricula" name='llamado_emergencia'
                                aria-describedby="basic-addon1" onChange={handleData} value={datosGenera.llamado_emergencia}>
                                    <option> </option>
                                    <option>Padre</option>
                                    <option>Madre</option>
                                    <option>Apoderado(a) Titular</option>
                                    <option>Apoderado(a) Suplente</option>
                                </select>
                        </InputGroup>
                    </Col>
                    <Col xs={8} md={8} lg={9} >
                            <InputGroup className="">
                                <InputGroup.Text id="">¿El estudiante cuenta con algun seguro de salud privado?</InputGroup.Text>
                                    <FormControl
                                    value={datosGenera.segurop_privado}
                                    name='segurop_privado'
                                    className="text-uppercase"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    onChange={handleData}
                                    />
                            </InputGroup>
                        </Col>
            
                </Row>
                <Row>
                        
                        
                        <Col >
                            <InputGroup className="">
                                <InputGroup.Text id="">En caso de poserlo a cual establecimiento de salud debe ser derivado</InputGroup.Text>
                                    <FormControl
                                    value={datosGenera.derivacion_centrosalud}
                                    name='derivacion_centrosalud'
                                    className="text-uppercase"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    onChange={handleData}
                                    />
                            </InputGroup>
                        </Col>
                    </Row>

                <Row>
                    <Col xs={12} md={12}>
                        <h5>Anexo 1:</h5> 
                        <p>Apoderado(a) toma conocimiento y acepta, que en edificio de básica contamos con un sistema de 
                            tele monitoreo (cámaras) en salas y hall de pre- básica, además de dos cámaras instaladas en zona de recreos 
                            de básica, las que se sumaran a las cámaras ya instaladas en el edificio de media (oficinas, CRA, y sala de 
                            enlaces), lo anterior mencionado con el fin de resguardar el cuidado de nuestros niños y niñas.
                        </p>
                    </Col>
                    
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        <h5>Anexo 2:</h5> 
                        <p> Debido a la inclusión de las nuevas tecnologías y la utilización de medios virtuales, en el área
                            educativa, como Apoderado(a) y representante legal del Alumno(a), tomo conocimiento y autorizo el uso 
                            de imágenes y videos con fines educativos de los Alumnos y Alumnas, para que puedan ser publicados y 
                            difundidos en los diferentes canales de comunicación que el Establecimiento posee, como la agenda escolar, 
                            página web, colegio interactivo, redes sociales (CRA), pendones de información y promoción educativa. Etc.
                        </p>
                    </Col>
                    
                </Row>
                <Row className='justify-content-md-center'>
                    <Col xs={12} md={12}>
                        <h2>_______________________</h2> 
                        <h3> Firma Apoderado(a)</h3>
                    </Col>
                    <Row>
                    <Col >
                        <Button type="submit">Actualizar</Button>
                    </Col>
                </Row>
                </Row>
                </Form>
            </Container>
          );
        });
