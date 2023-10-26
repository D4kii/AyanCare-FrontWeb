import React from "react";
import '../signup/signup.css';
import SignUpForms from "../../components/forms/SignUpForms";
import Button from "../../components/button/button";
import WelcomeContainer from "../../components/welcome-container/Welcome_Container";
import image from "../../images/logo-branca.png"
import TitleAndSubtitle from "../../components/title-and-subtitle/TitleAndSubtile";
import LinkCadastroLogin from "../../components/link-cadastro-login/LinkCadastroLogin";
import { useState } from "react";

function Signup() {

    const [name, setName] = useState();
    const [birth, setBith] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [nome, setNome] = useState();
    const [idGenero, setIdGenero] = useState();
    const [descricaoExperiencia, setDescricaoExperiencia] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit", { email, password, });
    }

    const welcomeSingUpTitle = 'Cadastre-se.'
    const welcomeSingUpSubtitle = 'Bem-vindo a tela de cadastro! Insira seu e-mail e senha para seguirmos para a próxima etapa.'

    const welcomeContainerTitle = 'Bem-vindo ao nosso Aplicativo'
    const welcomeContainerSubtitle = 'Transforme o cuidado em uma jornada gratificante.'

    return (
        <div className="login-screen">
            <div className="forms-field">
                <div className="forms-field_space">

                    <div className="forms-organization">
                        <div className="register-field">
                            <SignUpForms />
                        </div>
                    </div>
                </div>
            </div>
            <div className="welcome-field">
                <WelcomeContainer title={welcomeContainerTitle} text={welcomeContainerSubtitle} logo={image} />
            </div>
        </div>
    )

}

export default Signup;