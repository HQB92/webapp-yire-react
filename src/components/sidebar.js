import React, {useState, useEffect} from 'react';

import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {useHistory} from 'react-router-dom';
import SettingsInputHdmiIcon from '@material-ui/icons/SettingsInputHdmi';
import WebIcon from '@material-ui/icons//Web';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import PersonIcon from '@material-ui/icons/Person';
//import SettingsIcon from '@material-ui/icons/Settings';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import HomeIcon from '@material-ui/icons/Home';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ScheduleIcon from '@material-ui/icons/Schedule';

import  jwt from 'jwt-decode';
const Sidebar = () =>{
    const history = useHistory();
    const logout = () => {
        localStorage.removeItem("data_token");
        localStorage.removeItem("expire_at");
    }
    const [user , setUser]=useState({
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
        let to;
    useEffect(() => {
        if(time <= token_exp ){
            setUser(desencrip.data);
        }else{
            logout();
            window.location = './';
        }
        // eslint-disable-next-line
    }, []);
    return(
        <SideNav onSelect={selected => {
            to = '/' + selected;
            if(to === "/cerrar"){
                logout();
                window.location = './';
            }else{
                history.push(to);
            }

          }}>
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                    <HomeIcon style={{ fontSize: 35}}></HomeIcon>
                    </NavIcon>
                    <NavText>Inicio</NavText>
                </NavItem>
                {user.tipo_user==='Administrador'? (
                <NavItem eventKey="personal">
                    <NavIcon>
                    <AccountCircleIcon  style={{ fontSize: 35}}></AccountCircleIcon>
                    </NavIcon>
                    <NavText>Personal</NavText>
                    <NavItem eventKey="personal/nuevo">
                        <NavText>Agregar Usuario</NavText>
                    </NavItem>
                    <NavItem eventKey="personal/editar_eliminar">
                        <NavText>Editar o Eliminar</NavText>
                    </NavItem>
                    <NavItem eventKey="personal/listar">
                        <NavText>Listar Usuarios</NavText>
                    </NavItem>
                </NavItem>)
                    :""}
                <NavItem eventKey="Alumnos">
                    <NavIcon>
                    <PersonIcon style={{ fontSize: 35}}></PersonIcon>
                    </NavIcon>
                    <NavText>Alumnos</NavText>
                    <NavItem eventKey="matricular">
                        <NavText>Actualizar Matricula 2022</NavText>
                    </NavItem>
                    <NavItem eventKey="matricular_nuevo">
                        <NavText>Nueva Matricula 2022</NavText>
                    </NavItem>
                    <NavItem eventKey="confirmacion_matricula">
                        <NavText>Confirmacion Matricula</NavText>
                    </NavItem>
                    {/*
                    <NavItem eventKey="Alumnos/nuevo">
                        <NavText>Agregar Alumno</NavText>
                    </NavItem>
                    <NavItem eventKey="Alumnos/editar_eliminar">
                        <NavText>Editar o Eliminar</NavText>
                    </NavItem>
                    <NavItem eventKey="Alumnos/listar">
                        <NavText>Listar por Curso</NavText>
                    </NavItem>*/}
                    <NavItem eventKey="alumno/listar_presenciales">
                        <NavText>Listar Presenciales</NavText>
                    </NavItem>
                    {/*<NavItem eventKey="Alumnos/editarr_respuesta">
                        <NavText>Editar Respuesta</NavText>
                    </NavItem>*/}
                </NavItem>
                {user.tipo_user==='Administrador'? (
                <NavItem eventKey="asistencia">
                    <NavIcon>
                    <FormatListNumberedIcon style={{ fontSize: 35}}></FormatListNumberedIcon>
                    </NavIcon>
                    <NavText>Asistencia</NavText>
                    <NavItem eventKey="tomarasistencia">
                        <NavText>Ingresar Asistencia</NavText>
                    </NavItem>
                    <NavItem eventKey="asistencia_alumnos">
                        <NavText>Asistencia por Curso </NavText>
                    </NavItem>
                </NavItem>)
                    :""}
              {user.tipo_user==='Administrador'? (
                <NavItem eventKey="horario_ingreso">
                    <NavIcon>
                    <ScheduleIcon style={{ fontSize: 35}}></ScheduleIcon>
                    </NavIcon>
                    <NavText>Control de Asistencia</NavText>
                </NavItem>)
                    :""}
                {user.tipo_user==='Administrador'? (
                <NavItem eventKey="dispositivos">
                    <NavIcon>
                    <SettingsInputHdmiIcon style={{ fontSize: 35}}></SettingsInputHdmiIcon>
                    </NavIcon>
                    <NavText>Dispositivos</NavText>
                    <NavItem eventKey="dispositivos/nuevo">
                        <NavText> Agregar Dispositivo</NavText>
                    </NavItem>
                    <NavItem eventKey="dispositivos/editar_eliminar">
                        <NavText>Editar o Eliminar</NavText>
                    </NavItem>
                    <NavItem eventKey="dispositivos/solicitar">
                        <NavText>Solicitar Dispositivo</NavText>
                    </NavItem>
                    <NavItem eventKey="dispositivos/disponibles">
                        <NavText>Listar Disponibles</NavText>
                    </NavItem>
                    <NavItem eventKey="dispositivos/faltantes">
                        <NavText>Listar No Entregados</NavText>
                    </NavItem>
                </NavItem>)
                    :""}
                <NavItem eventKey="laboratorios">
                    <NavIcon>
                    <DesktopMacIcon style={{ fontSize: 35}}></DesktopMacIcon>
                    </NavIcon>
                    <NavText>Laboratorio</NavText>
                    <NavItem eventKey="solicitar_laboratorio">
                        <NavText>Solicitar Laboratorio</NavText>
                    </NavItem>
                    <NavItem eventKey="laboratorio">
                        <NavText>Calendario</NavText>
                    </NavItem>
                </NavItem>
                {user.tipo_user==='Administrador'? (
                <NavItem eventKey="pagina">
                    <NavIcon>
                    <WebIcon style={{ fontSize: 35}}></WebIcon>
                    </NavIcon>
                    <NavText >Pagina Web</NavText>
                    <NavItem eventKey="pagina/nueva_noticia">
                        <NavText>Nueva Noticia</NavText>
                    </NavItem>
                    <NavItem eventKey="pagina/eliminar_noticia">
                        <NavText>Eliminar Noticia</NavText>
                    </NavItem>
                    <NavItem eventKey="pagina/nueva_foto">
                        <NavText>Nueva Imagen</NavText>
                    </NavItem>
                    <NavItem eventKey="pagina/eliminar_foto">
                        <NavText>Eliminar Imagen</NavText>
                    </NavItem>
                </NavItem>)
                    :""}
                <NavItem eventKey="cambiar_pass">
                    <NavIcon>
                        <VpnKeyIcon style={{ fontSize: 35}}></VpnKeyIcon>
                    </NavIcon>
                    <NavText>Cambiar Contraseña</NavText>
                </NavItem>
                <NavItem eventKey="cerrar" onClick={logout} >
                    <NavIcon>
                        <PowerSettingsNewIcon style={{ fontSize: 35}}></PowerSettingsNewIcon>
                    </NavIcon>
                    <NavText>Cerrra Sesión</NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    )
}

export default Sidebar;