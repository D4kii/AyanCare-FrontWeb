import React from "react";
import './linkCadastroLogin.css'


function LinkCadastroLogin({caminho}) {

    let textLink;
    let textQuestion;
    let routesWay;

    if (caminho == 'login') {
        textLink = 'Faça Cadastro';
        textQuestion = 'Não tem uma conta?';
        routesWay = "/signup";
    }else if(caminho == 'cadastro'){
        textLink = 'Faça Login';
        textQuestion = 'Já tem uma Conta?';
        routesWay = "/login";
    }
    

    return(
        <div className="link-cadastro-login_field">
            <span>{textQuestion}</span>
            <li>
                <a href={routesWay}>{textLink}</a>
            </li>
        </div>
    )
}

export default LinkCadastroLogin;