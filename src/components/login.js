import React, {useState} from 'react';
import { Form, Container, Button, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import  jwt from 'jwt-decode';

const Login= () =>{

    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    });
    const handleLogin =  (e) =>{
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }
    const login = async (e) => {
        e.preventDefault();
        const LOGIN_ENDPOINT = `https://portal.yireliceo.com/API/login2.php`;
        try {
            let response = await axios.post(LOGIN_ENDPOINT, usuario);
            const token = jwt(response.data.jwt);
            var  today = new Date();
                const hor=today.getHours()+1;
                const min=today.getMinutes();
                const seg =today.getSeconds()
            if(response.status === 200 && response.data.jwt){
                let jwt = token.data;
                let expire_at = token.iat;
                localStorage.setItem("data_token", JSON.stringify(token));
                localStorage.setItem("expire_at", hor+""+min+""+seg);
                console.log(jwt);
                console.log(expire_at);
            }

        } catch(e){
            console.log(e);
        }
    }

    return(
        <Container fluid="md" className="justify-content-md-center barra-login">
            <Row className="justify-content-md-center barra-login">
                <Col md="auto"> <h1>Iniciar Sesión</h1></Col>
            </Row>
            <Row >
                <Col xs={2} md={3}></Col>
                  <Col xs={8} md={6} >
                    <Form onSubmit={login}>
                        <Form.Group className="mb-4" >
                            <Form.Label>Correo electronico</Form.Label>
                            <Form.Control name="correo" type="email" placeholder="Ingres su Correo..." />
                        </Form.Group>
                        <Form.Group className="mb-5" >
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control name="clave" type="password" placeholder="Contraseña..."  />
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