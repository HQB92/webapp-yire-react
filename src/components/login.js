import React, {useState} from 'react';
import { Form, Container, Button, Row, Col, Modal} from 'react-bootstrap';
import axios from 'axios';


const Login= () =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
        const LOGIN_ENDPOINT = `https://portal.yireliceo.com/API/login.php`;
        try {
            let response = await axios.post(LOGIN_ENDPOINT, usuario);
            var  today = new Date();
                const hor=today.getHours()+1;
                const min=today.getMinutes();
            if(response.status === 200 && response.data.jwt){
                let jwt = response.data.jwt;
                localStorage.setItem("data_token", JSON.stringify(jwt));
                localStorage.setItem("expire_at", hor+""+min);
                window.location = '/home';
            }
            
        } catch(e){
            handleShow()
        }
    }

    return(
        <Container fluid className="login justify-content-md-center">
                <Col><h1>Iniciar Sesión</h1></Col>
            <Row  xl={3}  lg={2} md={1}   className="justify-content-center">
                  <Col >
                    <Form onSubmit={login}>
                        <Form.Group className="mb-4" >
                            <Form.Label>Correo electronico</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Ingres su Correo..." onChange={handleLogin}/>
                        </Form.Group>
                        <Form.Group className="mb-5" >
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Contraseña..." onChange={handleLogin}  />
                        </Form.Group>
                        <Button  variant="primary" type="submit">
                            Iniciar Sesión
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose} animation={true} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header >
                    <Modal.Title>Aviso</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Error en contraseña, porf favor vuelva a ingresarla correctamente</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default Login;