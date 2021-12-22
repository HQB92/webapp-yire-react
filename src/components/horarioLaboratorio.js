import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Modal, Button} from 'react-bootstrap';

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";

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
        // eslint-disable-next-line
    }, []);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [evento, setEvento] =useState({
        title:'',
        start: new Date(),
        extendedProps:{
            first_name:'',
            last_name:''
        }
    });

    const eventClick = (e) => {
        setEvento(e.event)
        handleShow()
    };

    const renderEventContent = (eventInfo) => {
        const hora = eventInfo.event.start
        const hora_ini=hora.getHours();
        const hora_fin=hora.getHours()+1;
        let min = hora.getMinutes();
        if (min === 0){
            min='00';
        }
    return (
            <>
                <b>{hora_ini +":" + min +" - "+hora_fin +":" + min}</b>
                <p className='p_horario'>{eventInfo.event.title}</p>
                <p className='p_horario'>{eventInfo.event.extendedProps.first_name+ " " +eventInfo.event.extendedProps.last_name}</p>
            </>
        )
    };

    return(
        <Container fluid className="home h100 justify-content-md-center">
            <Row className="justify-content-md-center">
                <Col md="auto"> <h2>Horario de Laboratorio</h2></Col>
            </Row>
            <Row>
                <FullCalendar
                    plugins={[ timeGridPlugin, dayGridPlugin, interactionPlugin]}
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
                    eventClick={eventClick}
                    validRange={ ()=>{
                        const curr = new Date();
                        const firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));
                        return {
                          start: firstday
                        };
                      }}
                      eventContent={renderEventContent}
                />
            </Row>
            {evento.title === null? "":<Modal show={show} onHide={handleClose} animation={true} aria-labelledby="contained-modal-title-vcenter" centered >
                    <Modal.Header >
                        <Modal.Title>Datos Solicitud</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Curso: {evento.title}</p>
                        <p>Fecha: {evento.start.getDate()+"/"+(evento.start.getMonth()+1)  +"/"+ evento.start.getFullYear()}</p>
                        <p>Hora Inicio: {evento.start.getHours()+":"+ (evento.start.getMinutes()===0 ? '00': evento.start.getMinutes())}hrs.</p>
                        <p>Hora Fin: {(evento.start.getHours()+1)+":"+(evento.start.getMinutes()===0 ? '00': evento.start.getMinutes())}hrs.</p>
                        <p>Profesor(a): {evento.extendedProps.first_name +" "+evento.extendedProps.last_name}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>Cerrar</Button>
                    </Modal.Footer>
                </Modal>}
        </Container>
    )
}

export default HorarioLaboratorio;