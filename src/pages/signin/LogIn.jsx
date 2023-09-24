import React from "react";
import '../signin/login.css';
import Forms from "../../components/forms/forms";


function SignIn() {

    console.log(Forms);

    return (
        <div className="login-screen">
            <h1>Bem vindo de Volta!</h1>
            <h3>AyanCare é tudo que você precisa para administrar, de forma eficiente e prática, sua rotina com seus pacientes e seus compromissos do cotidiano.</h3>
            <Forms/>
        </div>
    )

}

export default SignIn;