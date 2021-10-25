import React, { useState, useEffect } from 'react';
import { Form, Container, Button, Row, Col} from 'react-bootstrap';


const TomarAsitencia = () => {
    const [consulta, setConsulta] =useState({
        curso:''
    });
    const [alumnos, setAlumnos] = useState([]);
    const alumnoCurso = async()=>{
        setAlumnos([]);
        const data = await fetch(`https://portal.yireliceo.com/API/obtener_alumnos_por_curso.php?consulta=${consulta.curso}`)
        const datoalumnos = await data.json();
        setAlumnos(datoalumnos);
    }
    const [dataAsis, SetDataAsis]=useState({
        rut:'',
        tipoAsis:''
    })
  
    const handleChange =  e =>{
        setConsulta({
            ...consulta,
            [e.target.name]: e.target.value
        });
    }
    const handleChangAsis =  e =>{
        SetDataAsis({
            ...dataAsis,
            [e.target.name]: e.target.value
        });
        console.log(dataAsis)
    }
    useEffect(() => {
        alumnoCurso()
        // eslint-disable-next-line
    },[consulta]);

    return (
        <Container fluid className="home h100 justify-content-md-center">
            <Row className="justify-content-md-center barra-login">
                <Col md="auto"> <h3>Ingresar Asistencia</h3></Col>
            </Row>
            <Row className="justify-content-md-center barra-login">
                <Col md="6">
                    <select className="form-select text-center"  name="curso" onChange={handleChange} >
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
                </Col>
            </Row>
            <Row className="justify-content-md-center barra-login">
                <Col  >
                    <Form  className="scrol">
                    { alumnos.map((e)=>
                        <Form.Group className="asistencia" >
                            <label  key ={e.rut} className=" input_name" name="rut"  > {e.apellidos +" " + e.nombre}</label>
                            <select className="form-select text-center select_asis margins"  name="tipoAsis" onChange={handleChangAsis} >
                                <option> </option>
                                <option value="P">Presente</option>
                                <option value="O">Online</option>
                                <option value="A">Ausente</option>
                            </select>0
                        </Form.Group>
                    )}
                        
                    </Form>
                    {consulta.curso === ''? " ":<Button className="btn_margintop" type=" ">Guardar</Button>}
                </Col>
                
            </Row>
        </Container>
    )
}

export default TomarAsitencia;
