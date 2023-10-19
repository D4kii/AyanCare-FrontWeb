import React from "react";
import './menu-landing-page.css'
import image from '../../images/logo.png'
import ButtonsLandingPage from "../buttons-landing-page/ButtonsLandingPage";

function MenuLandingPage() {

    return (
        <div className="landing-page_field-menu">
            <nav>
                <a href="#" className="container-barra">
                    <i className="menu-barra"></i>
                </a>
                <ul className="menu">
                    <div className="logo">
                        <img src={image} alt="AyanCare" />
                    </div>
                    <li>
                        <a href="#">Sobre Nós</a>
                    </li>
                    <li>
                        <a href="#">Plataformas</a>
                    </li>
                    <li>
                        <a href="#">Contato</a>
                    </li>
                <ButtonsLandingPage nameButtonLogin={'Fazer Login'} nameButtonSignup={'Cadastrar-se'} />
                </ul>
            </nav>
        </div>
    )

}

export default MenuLandingPage;