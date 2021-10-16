import React, { useState, useEffect } from 'react';

import { Form, Container, Button, Row, Col, Alert} from 'react-bootstrap';
import  jwt from 'jwt-decode';

const TomarAsitencia = () => {
    const [user, setUser]=useState({
        id:'',
        firstname:'',
        lastname:'',
        email:'',
        tipo_user:''
    });
    var token = localStorage.getItem('data_token');
    var token_exp = parseInt(localStorage.getItem('expire_at'));
    const desencrip = jwt(JSON.parse(token));
    var  today = new Date();
    const hor=today.getHours();
    const min=today.getMinutes();
    const time=hor+""+min;
    useEffect(() => {
        if(time <= token_exp ){
            setUser(desencrip.data);
        }else{
            localStorage.removeItem("data_token");
            localStorage.removeItem("expire_at");
            window.location = './';
        }
        // eslint-disable-next-line
    },[]);
    const [pass, setPass]=useState({
        pass:'',
        confirm:''
    });
    const handlePass =  (e) =>{
        setPass({
            ...pass,
            [e.target.name]: e.target.value
        });
    }
    const [data,]=useState({
        id: '',
        pass:''
    });
    const [show, setShow] = useState(true);
    const enviarAPI = async (e) => {
        e.preventDefault();
        if (pass.pass === pass.confirm) {
            data.pass=pass.pass
            data.id=user.id
            console.log(pass.pass)
            console.log(data)
            const cargaUtil = JSON.stringify(data);
            const resSql = await fetch(`https://portal.yireliceo.com/API/usuario/actualizar_pass.php`, {
                method: "POST",
                body: cargaUtil
            });
            const exitoso = await resSql.json();
            console.log(exitoso)
            if(exitoso){
                localStorage.removeItem("data_token");
                localStorage.removeItem("expire_at");
                window.location = './';
            }else{
                if (show) {
                    return (
                    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                        <Alert.Heading>Error</Alert.Heading>
                        <p>
                            Error al cambiar contraseña intente mas tarde.
                        </p>
                    </Alert>
                    );
                }
                }
            } else {
                console.log("error");
                }
            }
    return (
        <Container fluid className="home h100 justify-content-md-center">
            <Row className="justify-content-md-center barra-login">
                <Col md="auto"> <h3>Ingresar Asistencia</h3></Col>
                
            </Row>
            <Row className="justify-content-md-center barra-login">
                <Col md="4" >
                    <h4>Curso</h4>
                    <select className="form-select text-center"  name="curso" >
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
                </Col>
            </Row>
            
            <Row >
                <Col xs={1} md={3}></Col>
                <Col xs={10} md={6} >
                    <Form onSubmit={enviarAPI}>
                        <Form.Group className="mb-4" >
                            <Form.Label>Nombres</Form.Label>
                            <Form.Control className="bloqueo" disabled type="text" value={user.firstname} />
                        </Form.Group>
                        <Form.Group className="mb-4" >
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control className="bloqueo" disabled type="text" value={user.lastname} />
                        </Form.Group>
                        <Form.Group className="mb-4" >
                            <Form.Label>Rut</Form.Label>
                            <Form.Control className="bloqueo" disabled type="text" value={user.id} name="rut" onChange />
                        </Form.Group>
                        <Form.Group className="mb-4" >
                            <Form.Label>Correo</Form.Label>
                            <Form.Control className="bloqueo" disabled type="text" value={user.email} />
                        </Form.Group>
                        <Col> <h5>Ingrese Nueva Contraseña</h5></Col>
                        <Form.Group className="mb-4">
                            <Form.Label as="legend" >
                            </Form.Label>
                            <Form.Control as="input" name="pass" type="password" onChange={handlePass}  >
                            </Form.Control>
                        </Form.Group>
                        <Col> <h5>Repetir Nueva Contraseña</h5></Col>
                        <Form.Group className="mb-4">
                            <Form.Label as="legend" >
                            </Form.Label>
                            <Form.Control as="input" name="confirm" type="password"  onChange={handlePass}  >
                            </Form.Control>
                        </Form.Group>
                        <Button type="submit">Guardar</Button>
                    </Form>
                </Col>
                <Col xs={1} md={3}></Col>
            </Row>
        </Container>
    )
}

export default TomarAsitencia;
