import React, {useState} from 'react';
import { Table, Container, Row, Col, Button} from 'react-bootstrap';
var valor=0;
const Presenciales= () =>{

    const [alumnos, setAlumnos] = useState([]);
    const alumnoSi = async(setAlumnos)=>{
        
        const data = await fetch(`https://portal.yireliceo.com/API/obtener_alumnos_curso_si.php?consulta=${consulta.curso}`)
        const datoalumnos = await data.json();
        setAlumnos(datoalumnos);
        console.log(alumnos)
    }
    const alumnoCurso = async(setAlumnos)=>{
        const data = await fetch(`https://portal.yireliceo.com/API/obtener_alumnos_curso.php?consulta=${consulta.curso}`)
        const datoalumnos = await data.json();
        
        setAlumnos(datoalumnos);
        console.log(alumnos)
    }
    const [consulta, setConsulta] =useState({
        curso:'',
        mes:''
    });
    const handleChange =  e =>{
        setConsulta({
            ...consulta,
            [e.target.name]: e.target.value
        });
    }
    const handleChangeMostrar =  e =>{
        valor = e.target.value
    }
    const buscarDatos = ()=>{
        if (valor === "1") {
            const aux = alumnoCurso(setAlumnos)
        }
        if (valor === "2") {
            const aux = alumnoSi(setAlumnos)
        }
    }
    return(
        <Container fluid="md" className="justify-content-md-center barra-login">
            <Row className="justify-content-md-center">
                <Col md="auto"> <h2>Asistencia Presencial a Clase Octubre</h2></Col>
            </Row>
            <Row>
                {/*<Col md="3"> 
                <h4>Mes</h4>
                    <select name="mes" onChange={handleChange}>
                        <option></option>
                        <option value="1">Enero</option>
                        <option value="2">Febrero</option>
                        <option value="3">Marzo</option>
                        <option value="4">Abril</option>
                        <option value="5">Mayo</option>
                        <option value="6">Junio</option>
                        <option value="7">Julio</option>
                        <option value="8">Agosto</option>
                        <option value="9">Septiembre</option>
                        <option value="10">Octubre</option>
                        <option value="11">Noviembre</option>
                        <option value="12">Diciembre</option>
                    </select>
                </Col>*/}
                <Col md="4">
                    <h4>Curso</h4>
                    <select name="curso" onChange={handleChange}>
                        <option></option>
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
                <Col md="4">
                    <h4>Mostra</h4>
                    <select name="mostar" onChange={handleChangeMostrar}>
                        <option></option>
                        <option value="1">Todos</option>
                        <option value="2">Solo si</option>
                    </select>
                </Col>
                <Col md="4"> 
                    <Button className="boton-filtrar" onClick={buscarDatos}>  Filtrar</Button>
                </Col>
            </Row>
            <Row> <Col> </Col></Row>
            <Row>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>N°</th>
                            <th>RUT</th>
                            <th>Nombre</th>
                            <th>Curso</th>
                            <th>Respuesta</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alumnos.map((e,index)=>(
                            <tr key={e.rut}>
                                <td >{index+1}</td>
                                <td value={e.rut}>{e.rut}</td>
                                <td>{e.nombre} {e.apellidos}</td>
                                <td>{e.curso}</td>
                                <td>{e.respuesta}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>
        </Container>
    )
}

export default Presenciales;