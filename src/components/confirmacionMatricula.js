import React,{ useEffect,  useState}  from 'react';
import { Table, Container, Row, Col, Button} from 'react-bootstrap';
import { CSVLink } from "react-csv";

const ConfirmacionMatricula= () =>{
    const [consulta, setConsulta] =useState({
        curso:'PREKINDER',
    });
    
    const [ , setMesBBDD] = useState([]);
    const [alumnos, setAlumnos] = useState([]);
    const alumnoCurso = async(setAlumnos)=>{
        setAlumnos([]);
        setMesBBDD([]);
        const data = await fetch(`https://portal.yireliceo.com/API/obtener_confimatri_curso.php?consulta=${consulta.curso}`)
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
        alumnoCurso(setAlumnos)
        // eslint-disable-next-line
    }, [consulta]);

    return(
        <Container fluid className="home h100 justify-content-md-center">
            <Row className="justify-content-md-center">
                <Col md="auto"> <h3>Confirmacion Matricula 2022</h3></Col>
            </Row>
            <Row className="text-center">
                <Col md={4}></Col>
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
                <Col md={4}></Col>
            </Row>
            <Row> <Col> </Col></Row>
            <Row className="scrol2">
                <Table>
                    <thead>
                        <tr>
                            <th>N°</th>
                            <th>RUT</th>
                            <th>Nombre</th>
                            <th>Respuesta</th>
                        </tr>
                    </thead>
                    <tbody>
                            {alumnos.map((e,index)=>
                            <tr key={e.rut}>
                                <td >{index+1}</td>
                                <td value={e.rut}>{e.rut}</td>
                                <td>{e.nombre} {e.apellidos}</td>
                                <td>{e.respuesta}</td>
                            </tr> 
                        )}
                    </tbody>
                </Table>
            </Row>
            <CSVLink data={alumnos} filename={consulta.curso+"_mes_"+consulta.mes+".csv"}> <Button className="btn_margintop">Exportar a CSV</Button> </CSVLink>
        </Container>
    )
}

export default ConfirmacionMatricula;