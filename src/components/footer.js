import React from "react"
import Logo  from '../img/header-footer/logo-yire.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Col } from 'react-bootstrap';


const Footer = () => {
    return(
        <div class="mt-5 pt-5 pb-5 footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-xs-12 about-company logo">
                        <img
                        alt=""
                        src={Logo}
                        width="150px"
                        height="150px" />
                    </div>
                    <div class="col-lg-6 col-xs-12 location logo">
                    <h4 class="mt-lg-0 mt-sm-4">Ubicación</h4>
                    <p>Avenida San Martín 1841, Coihueco</p>
                    <p class="mb-0"><i class="fa fa-phone mr-3"></i><a href="tel:422471093">42-2471093</a></p>
                    <p><i class="fa fa-envelope-o mr-3"></i> <a href="mailto:info@yireliceo.com">info@yireliceo.com</a></p>
                    </div>
                </div>
                <Col className="Col2" >
                    <a href="https://www.facebook.com/liceopolitecnicoyire"><FacebookIcon style={{ fontSize: 40 }} ></FacebookIcon></a>
                    <a href="https://www.instagram.com/yireliceopolitecnicocoihueco/"><InstagramIcon style={{ fontSize: 40 }}></InstagramIcon></a>
                    <a href="/"><YouTubeIcon style={{ fontSize: 40 }}></YouTubeIcon></a>
                </Col>
                <div class="row">
                    <div class=" copyright logo">
                    <p class="">
                        <small class="text-white-50">© 2021. Todos los derechos reservados - Departamento Informatica - By 
                        <a href="https://www.linkedin.com/in/hquinteros/"> Hugo Esteban</a>.
                        </small>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;