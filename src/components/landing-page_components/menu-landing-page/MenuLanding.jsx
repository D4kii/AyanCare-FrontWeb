import React from "react";
import './menu-landing-page.css'
import image from '../../../images/logo-branca.svg'
import ButtonsLandingPage from "../buttons-landing-page/ButtonsLandingPage";

function MenuLandingPage() {

    return (
        <div className="landing-page_field-menu">
            <nav>
                <ul className="menu">
                    <div className="menu_logo">
                        <img src={image} alt="AyanCare" />
                        <span className="nome-logo">AyanCare</span>
                    </div>
                    <li>
                        <a href="#about-us">Sobre Nós</a>
                    </li>
                    <li>
                        <a href="#platforms">Plataformas</a>
                    </li>
                    <li>
                        <a href="#contacts">Contato</a>
                    </li>
                <ButtonsLandingPage nameButtonLogin={'Fazer Login'} nameButtonSignup={'Cadastrar-se'} />
                </ul>
            </nav>
        </div>
    )

}

export default MenuLandingPage;