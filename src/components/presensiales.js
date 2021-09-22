import React, {useState, useEffect} from 'react';
import { Table, Container, Row, Col} from 'react-bootstrap';


const Presenciales= () =>{

    const [alumnos, setAlumnos] = useState([]);
    const datosAPI = async(setAlumnos)=>{
        const data = await fetch(`https://portal.yireliceo.com/obtener_alumno_si.php`)
        const datoalumnos = await data.json();
        setAlumnos(datoalumnos);
        console.log(alumnos)
    }
    useEffect(() => {
        const aux = datosAPI(setAlumnos)
        console.log(alumnos)
    },[]);

    return(
        <Container fluid="md" className="justify-content-md-center barra-login">
            <Row className="justify-content-md-center">
                <Col md="auto"> <h2>Asistencia Presencial a Clase Octubre</h2></Col>
            </Row>

            <Row>
                <Col md="4"> 
                <h4>Mes</h4>
                    <select>
                        <option>Enero</option>
                        <option>Febrero</option>
                        <option>Marzo</option>
                        <option>Abril</option>
                        <option>Mayo</option>
                        <option>Junio</option>
                        <option>Julio</option>
                        <option>Agosto</option>
                        <option>Septiembre</option>
                        <option>Octubre</option>
                        <option>Noviembre</option>
                        <option>Diciembre</option>
                    </select>
                </Col>
                <Col md="4">
                    <h4>Años</h4>
                    <select>
                        <option>2021</option>
                        <option>2022</option>
                    </select>
                </Col>
                <Col md="4"> 
                    <h4>Curso</h4>
                    <select>
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
            <Row> <Col> </Col></Row>
            <Row>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>RUT</th>
                            <th>Nombre</th>
                            <th>Curso</th>
                            <th>Respuesta</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alumnos.map(e=>(
                            <tr>
                                <td key={e.rut} value={e.rut}>{e.rut}</td>
                                <td>{e.nombre} {e.apellidos}</td>
                                <td>{e.curso}</td>
                                <td>{e.respeusta}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>
        </Container>
    )
}

export default Presenciales;