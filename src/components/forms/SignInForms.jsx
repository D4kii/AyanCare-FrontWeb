import React, { useState } from "react";
import InputComponent from '../input/Input.jsx';
import CheckboxField from '../checkbox/Checkbox.jsx';
import ForgotPassword from "../forgot-password/ForgotPassword.jsx";
import Button from "../button/button.jsx";
import './forms.css';

function SignInForms(handleSubmitFunction, setStatePasswordParameter, setStateEmailParameter, emailUseState, passwordUseState) {
    const fieldSenha = 'Senha'
    const fieldConfirmationSenha = 'Confirme a senha'
    const fieldEmail = 'E-mail'
    const checkboxText = 'Lembrar de mim.'

    const setStateEmail = setStateEmailParameter;
    const setStatePassword = setStatePasswordParameter;

    const email = emailUseState;
    const password = passwordUseState;

    const handleSubmit = handleSubmitFunction;

    return (
        <form className="forms" onSubmit={handleSubmit}>
            <div>
                <InputComponent textFielName={fieldEmail}
                                typeInput={'email'} 
                                idName={'emailLogin'} 
                                inputUseStartValue={email} 
                                setStateFunction={
                                    setStateEmail
                                    }/>

                <InputComponent textFielName={fieldSenha} 
                                typeInput={'password'} 
                                idName={'senhaLogin'}
                                inputUseStartValue={password} 
                                setStateFunction={
                                    setStatePassword
                                    }/>
            </div>
            <div className="forms-check-field">
                <CheckboxField checkBoxName={checkboxText} />
                <ForgotPassword />
            </div>
            <Button nameButton={'Entrar'}></Button>
        </form>

    )
}

export default SignInForms;