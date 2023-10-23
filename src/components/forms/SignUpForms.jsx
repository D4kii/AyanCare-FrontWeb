import React from "react";
import InputComponent from '../input/Input.jsx';
import TextArea from "antd/es/input/TextArea.js";
import Button from "../button/button.jsx";
import ProfilePicture from "../profile-picture/ProfilePicture.jsx";
import './forms.css';


function SignUpForms({
    handleSubmitFunction,

    setStateNameParameter,
    setStateBirthParameter,
    setStateEmailParameter,
    setStatePasswordParameter,
    setStateIdGeneroParameter,
    setStateExperienceDescriptionParameter,

    nomeUseState,
    birthUseState,
    emailUseState,
    passwordUseState,
    idGeneroState,
    descricaoExperienciaState
}) {

    //use state

    const setStateName = setStateNameParameter;
    const setStateBirth = setStateBirthParameter;
    const setStateEmail = setStateEmailParameter;
    const setStatePassword = setStatePasswordParameter;
    const setStateIdGenero = setStateIdGeneroParameter;
    const setStateExperienceDescription = setStateEmailParameter;

    const nome = nomeUseState;
    const birth = birthUseState;
    const email = emailUseState;
    const password = passwordUseState;
    const idGenero = idGeneroUseState;
    const experienceDescription = experienceDescriptionUseState;

    //Variáveis voltadas para a estilização e aos dados de dentro das tags
    const widthForSmallInputs = '20vw'
    const widthForBiggestInputs = '41vw'
    const maxWidthForBiggestInputs = '600px'
    const heightForTextArea = '21vh'

    const nameUser = 'Nome'
    const lastNameUser = 'Sobrenome'

    const bithUser = 'Data de Nascimento'
    const genderUser = 'Gênero'

    const typeEmail = 'email'
    const typePassword = 'password'
    const typeText = 'text'
    const typeSelect = 'Select'

    const fieldSenha = 'Senha'
    const fieldConfirmationSenha = 'Confirme a senha'
    const fieldEmail = 'E-mail'

    return (
        <form className="forms">
            <div className='form_inputs-field'>
                <ProfilePicture></ProfilePicture>
                <div className="form_name-user">
                    <InputComponent
                        textFielName={nameUser}
                        typeInput={typeText}
                        idName={'nomeCadastro'}
                        width={widthForSmallInputs}
                        inputUseStateValue={nome}
                        setStateFunction={setStateName}
                    />
                </div>
                <div className="form_gender-and-birth-user">
                    <InputComponent
                        textFielName={bithUser}
                        typeInput={typeText}
                        idName={'nascimentoCadastro'}
                        width={widthForSmallInputs}
                        inputUseStateValue={birth}
                        setStateFunction={setStateBirth}
                    />
                    <InputComponent
                        textFielName={genderUser}
                        typeInput={typeSelect}
                        idName={'generoCadastro'}
                        width={widthForSmallInputs}
                        inputUseStateValue={idGenero}
                        setStateFunction={setStateIdGenero}
                    />
                </div>
                <div className="form_user-experience">
                    <p className="text-area_title">Descrição  de experiência(opcional): </p>
                    <TextArea
                        style={{
                            width: widthForBiggestInputs,
                            height: heightForTextArea,
                            maxWidth: maxWidthForBiggestInputs
                        }}
                        value={descricaoExperienciaState}
                        onChange={setStateExperienceDescription}
                    />

                </div>
                <InputComponent
                    textFielName={fieldEmail}
                    typeInput={typeEmail}
                    idName={'emailCadastro'}
                    width={widthForBiggestInputs}
                    maxWidth={maxWidthForBiggestInputs}
                />
                <InputComponent t
                    extFielName={fieldSenha}
                    typeInput={typePassword}
                    idName={'senhaCadastro'}
                    width={widthForBiggestInputs}
                    maxWidth={maxWidthForBiggestInputs}
                />
                <InputComponent
                    textFielName={fieldConfirmationSenha}
                    typeInput={typePassword}
                    idName={'confirmacaoSenhaCadastro'}
                    width={widthForBiggestInputs}
                    maxWidth={maxWidthForBiggestInputs} />
            </div>
            <Button nameButton={'Próximo'}></Button>
        </form>

    )
}

export default SignUpForms;