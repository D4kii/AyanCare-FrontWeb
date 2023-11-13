import React, { useContext, useState } from "react";
import '../signup/signup.css';
import SignUpForms from "../../components/forms/SignUpForms";
import WelcomeContainer from "../../components/welcome-container/Welcome_Container";
import imagem from "../../images/logo-branca.png"
import { createSessionUsuarioAutenticar } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { storage } from "../../services/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

function Signup() {

    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [birth, setBith] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [idGenero, setIdGenero] = useState("");
    const [descricaoExperiencia, setDescricaoExperiencia] = useState("");

    const navigate = useNavigate();

    const [progress, setProgress] = useState(0)

    

    const onFinish = (fieldsValue) => {
        const values = {
            "nome": fieldsValue.nome,
            "foto": image,
            'data_nascimento': fieldsValue['data_nascimento'].format('YYYY-MM-DD'),
            "email": fieldsValue.email,
            "senha": fieldsValue.password,
            "id_genero": fieldsValue.gender
        };

        fetch('http://localhost:8080/v1/ayan/cuidador', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na solicitação');
                }
                return response.json(); // Aqui leia o JSON da resposta
            })
            .then(data => { // Use os dados retornados
                Modal.success({
                    content: 'Cadastro realizado com sucesso!',
                    okText: 'Logar',
                    onOk: () => {
                        // Navegar para a página de home após o usuário confirmar a modal
                        navigate('/login');
                    },
                });
            })
            .catch(error => { // Use catch para tratar erros
                console.error('Erro:', error);
                if (error.response && error.response.status === 409) {
                    Modal.error({
                        title: 'Erro de Conflito',
                        content: 'Já existe um cadastro com esses dados. Por favor, verifique suas informações e tente novamente.',
                    });
                }
            });
    };

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
                                progress={progress}
                                setProgress={setProgress}
                                imageUseState={image}
                                setStateImageParameter={setImage}
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
                <WelcomeContainer title={welcomeContainerTitle} text={welcomeContainerSubtitle} logo={imagem} />
            </div>
        </div>
    )

}

export default Signup;