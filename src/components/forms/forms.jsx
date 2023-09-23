import React from "react";
import "../forms/forms.css";
import InputComponent from '../input/Input.jsx';
import CheckboxField from '../checkbox/checkbox.jsx';
import ForgotPassword from "../forgot-password/forgotPassword.jsx";


const Forms = () => {

    const fieldSenha = 'Senha'
    const fieldEmail = 'E-mail'
    const checkboxText = 'Lembrar de mim.'

    return (
        <div className="forms">
            <InputComponent textFielName={fieldEmail}></InputComponent>
            <InputComponent textFielName={fieldSenha}></InputComponent>
            <div className="forms-check-field">
                <CheckboxField checkBoxName={checkboxText} />
                <ForgotPassword />
            </div>
        </div>

    )
}

export default Forms;