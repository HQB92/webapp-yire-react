import React, { useState, useEffect } from 'react';
import { Form, Container, Button, Row, Col} from 'react-bootstrap';


const Dispositivos = () => {
    const [dispositivos, setDispositivos]=useState({
        nombre:'',
        tipo_inventario:'',
        cantidad:'',
        descripcion:''
    });
    var token_exp = parseInt(localStorage.getItem('expire_at'));
    var  today = new Date();
    const hor=today.getHours();
    const min=today.getMinutes();
    const time=hor+""+min;
    useEffect(() => {
        if(time <= token_exp ){
            
        }else{
            localStorage.removeItem("data_token");
            localStorage.removeItem("expire_at");
            window.location = './';
        }
        // eslint-disable-next-line
    },[]);
   
    const handle =  (e) =>{
        setDispositivos({
            ...dispositivos,
            [e.target.name]: e.target.value
        });
    }

    const enviarAPI = async (e) => {
        e.preventDefault();
        if (dispositivos.nombre !== ''){
          
            const cargaUtil = JSON.stringify(dispositivos);
            const resSql = await fetch(`https://portal.yireliceo.com/API/guardar_inventario.php`, {
                method: "POST",
                body: cargaUtil
            });
            const exitoso = await resSql.json();
            console.log(exitoso)
            if (exitoso) {
                await setTimeout(redireccionarPagina2(), 5000);
            }else{
                console.log("error");
            }
        }
    }

    function redireccionarPagina2() {
        window.location = "/";
    }

    return (
        <Container fluid className="home h100 justify-content-md-center">
            <Row className="justify-content-md-center barra-login">
                <Col md="auto"> <h3>Ingresar Datos Inventario</h3></Col>
            </Row>
            <Row >
                <Col xs={1} md={3}></Col>
                <Col xs={10} md={6} >
                    <Form onSubmit={enviarAPI}>
                        <Col> <h5>Nombre</h5></Col>
                        <Form.Group className="mb-4">
                            <Form.Label as="legend" >
                            </Form.Label>
                            <Form.Control  className="text-uppercase" as="input" name="nombre" type="text" onChange={handle}  >
                            </Form.Control>
                        </Form.Group>
                        <Col> <h5>Descripción</h5></Col>
                        <Form.Group className="mb-4">
                            <Form.Label as="legend" >
                            </Form.Label>
                            <Form.Control  className="text-uppercase" as="textarea" name="descripcion" type="text"  onChange={handle}  >
                            </Form.Control>
                        </Form.Group>
                        <Col> <h5>Cantidad</h5></Col>
                        <Form.Group className="mb-4">
                            <Form.Label as="legend" >
                            </Form.Label>
                            <Form.Control  className="text-uppercase" as="input" name="cantidad" type="number"  onChange={handle}  >
                            </Form.Control>
                        </Form.Group>
                        <Col> <h5>Unidad a la cual pertenece</h5></Col>
                        <Form.Group className="mb-4">
                        <select className="form-select select_matricula" aria-label="Username"
                                    aria-describedby="basic-addon1" name="tipo_inventario"  onChange={handle} >
                                    <option> </option>
                                    <option>LABORATORIO</option>
                                    <option>DISPOSITIVOS ALUMNOS</option>
                                    <option>DISPOSITIVOS PROFESORES</option>
                                    <option>INTEGRACIÓN</option>
                                    <option>TALLER DE ALIMENTOS</option>
                                    <option>TALLER DE MADERA</option>
                                    <option>ACLE</option>
                                    <option>ADMINISTRACIÓN</option>
                                    <option>INSPECTORIA</option>
                                    <option>CONVIVENCIA ESCOLAR</option>
                                    <option>GESTIÓN PEDAGÓGICA</option>
                                    <option>CIENCIA</option>
                                    <option>BIBLIOTECA</option>
                                    <option>MÚSICA</option>
                                    <option>COLEGIO</option>
                                    <option>ENFERMERIA</option>
                                </select>
                        </Form.Group>
                        <Button type="submit">Guardar</Button>
                    </Form>
                </Col>
                <Col xs={1} md={3}></Col>
            </Row>
        </Container>
    )
}

export default Dispositivos;