import React from "react";
import '../signin/login.css';
import Forms from "../../components/forms/forms";
import Button from "../../components/button/button";
import WelcomeContainer from "../../components/welcome-container/Welcome_Conainer";


function SignIn() {

    console.log(Forms);

    return (
        <div className="login-screen">
            <div className="forms-field">
                <div className="forms-organization">
                    <div className="forms-field_title">
                        <h1>Bem vindo de Volta!</h1>
                        <h3>AyanCare é tudo que você precisa para administrar, de forma eficiente e prática, sua rotina com seus pacientes e seus compromissos do cotidiano.</h3>
                    </div>
                    <Forms />
                    <Button nameButton={'Entrar'} />
                </div>
            </div>
            <div className="welcome-field">
                <WelcomeContainer title={'Bem vindo ao nosso Aplicativo'} text={'Transforme o cuidado em uma jornada gratificante.'} />
            </div>
        </div>
    )

}

export default SignIn;