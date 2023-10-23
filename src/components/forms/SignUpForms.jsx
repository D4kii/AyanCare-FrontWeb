import React from "react";
import InputComponent from '../input/Input.jsx';
import TextArea from "antd/es/input/TextArea.js";
import Button from "../button/button.jsx";
import ProfilePicture from "../profile-picture/ProfilePicture.jsx";
import './forms.css';

function SignUpForms() {

    const widthForSmallInputs = '20vw'
    const widthForBiggestInputs = '41vw'
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
                    <InputComponent textFielName={nameUser} typeInput={typeText} idName={'nomeCadastro'} width={widthForSmallInputs} />
                    <InputComponent textFielName={lastNameUser} typeInput={typeText} idName={'sobrenomeCadastro'} width={widthForSmallInputs} />
                </div>
                <div className="form_gender-and-birth-user">
                    <InputComponent textFielName={bithUser} typeInput={typeText} idName={'nascimentoCadastro'} width={widthForSmallInputs}></InputComponent>
                    <InputComponent textFielName={genderUser} typeInput={typeSelect} idName={'generoCadastro'} width={widthForSmallInputs}></InputComponent>
                </div>
                <div className="form_user-experience">
                    <p className="text-area_title">Descrição  de experiência(opcional): </p>
                    <TextArea style={{width: widthForBiggestInputs, height: heightForTextArea}}></TextArea>

                </div>
                <InputComponent textFielName={fieldEmail} typeInput={typeEmail} idName={'emailCadastro'} width={widthForBiggestInputs}></InputComponent>
                <InputComponent textFielName={fieldSenha} typeInput={typePassword} idName={'senhaCadastro'} width={widthForBiggestInputs}></InputComponent>
                <InputComponent textFielName={fieldConfirmationSenha} typeInput={typePassword} idName={'confirmacaoSenhaCadastro'} width={widthForBiggestInputs}></InputComponent>
            </div>
            <Button nameButton={'Próximo'}></Button>
        </form>

    )
}

export default SignUpForms;