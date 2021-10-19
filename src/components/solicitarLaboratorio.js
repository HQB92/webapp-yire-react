import React, { useState, useEffect } from 'react';

import { Form, Container, Button, Row, Col, Modal} from 'react-bootstrap';
import  jwt from 'jwt-decode';

const SolicitarLaboratorio = () => {
    const [data, setData]=useState({
        fecha:'',
        hora:'',
        curso:'',
        rut:''
    });
    const[user, setUser]= useState([])
    var token = localStorage.getItem('data_token');
    var token_exp = parseInt(localStorage.getItem('expire_at'));
    const desencrip = jwt(JSON.parse(token));
    var  today = new Date();
    const hor=today.getHours();
    const min=today.getMinutes();
    const time=hor+""+min;
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
    dd = '0' + dd;
    }
    if (mm < 10) {
    mm = '0' + mm;
    }
    const [fecha,setFecha] = useState()
    const[result, setResult] =useState(0)
    
    useEffect(() => {
        
        setFecha(yyyy + "-" + mm+ "-"+ dd)
        if(time <= token_exp ){
            setUser(desencrip.data);
        }else{
            localStorage.removeItem("data_token");
            localStorage.removeItem("expire_at");
            window.location = './';
        }
        console.log(data)
        // eslint-disable-next-line
    },[]);
    useEffect(() => {
        
        // eslint-disable-next-line
    },[]);
    
    const revisarFecha = async()=>{
        const fecha=data.fecha+ " " + data.hora
        const dataresul = await fetch(`https://portal.yireliceo.com/API/validar_fecha_laboratorio.php?consulta=${fecha}`)
        const datoalumnos = await dataresul.json();
        if(datoalumnos.length === 0){
            setResult(2)
            console.log(result)
        }else{
            handleShow()
        }
    }
    const handleData =  (e) =>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const enviarAPI = async (e) => {
        e.preventDefault();
        data.rut=user.id
        console.log(data)
        const cargaUtil = JSON.stringify(data);
        const resSql = await fetch(`https://portal.yireliceo.com/API/guardar_reserva_laboratorio.php`, {
            method: "POST",
            body: cargaUtil
        });
        const exitoso = await resSql.json();
        console.log(exitoso)
        setResult(0)
            }
    return (
        <Container fluid className="home h100 justify-content-md-center">
            <Row className="justify-content-md-center barra-login">
                <Col md="auto"> <h3>Solicitar Laboratorio</h3></Col>
            </Row>
            <Row >
                <Col xs={1} md={3}></Col>
                <Col xs={10} md={6} >
                    <Form onSubmit={enviarAPI}>
                        <Form.Group className="mb-4" >
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control  type="date" min={fecha} name="fecha" disabled={result===2} onChange={handleData}/>
                        </Form.Group>
                        <Form.Group className="mb-4" >
                            <Form.Label>Apellidos</Form.Label>
                            <select className="form-select text-center" disabled={result===2}  name="hora" onChange={handleData} >
                                <option>Selecionar Hora</option>
                                <option>08:30</option>
                                <option>09:45</option>
                                <option>11:00</option>
                                <option>12:15</option>
                            </select>
                        </Form.Group>
                        <Form.Group className={result===2? "":"btn_diseable "}>
                            <Form.Label>Rut</Form.Label>
                            <select className="form-select text-center"  name="curso" onChange={handleData} >
                                <option>Selecionar curso</option>
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
                        </Form.Group>
                        <Col><Button onClick={revisarFecha} className={result===0? "":"btn_diseable "} >Validar Fecha</Button></Col>
                        <Col><Button className={result===2 ? "":"btn_diseable "} type="submit">Guardar</Button></Col>
                        <Col><h1 className={result===3? "":"btn_diseable "}> Fecha ya registrada</h1></Col>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header >
                                <Modal.Title>Aviso</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Fecha ya registrada, vuelva a selecionar otra fecha.</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={handleClose}>Cerrar</Button>
                            </Modal.Footer>
                        </Modal>
                          
                    </Form>
                </Col>
                <Col xs={1} md={3}></Col>
            </Row>
        </Container>
    )
}

export default SolicitarLaboratorio;
