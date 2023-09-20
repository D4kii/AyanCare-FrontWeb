import React from "react";
import "../forms/forms.css"
import InputComponent from '../../components/input/Input.jsx';


const Forms = () => {

    const fieldSenha = 'Senha'
    const fieldEmail = 'E-mail'
    
    return(
    <div className="Forms">
        <InputComponent textFielName ={fieldEmail}></InputComponent>
        <InputComponent textFielName ={fieldSenha}></InputComponent>

    </div>

    )
}

export default Forms;