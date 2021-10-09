import React from "react"
import {  Container} from 'react-bootstrap';
const Footer = () => {
    return(
        <Container>
        <div className="mt-5 pt-5 pb-5 footer">
            <div className="container" fixed="bottom">
                <div className="row">
                    <div className=" copyright logo">
                    <p className="">
                        <small className="text-white-50">© 2021. Todos los derechos reservados - Departamento Informatica - By 
                        <a href="https://www.linkedin.com/in/hquinteros/"> Hugo Esteban</a>.
                        </small>
                    </p>
                    </div>
                </div>
            </div>
        </div>
        </Container>
    )
}
export default Footer;