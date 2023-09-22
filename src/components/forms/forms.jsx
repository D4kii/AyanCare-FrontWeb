import React from "react";
import "../forms/forms.css"
import InputComponent from '../../components/input/Input.jsx';
import CheckboxField from '../checkbox/checkbox.jsx'


const Forms = () => {

    const fieldSenha = 'Senha'
    const fieldEmail = 'E-mail'
    const checkboxText = 'Lembrar de mim.'
    
    return(
    <div className="forms">
        <InputComponent textFielName ={fieldEmail}></InputComponent>
        <InputComponent textFielName ={fieldSenha}></InputComponent>
        <CheckboxField checkBoxName={checkboxText}/>
    </div>

    )
}

export default Forms;