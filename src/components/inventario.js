import React, {useState, useEffect} from 'react';
import { Table, Container, Row, Col, Button} from 'react-bootstrap';
import { CSVLink } from "react-csv";

const Inventario= () =>{
    const [dispositivos, setDispositivos]=useState([]);
    const [tipo, setTipo]=useState({
        tipo_inventario:'LABORATORIO'
    });
    
    const obtenerDatos   = async()=>{
        setDispositivos([]);
        const data = await fetch(`https://portal.yireliceo.com/API/obtener_inventario_por_tipo?consulta=${tipo.tipo_inventario}`)
        const datoalumnos = await data.json();
        setDispositivos(datoalumnos);
    }

    const handleChange =  e =>{
        setTipo({
            ...tipo,
            [e.target.name]: e.target.value
        });
    }
    useEffect(() => {
       obtenerDatos();
        // eslint-disable-next-line
    }, [tipo]);

   
    return(
        <Container fluid className="home h100 justify-content-md-center">
            <Row className="justify-content-md-center">
                <Col md="auto"> <h3>Inventario Por Tipo</h3></Col>
            </Row>
            <Row className="text-center">
                <Col >
                    <h4>Tipo</h4>
                    <select className="form-select text-center"  name="tipo_inventario" onChange={handleChange}>
                        <option>LABORATORIO</option>
                        <option>DISPOSITIVOS ALUMNOS</option>
                        <option>DISPOSITIVOS PROFESORES</option>
                        <option>INTEGRACIÓN</option>
                        <option>TALLER DE ALIMENTOS</option>
                        <option>TALLER DE MADERA</option>
                        <option>ACLE</option>
                        <option>ADMINISTRACIÓN</option>
                        <option>INSPECTORIA</option>
                        <option>CONVIVENCIA ESCOLAR</option>
                        <option>GESTIÓN PEDAGÓGICA</option>
                        <option>CIENCIA</option>
                        <option>BIBLIOTECA</option>
                        <option>MÚSICA</option>
                        <option>COLEGIO</option>
                        <option>ENFERMERIA</option>
                    </select>
                </Col>
            </Row>
            <Row> <Col> </Col></Row>
            <Row className="scrol2">
                <Table>
                    <thead>
                        <tr>
                            <th>N°</th>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <th>Detalle</th>
                        </tr>
                    </thead>
                    <tbody>
                            {dispositivos.map((e,index)=>
                            <tr key={e.id} className="text-uppercase" >
                                <td >{index+1}</td>
                                <td >{e.nombre}</td>
                                <td>{e.cantidad}</td>
                                <td>{e.descripcion}</td>
                            </tr> 
                        )}
                    </tbody>
                </Table>
            </Row>
            <CSVLink data={dispositivos} filename={tipo.tipo_inventario+".csv"}> <Button className="btn_margintop">Exportar a CSV</Button> </CSVLink>
        </Container>
    )
}

export default Inventario;