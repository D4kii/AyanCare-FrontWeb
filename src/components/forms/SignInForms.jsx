import React from "react";
import InputComponent from '../input/Input.jsx';
import CheckboxField from '../checkbox/Checkbox.jsx';
import ForgotPassword from "../forgot-password/ForgotPassword.jsx";

function SignInForms() {
    const fieldSenha = 'Senha'
    const fieldConfirmationSenha = 'Confirme a senha'
    const fieldEmail = 'E-mail'
    const checkboxText = 'Lembrar de mim.'

    return (
        <div className="forms">
            <div>
                <InputComponent textFielName={fieldEmail} typeInput={'email'} idName={'emailLogin'}></InputComponent>
                <InputComponent textFielName={fieldSenha} typeInput={'password'} idName={'senhaLogin'}></InputComponent>
            </div>
            <div className="forms-check-field">
                <CheckboxField checkBoxName={checkboxText} />
                <ForgotPassword />
            </div>
        </div>

    )
}

export default SignInForms;