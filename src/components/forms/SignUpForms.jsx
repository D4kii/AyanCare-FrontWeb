import React from "react";
import InputComponent from '../input/Input.jsx';

function SignUpForms() {
    const fieldSenha = 'Senha'
    const fieldConfirmationSenha = 'Confirme a senha'
    const fieldEmail = 'E-mail'

    return (
        <div className="forms">
            <div>
                <InputComponent textFielName={fieldEmail} typeInput={'email'} idName={'emailCadastro'}></InputComponent>
                <InputComponent textFielName={fieldSenha} typeInput={'password'} idName={'senhaCadastro'}></InputComponent>
                <InputComponent textFielName={fieldConfirmationSenha} typeInput={'password'} idName={'confirmacaoSenhaCadastro'}></InputComponent>
            </div>
        </div>

    )
}

export default SignUpForms;