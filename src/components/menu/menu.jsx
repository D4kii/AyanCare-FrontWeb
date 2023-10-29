import React from "react";
import logo from '../../images/logo.png'
import './menu.css'
import iconHome from '../../images/home-icon.png'
import iconCalendario from '../../images/agenda-icon.png'
import iconRelatorio from '../../images/relatorio-icon.png'
import iconPaciente from '../../images/paciente-icon.png'
import iconSino from '../../images/sino-icon.png'
import iconConfig from '../../images/config-icon.png'

function Menu() {


    const profilePicture = logo;

    return (

        <div className="menu-lateral-field">

            <div className="menu-lateral">
                <img src={logo} alt="Logo AyanCare" />
                <a className="btn-conectar">+ Conectar</a>
                <p className="p-menu">Menu</p>

                <div className="navigation-icon">
                    <a className="home-icon" href="/home" >
                        <img className="home-icon" src={iconHome} alt="" />
                    </a>
                    <a className="agenda-icon" href="/agenda">
                        <img className="agenda-icon" src={iconCalendario} alt="" />
                    </a>
                    <a className="relatorios-icon" href="/relatorios" >
                        <img className="relatorios-icon" src={iconRelatorio} alt="" />
                    </a>
                    <a className="pacientes-icon" href="/pacientes">
                        <img className="pacientes-icon" src={iconPaciente} alt="" />
                    </a>
                </div>
                <div className="configuration-icons">
                    <a className="btn-icons" href="/">
                        <img className="icons-notification" src={iconSino} alt="" />
                    </a>
                    <a className="btn-icons" href="/">
                        <img className="icons-notification" src={iconConfig} alt="" />
                    </a>
                    <div className="profile-field">
                        <a href="">
                            <span>Profile</span>
                        </a>
                        <div className="picture-profile"
                            style={{
                                borderRadius: '50px',
                                backgroundImage: `url(${profilePicture})`,
                                backgroundSize: 'cover',
                                backgroundColor: '#D0D5DD'
                            }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Menu;