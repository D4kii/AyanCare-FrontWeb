import React from "react";
import '../signin/login.css';
import SignUpForms from "../../components/forms/SignUpForms";
import Button from "../../components/button/button";
import WelcomeContainer from "../../components/welcome-container/Welcome_Container";
import image from "../../images/logo-branca.png"
import TitleAndSubtitle from "../../components/title-and-subtitle/TitleAndSubtile";
import LinkCadastroLogin from "../../components/link-cadastro-login/LinkCadastroLogin";

function Signup() {

    const welcomeSingUpTitle = 'Cadastre-se.'
    const welcomeSingUpSubtitle = 'Bem-vindo a tela de cadastro! Insira seu e-mail e senha para seguirmos para a próxima etapa.'

    const welcomeContainerTitle = 'Bem-vindo ao nosso Aplicativo'
    const welcomeContainerSubtitle = 'Transforme o cuidado em uma jornada gratificante.'

    return (
        <div className="login-screen">
            <div className="forms-field">
                <div className="forms-organization">
                    <TitleAndSubtitle title={welcomeSingUpTitle} subtitle={welcomeSingUpSubtitle} />
                    <SignUpForms />
                    <LinkCadastroLogin caminho={'cadastro'} />
                </div>
            </div>
            <div className="welcome-field">
                <WelcomeContainer title={welcomeContainerTitle} text={welcomeContainerSubtitle} logo={image} />
            </div>
        </div>
    )

}

export default Signup;