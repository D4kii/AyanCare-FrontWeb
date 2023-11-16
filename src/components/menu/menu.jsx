import React, { useState } from "react";
import logo from '../../images/logo.png'
import './menu.css'
import iconHome from '../../images/home-icon.png'
import iconCalendario from '../../images/agenda-icon.png'
import iconRelatorio from '../../images/relatorio-icon.png'
import iconPaciente from '../../images/paciente-icon.png'
import iconSino from '../../images/sino-icon.png'
import iconConfig from '../../images/config-icon.png'
import ModalSetting from "../modal-configuracoes/ModalSettings";
import { Button, Popover, Space } from 'antd';
import PopoverCardNotifications from "../popover-notifications/PopoverNotifications";
import { useLocation } from "react-router-dom";
import ModalConectar from "../conectar-modal/ModalConectar";

const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
);


function Menu() {
    const location = useLocation();


    const [openModalSetting, setOpenModalSetting] = useState(false);
    const [openModalConexao, setOpenModalConexao] = useState(false);
    const showModalSetting = () => {
        setOpenModalSetting(true);
    };
    const handleCancelSetting = () => {
        setOpenModalSetting(false);
    };
    const showModalConexao = () => {
        setOpenModalConexao(true);
    };
    const handleCancelConexao = () => {
        setOpenModalConexao(false);
    };

    const profilePicture = logo;

    return (

        <div className="menu-lateral-field">

            <div className="menu-lateral">
                <div className="menu-lateral_menu-begin" onClick={showModalConexao}>

                    <img src={logo} alt="Logo AyanCare" />
                    <a className="btn-conectar">+ Conectar</a>
                    <p className="p-menu">Menu</p>
                </div>

                <div className="navigation-icon">
                    <a className="home-icon-link" href="/home" 
                        style={{
                            background: location.pathname == '/home'? '#35225F' : 'transparent',
                            borderRadius: '4px'
                        }}
                    >
                        <img className="home-icon" src={iconHome} alt="" 
                        style={{
                            filter: location.pathname == '/home'? 'invert(100%)' : 'none'
                        }}/>
                    </a>
                    <a className="agenda-icon-link" href="/agenda"
                    style={{
                            background: location.pathname == '/agenda'? '#35225F' : 'transparent',
                            borderRadius: '4px'
                        }}
                        >
                        <img className="agenda-icon" src={iconCalendario} alt="" 
                        style={{
                            filter: location.pathname == '/agenda'? 'invert(100%)' : 'none'
                        }}/>
                    </a>
                    <a className="relatorios-icon-link" href="/relatorios" 
                    style={{
                            background: location.pathname == '/relatorios'? '#35225F' : 'transparent',
                            borderRadius: '4px'
                        }}>
                        <img className="relatorios-icon" src={iconRelatorio} alt="" 
                        style={{
                            filter: location.pathname == '/relatorios'? 'invert(100%)' : 'none'
                        }}/>
                    </a>
                    <a className="pacientes-icon-link" href="/pacientes"
                    style={{
                            background: location.pathname == '/pacientes'? '#35225F' : 'transparent',
                            borderRadius: '4px'
                        }}>
                        <img className="pacientes-icon" src={iconPaciente} alt="" 
                        style={{
                            filter: location.pathname == '/pacientes'? 'invert(100%)' : 'none'
                        }}/>
                    </a>
                </div>
                <div className="configuration-icons" >
                    <Space wrap>
                        <Popover placement="rightBottom" title={"Notificações"} content={(
                            <div>
                                <PopoverCardNotifications
                                title={'Alarme'}
                                description={'Está na hora de tomar 2 uni. de paracetamol'}
                                time={'12min'}
                                />
                                <PopoverCardNotifications
                                title={'Alarme'}
                                description={'Está na hora de tomar 2 uni. de paracetamol'}
                                time={'12min'}
                                />
                                <PopoverCardNotifications
                                title={'Alarme'}
                                description={'Está na hora de tomar 2 uni. de paracetamol'}
                                time={'12min'}
                                />
                            </div>
                        )} trigger="click">
                            <Button className="btn-icons" >
                                <img className="icons-notification" src={iconSino} alt="" />
                            </Button>
                        </Popover>
                    </Space>

                    <a className="btn-icons" onClick={showModalSetting}>
                        <img className="icons-notification" src={iconConfig} alt="" />
                    </a>


                </div>
            </div>
            <ModalSetting open={openModalSetting} onCancel={handleCancelSetting} />
            <ModalConectar onCancel={handleCancelConexao} onOpen={openModalConexao}/>
            
        </div>
    )

}

export default Menu;