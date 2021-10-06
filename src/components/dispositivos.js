import React, { useState, useEffect } from 'react';
import { Form, Container, Button, Row, Col, Alert} from 'react-bootstrap';
import  jwt from 'jwt-decode';

const Dispositivos = () => {
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
    const [data, setData]=useState({
        id: '',
        pass:''
    });
    const enviarAPI = async (e) => {
        e.preventDefault();
        if (pass.pass === pass.confirm) {
            data.pass=pass.pass
            data.id=user.id
            console.log(pass.pass)
            console.log(data)
            const cargaUtil = JSON.stringify(data);
            const resSql = await fetch(`https://portal.yireliceo.com/API/actualizar_pass.php`, {
                method: "POST",
                body: cargaUtil
            });
            const exitoso = await resSql.json();
            console.log(exitoso)
            }else{
                console.log("error");
            }
    }

    return (
        <Container fluid className="home h100 justify-content-md-center">
            <Row className="justify-content-md-center barra-login">
                <Col md="auto"> <h3>Ingresar Nuevo</h3></Col>
            </Row>
            <Row >
                <Col xs={1} md={3}></Col>
                <Col xs={10} md={6} >
                    <Form onSubmit>
                        <Col> <h5>Nombre</h5></Col>
                        <Form.Group className="mb-4">
                            <Form.Label as="legend" >
                            </Form.Label>
                            <Form.Control as="input" name="pass" type="text" onChange={handlePass}  >
                            </Form.Control>
                        </Form.Group>
                        <Col> <h5>Cantidad</h5></Col>
                        <Form.Group className="mb-4">
                            <Form.Label as="legend" >
                            </Form.Label>
                            <Form.Control as="input" name="confirm" type="number"  onChange={handlePass}  >
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

export default Dispositivos;