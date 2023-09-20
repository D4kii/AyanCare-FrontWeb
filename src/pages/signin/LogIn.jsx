import React from "react";

import Forms from "../../components/forms/forms";


function SignIn() {

    console.log(Forms);

    return (
        <div className="LoginScreen">
            <h1>LOGIN</h1>
            <Forms/>
        </div>
    )

}

export default SignIn;