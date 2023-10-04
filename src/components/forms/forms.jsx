import React from "react";
import "../forms/forms.css";
import InputComponent from '../input/Input.jsx';
import CheckboxField from '../checkbox/Checkbox.jsx';
import ForgotPassword from "../forgot-password/ForgotPassword.jsx";


const Forms = ({ page }) => {

    const pagePlace = page;

    const fieldSenha = 'Senha'
    const fieldConfirmationSenha = 'Confirme a senha'
    const fieldEmail = 'E-mail'
    const checkboxText = 'Lembrar de mim.'

    if (page == 'login') {
        return (
            <div className="forms">
                <div>
                    <InputComponent textFielName={fieldEmail}></InputComponent>
                    <InputComponent textFielName={fieldSenha}></InputComponent>
                </div>
                <div className="forms-check-field">
                    <CheckboxField checkBoxName={checkboxText} />
                    <ForgotPassword />
                </div>
            </div>

        )
    } else if (page == 'cadastro') {

        return (
            <div className="forms">
                <div>
                    <InputComponent textFielName={fieldEmail}></InputComponent>
                    <InputComponent textFielName={fieldSenha}></InputComponent>
                    <InputComponent textFielName={fieldConfirmationSenha}></InputComponent>
                </div>
            </div>

        )

    }

}







export default Forms;