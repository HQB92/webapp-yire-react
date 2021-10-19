import React, {useState, useEffect} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import bootstrapPlugin from '@fullcalendar/bootstrap';
import timeGridPlugin from '@fullcalendar/timegrid';


const HorarioLaboratorio= () =>{
    const [consulta, setConsulta] =useState({

    });
    const cargarDatos = async()=>{
        
        const data = await fetch(`https://portal.yireliceo.com/API/obtener_calendario.php`)
        const datoalumnos = await data.json();
        setConsulta(datoalumnos);
    }

    useEffect(() => {
        cargarDatos();
        console.log(consulta)
        // eslint-disable-next-line
    }, []);

    return(
        <Container fluid className="home h100 justify-content-md-center">
            <Row className="justify-content-md-center">
                <Col md="auto"> <h2>Horario de Laboratorio</h2></Col>
            </Row>
            <Row>
                <FullCalendar
                    plugins={[ timeGridPlugin, dayGridPlugin, bootstrapPlugin ]}
                    initialView="timeGridWeek"
                    locale= "es"
                    weekends={false}
                    all-day={false}
                    timeZone= "local"
                    timeFormat="H(:mm)"
                    slotMinTime={"08:00:00"}
                    slotMaxTime={"13:30:00"}
                    expandRows={true}
                    allDaySlot={false}
                    slotDuration={"01:00:00"}
                    nowIndicator={true}
                    dayHeaders={true}
                    buttonText={{today:"Hoy"}}
                    dayHeaderFormat={{ weekday: 'long', month: 'numeric', day: 'numeric', omitCommas: true }}
                    events={consulta}
                />
            </Row>
        </Container>
    )
}

export default HorarioLaboratorio;