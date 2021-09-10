import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import MenuIcon from '@material-ui/icons/Menu';


const Header = () =>{
    return(
        <div>
            <Navbar className="div " collapseOnSelect expand="lg" >
                <Container className="div">
                    <Navbar.Toggle aria-controls="navbar-borde responsive-navbar-nav ">
                        <span><MenuIcon style={{ fontSize: 40 }}></MenuIcon></span>
                    </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav navbar-right navbar-borde " >
                    <Nav className="me-auto navbar-borde"></Nav>
                    <Nav className="navbar-right div navbar-borde ">
                        <Nav.Link className="navbar-right div" href="/contacto">Cerrar Sesión</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;