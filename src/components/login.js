import React, {useEffect, useState, useRef} from 'react';
import { Form, Container, Button, Row, Col} from 'react-bootstrap';

const Login= () =>{
    const refUsuario= useRef(null)
    const refClave= useRef(null)
    const [usuario, setUsuario] = useState({
        correo:'',
        clave:''
    });
    const handleLogin =  (e) =>{
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
        
    }

    const enviarData = async(e)=>{
        e.preventDefault();
        const cargaUtil = JSON.stringify(usuario);
        const resSql = await fetch(`https://portal.yireliceo.com/API/login.php`, {
            method: "POST",
            body: cargaUtil
        });
        console.log(resSql)
        const exitoso = await resSql.json();
        console.log(exitoso)
    }

    return(
        <Container fluid="md" className="justify-content-md-center barra-login">
            <Row className="justify-content-md-center barra-login">
                <Col md="auto"> <h1>Iniciar Sesión</h1></Col>
            </Row>
            <Row >
                <Col xs={2} md={3}></Col>
                  <Col xs={8} md={6} >
                    <Form onSubmit={enviarData}>
                        <Form.Group className="mb-4" >
                            <Form.Label>Correo electronico</Form.Label>
                            <Form.Control name="correo" type="email" placeholder="Ingres su Correo..." onChange={handleLogin}/>
                        </Form.Group>
                        <Form.Group className="mb-5" >
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control name="clave" type="password" placeholder="Contraseña..." onChange={handleLogin} />
                        </Form.Group>
                        <Button  variant="primary" type="submit">
                            Iniciar Sesión
                        </Button>
                    </Form>
                    <div className="card-footer">
                        <span>¿Olvido su contraseña?</span> <a href="/home"> Recuperar</a>
                    </div>
                </Col>
                <Col xs={2} md={3}></Col>
            </Row>
        </Container>
    )
}

export default Login;