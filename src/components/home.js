import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import ListAltIcon from '@material-ui/icons/ListAlt';
import FaceIcon from '@material-ui/icons/Face';
import DateRangeIcon from '@material-ui/icons/DateRange';
import SettingsInputHdmiIcon from '@material-ui/icons/SettingsInputHdmi';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import BurstModeIcon from '@material-ui/icons/BurstMode';

const Home = () =>{
    return(
        <Container fluid className="home h100">
            <Row xs="auto">
                <Col>
                    <a  href="/">
                        <ListAltIcon style={{ fontSize: 90, marginLeft: 55 }}></ListAltIcon>
                        <h5>Alumnos Presenciales</h5>
                    </a>
                </Col>
                <Col>
                        <FaceIcon color="disabled" style={{ fontSize: 90 }}></FaceIcon>
                        <h5>Control T°</h5>
                </Col>
                <Col>
                        <DateRangeIcon color="disabled" style={{ fontSize: 90, marginLeft: 55  }}></DateRangeIcon>
                        <h5>Solicitar Laboratorio</h5>
                </Col>
                <Col>
                        <SettingsInputHdmiIcon color="disabled" style={{ fontSize: 90, marginLeft: 45 }}></SettingsInputHdmiIcon>
                        <h5>Solicitar Dispositivo</h5>
                </Col>
                <Col>
                        <NoteAddIcon color="disabled" style={{ fontSize: 90, marginLeft: 20 }}></NoteAddIcon>
                        <h5>Nueva Noticia</h5>
                </Col>
                <Col>
                        <BurstModeIcon color="disabled" style={{ fontSize: 90 }}></BurstModeIcon>
                        <h5>Imagenes</h5>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;