import React from "react";

import Forms from "../../components/forms/forms";


function SignIn() {

    console.log(Forms);

    return (
        <div className="LoginScreen">
            <h1>Bem vindo de Volta!</h1>
            <h3>Transforme o cuidado em uma jornada gratificante.</h3>
            <Forms/>
        </div>
    )

}

export default SignIn;