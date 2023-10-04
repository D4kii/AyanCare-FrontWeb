import React from "react";
import '../signin/login.css';
import Forms from "../../components/forms/forms";
import Button from "../../components/button/button";
import WelcomeContainer from "../../components/welcome-container/Welcome_Container";
import image from "../../images/logo.png"
import TitleAndSubtitle from "../../components/title-and-subtitle/TitleAndSubtile";
import LinkCadastroLogin from "../../components/link-cadastro-login/LinkCadastroLogin";

function SignIn() {

    const welcomeLoginTitle = 'Bem vindo de Volta!'
    const welcomeLoginSubtitle = 'AyanCare é tudo que você precisa para administrar, de forma eficiente e prática, sua rotina com seus pacientes e seus compromissos do cotidiano.'

    const welcomeContainerTitle = 'Bem vindo ao nosso Aplicativo'
    const welcomeContainerSubtitle = 'Transforme o cuidado em uma jornada gratificante.'

    return (
        <div className="login-screen">
            <div className="forms-field">
                <div className="forms-organization">
                    <TitleAndSubtitle title={welcomeLoginTitle} subtitle={welcomeLoginSubtitle} />
                    <Forms page={'login'} />
                    <Button nameButton={'Entrar'} />
                    <LinkCadastroLogin caminho={'login'} />
                </div>
            </div>
            <div className="welcome-field">
                <WelcomeContainer title={welcomeContainerTitle} text={welcomeContainerSubtitle} logo={image} />
            </div>
        </div>
    )

}

export default SignIn;