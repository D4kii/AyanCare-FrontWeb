import React, { useState } from "react";
import InputComponent from '../input/Input.jsx';
import CheckboxField from '../checkbox/Checkbox.jsx';
import ForgotPassword from "../forgot-password/ForgotPassword.jsx";
import Button from "../button/button.jsx";

function SignInForms() {
    const fieldSenha = 'Senha'
    const fieldConfirmationSenha = 'Confirme a senha'
    const fieldEmail = 'E-mail'
    const checkboxText = 'Lembrar de mim.'

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("submit", {email, password});
    }

    return (
        <form className="forms" onSubmit={handleSubmit}>
            <div>
                <InputComponent textFielName={fieldEmail}
                                typeInput={'email'} 
                                idName={'emailLogin'} 
                                inputUseStartValue={email} 
                                setStateFunction={
                                    (event) => setEmail(event.target.value)
                                    }/>

                <InputComponent textFielName={fieldSenha} 
                                typeInput={'password'} 
                                idName={'senhaLogin'}
                                inputUseStartValue={password} 
                                setStateFunction={
                                    (event) => setPassword(event.target.value)
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