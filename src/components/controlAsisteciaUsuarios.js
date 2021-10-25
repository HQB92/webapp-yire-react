import React, {useState, useEffect} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import bootstrapPlugin from '@fullcalendar/bootstrap';
const ControlAsistenciaUsuarios= () =>{
    const [consulta, setConsulta] =useState({
        curso:'PREKINDER',
        mes:'10',
        mostar:'1',
    });
    const handleChange =  e =>{
        setConsulta({
            ...consulta,
            [e.target.name]: e.target.value
        });
    }
    useEffect(() => {
       
        // eslint-disable-next-line
    }, [consulta]);

    return(
        <Container fluid className="home h100 justify-content-md-center">
            <Row className="justify-content-md-center">
                <Col md="auto"> <h2>Reloj Control de Asistencia</h2></Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="6" >
                    <select className="form-select text-center"  name="curso" onChange={handleChange}>
                        <option>Seleccione Trabajador</option>
                        <option>Hugo Esteban Quinteros Bustos</option>
                    </select>
                </Col>
            </Row>
            <Row>
                <FullCalendar
                    plugins={[ dayGridPlugin, bootstrapPlugin ]}
                    initialView="dayGridMonth"
                    locale= "es"
                    weekends={false}
                    buttonText={{today:"Hoy"}}
                    dayHeaderFormat={{ weekday: 'long'}}
                    showNonCurrentDates={false}
                    fixedWeekCount={false}
                    expandRows={true}
                    firstDay={1}
                    events={[
                        { title: '2-. Ingreso : 8:13', date: '2021-10-18' },
                        { title: '1-. Temperatura: 36.5°C', date: '2021-10-01' },
                        { title: '2-. Ingreso : 8:10', date: '2021-10-01' },
                        { title: '3-. Salida: 18:29', date: '2021-10-01' },
                        { title: '4-. Horas Trabajadas:9:34hrs.', date: '2021-10-01' },
                        { title: '1-. Temperatura: 36.5°C', date: '2021-10-05' },
                        { title: '2-. Ingreso : 8:10', date: '2021-10-05' },
                        { title: '3-. Salida: 18:29', date: '2021-10-05' },
                        { title: '4-. Horas Trabajadas:9:34hrs.', date: '2021-10-05' },
                        { title: '1-. Temperatura: 36.5°C', date: '2021-10-11' },
                        { title: '2-. Ingreso : 8:10', date: '2021-10-11' },
                        { title: '3-. Salida: 18:29', date: '2021-10-11' },
                        { title: '4-. Horas Trabajadas:9:34hrs.', date: '2021-10-11' },
                        { title: '1-. Temperatura: 36.0°C', date: '2021-10-18' }
                    ]}
                />
            </Row>
        </Container>
    )
}

export default ControlAsistenciaUsuarios;