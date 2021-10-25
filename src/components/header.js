import React, { useEffect, useState } from 'react';
import { Navbar, Container} from 'react-bootstrap';
import  jwt from 'jwt-decode';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';


const Header = () =>{
    const [user, setUser]=useState({
        id:'',
        firstname:'',
        lastname:'',
        email:'',
        tipo_user:''
    });
        var token = localStorage.getItem('data_token')
        if (token === null ){
            window.location = './';
        }
        var token_exp = parseInt(localStorage.getItem('expire_at'));
        const desencrip = jwt(JSON.parse(token));
        var  today = new Date();
        const hor=today.getHours();
        const min=today.getMinutes();
        const time=hor+""+min;
    useEffect(() => {
        if(time <= token_exp ){
            setUser(desencrip.data);
        }else{
            window.location = './';
        }
        // eslint-disable-next-line
    }, []);
    return(
        <Container className="header"  >
            <Navbar className="div" fixed="top" >
            <div className="divleft">
            <div>{user.tipo_user === 'Administrador' ? <SupervisorAccountIcon style={{ fontSize: 45,marginLeft:15}}></SupervisorAccountIcon>  : <LocalLibraryIcon style={{ fontSize: 45,marginLeft:15}}></LocalLibraryIcon>}   </div>
            <div  className="datos">{user.firstname} {user.lastname}<p className="p-class">{user.tipo_user}(a)</p></div></div>
            </Navbar>
        </Container>
    )
}

export default Header;