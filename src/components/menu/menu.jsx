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
const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
);


function Menu() {


    const [openModal, setOpenModal] = useState(false);
    const showModal = () => {
        setOpenModal(true);
    };
    const handleCancel = () => {
        setOpenModal(false);
    };

    const profilePicture = logo;

    return (

        <div className="menu-lateral-field">

            <div className="menu-lateral">
                <div className="menu-lateral_menu-begin">

                    <img src={logo} alt="Logo AyanCare" />
                    <a className="btn-conectar">+ Conectar</a>
                    <p className="p-menu">Menu</p>
                </div>

                <div className="navigation-icon">
                    <a className="home-icon-link" href="/home" >
                        <img className="home-icon" src={iconHome} alt="" />
                    </a>
                    <a className="agenda-icon-link" href="/agenda">
                        <img className="agenda-icon" src={iconCalendario} alt="" />
                    </a>
                    <a className="relatorios-icon-link" href="/relatorios" >
                        <img className="relatorios-icon" src={iconRelatorio} alt="" />
                    </a>
                    <a className="pacientes-icon-link" href="/pacientes">
                        <img className="pacientes-icon" src={iconPaciente} alt="" />
                    </a>
                </div>
                <div className="configuration-icons" >
                    <Space wrap>
                        <Popover content={content} title="Title" trigger="focus">
                            <Button className="btn-icons" >
                                <img className="icons-notification" src={iconSino} alt="" />
                            </Button>
                        </Popover>
                    </Space>

                    <a className="btn-icons" onClick={showModal}>
                        <img className="icons-notification" src={iconConfig} alt="" />
                    </a>


                </div>
            </div>
            <ModalSetting open={openModal} onCancel={handleCancel} />
        </div>
    )

}

export default Menu;