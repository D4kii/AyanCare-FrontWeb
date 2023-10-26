import React, { useContext, useState } from "react";
import '../signup/signup.css';
import SignUpForms from "../../components/forms/SignUpForms";
import WelcomeContainer from "../../components/welcome-container/Welcome_Container";
import image from "../../images/logo-branca.png"
import { RegisterContext } from "../../contexts/registerUser";

function Signup() {

    const { logup } = useContext(RegisterContext);


    const [name, setName] = useState();
    const [birth, setBith] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [idGenero, setIdGenero] = useState();
    const [descricaoExperiencia, setDescricaoExperiencia] = useState();

    const onFinish = (fieldsValue) => {
        const values = {
            "nome" : fieldsValue.nome,
            'data_nascimento': fieldsValue['data_nascimento'].format('YYYY-MM-DD'),
            "email": fieldsValue.email,
            "senha": fieldsValue.password,
            "id_genero": fieldsValue.gender
        };
        logup(values)
        console.log('submit', values);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit", { name, birth, email, password, idGenero, descricaoExperiencia });
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
                            <SignUpForms 
                            onFinish={onFinish}
                            handleSubmitFunction={handleSubmit}
                            nomeUseState={name}
                            setStateNameParameter={setName}
                            birthUseState={birth}
                            setStateBirthParameter={setBith}
                            emailUseState={email}
                            setStateEmailParameter={setEmail}
                            passwordUseState={password}
                            setStatePasswordParameter={setPassword}
                            idGeneroUseState={idGenero}
                            setStateIdGeneroParameter={setIdGenero}
                            descricaoExperienciaState={descricaoExperiencia}
                            setStateExperienceDescriptionParameter={setDescricaoExperiencia}
                            />
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