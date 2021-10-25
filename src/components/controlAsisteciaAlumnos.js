import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Table} from 'react-bootstrap';

const ControlAsistenciaAlumnos= () =>{
    const [consulta, setConsulta] =useState({
        curso:'PREKINDER',
        mes:'10',
        mostar:'1',
    });
    
    const [alumnos, setAlumnos] = useState([]);
    const alumnoCurso = async()=>{
        setAlumnos([]);
        const data = await fetch(`https://portal.yireliceo.com/API/obtener_alumnos_por_curso.php?consulta=${consulta.curso}`)
        const datoalumnos = await data.json();
        setAlumnos(datoalumnos);
    }


    const handleChange =  e =>{
        setConsulta({
            ...consulta,
            [e.target.name]: e.target.value
        });
    }
    useEffect(() => {
        alumnoCurso()
        // eslint-disable-next-line
    }, [consulta]);

    return(
        <Container fluid className="home h100 justify-content-md-center">
            <Row className="justify-content-md-center">
                <Col md="auto"> <h2>Control de Asistencia por Curso</h2></Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="6" >
                  
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
            <Row className="scrol3">
                <Table>
                    <thead>
                        <tr>
                            <th>N°</th>
                            <th>Nombre</th>
                            <th>01</th>
                            <th>04</th>
                            <th>05</th>
                            <th>06</th>
                            <th>07</th>
                            <th>08</th>
                            <th>11</th>
                            <th>12</th>
                            <th>13</th>
                            <th>14</th>
                            <th>15</th>
                            <th>18</th>
                            <th>19</th>
                            <th>20</th>
                            <th>21</th>
                            <th>22</th>
                            <th>25</th>
                            <th>26</th>
                            <th>27</th>
                            <th>28</th>
                            <th>29</th>
                            <th>Asistencia</th>
                            <th>Ausente</th>
                        </tr>
                    </thead>
                    <tbody>
                            {alumnos.map((e,index)=>(
                            <tr key={e.rut}>
                            <td>{index+1}</td>
                                <td>{e.nombre} {e.apellidos}</td>
                                <td>P</td>
                                <td>P</td>
                                <td>O</td>
                                <td>A</td>
                                <td>P</td>
                                <td>P</td>
                                <td>O</td>
                                <td>A</td>
                                <td>P</td>
                                <td>P</td>
                                <td>O</td>
                                <td>A</td>
                                <td>P</td>
                                <td>P</td>
                                <td>O</td>
                                <td>A</td>
                                <td>A</td>
                                <td>P</td>
                                <td>P</td>
                                <td>O</td>
                                <td>A</td>
                                <td>15</td>
                                <td>6</td>
                            </tr> 
                        ))}
                    </tbody>
                </Table>
            </Row>
        </Container>
    )
}

export default ControlAsistenciaAlumnos;