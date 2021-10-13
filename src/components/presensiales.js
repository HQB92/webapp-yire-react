import React, {useState, useEffect} from 'react';
import { Table, Container, Row, Col, Button} from 'react-bootstrap';
import { CSVLink } from "react-csv";

const Presenciales= () =>{
    const [consulta, setConsulta] =useState({
        curso:'PREKINDER',
        mes:'10',
        mostar:'1',
    });
    
    const [ , setMesBBDD] = useState([]);
    const [alumnos, setAlumnos] = useState([]);
    const alumnoCurso = async(setAlumnos)=>{
        setAlumnos([]);
        setMesBBDD([]);
        const data = await fetch(`https://portal.yireliceo.com/API/obtener_alumnos_curso.php?consulta=${consulta.curso}`)
        const datoalumnos = await data.json();
        setAlumnos(datoalumnos);
        setMesBBDD(datoalumnos[0]);
    }

    const alumnoSi = async(setAlumnos)=>{
        setAlumnos([]);
        setMesBBDD([]);
        const data = await fetch(`https://portal.yireliceo.com/API/obtener_alumnos_curso_si.php?consulta=${consulta.curso}`)
        const datoalumnos = await data.json();
        setAlumnos(datoalumnos);
        setMesBBDD(datoalumnos[0]);
    }
    const handleChange =  e =>{
        setConsulta({
            ...consulta,
            [e.target.name]: e.target.value
        });
    }
    useEffect(() => {
        buscarDatos()
        // eslint-disable-next-line
    }, [consulta]);

    const buscarDatos = ()=>{
        if (consulta.mostar === "1") {
            alumnoCurso(setAlumnos)
        }
        if (consulta.mostar === "2") {
            alumnoSi(setAlumnos)
        }
    }
    return(
        <Container fluid className="home h100 justify-content-md-center">
            <Row className="justify-content-md-center">
                <Col md="auto"> <h2>Asistencia Presencial a Clases</h2></Col>
            </Row>
            <Row className="text-center">
                <Col md="4" className="text-center">
                    <h4>Mes</h4>
                    <select className="form-select text-center"  name="mes" onChange={handleChange}>
                        {/*<option value="1">Enero</option>
                        <option value="2">Febrero</option>
                        <option value="3">Marzo</option>
                        <option value="4">Abril</option>
                        <option value="5">Mayo</option>
                        <option value="6">Junio</option>
                        <option value="7">Julio</option>
                        <option value="8">Agosto</option>
                        <option value="9">Septiembre</option>*/}
                        <option value="10">Octubre</option>
                        <option value="11">Noviembre</option>
                        <option value="12">Diciembre</option>
                    </select>
                </Col>
                <Col md="4" >
                    <h4>Curso</h4>
                    <select className="form-select text-center"  name="curso" onChange={handleChange}>
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
                    <h4>Mostrar</h4>
                    <select className="form-select text-center"  aria-label="Default select example" name="mostar" onChange={handleChange}>
                        <option value="1">Todos</option>
                        <option value="2">Solo si</option>
                    </select>
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
                            <th>Respuesta</th>
                        </tr>
                    </thead>
                    <tbody>
                            {alumnos.map((e,index)=>(e.mes === consulta.mes ?
                            <tr key={e.rut}>
                                <td> {index+1}</td>
                                <td value={e.rut}>{e.rut}</td>
                                <td>{e.nombre} {e.apellidos}</td>
                                <td>{e.respuesta}</td>
                            </tr> 
                        :""))}
                    </tbody>
                </Table>
            </Row>
            <CSVLink data={alumnos} filename={consulta.curso+"_"+consulta.mes+".csv"}> <Button>Exportar a CSV</Button> </CSVLink>
        </Container>
    )
}

export default Presenciales;