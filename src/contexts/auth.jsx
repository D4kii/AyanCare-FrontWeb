import React, { createContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { api, createSessionUsuarioAutenticar } from "../services/api";
import { message } from "antd";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [messageApi, contextHolder] = message.useMessage();

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // usuário existente ou não no localStorage
        const recoveredUser = localStorage.getItem("cuidador");
      
        try {
          if (recoveredUser !== null) {
            setUser(JSON.parse(recoveredUser));
          }
        } catch (error) {
          console.error("Erro ao fazer parse do JSON:", error);
        }
      
        setLoading(false);
      }, []);
      
      

    // ... (código anterior)

    const login = async (email, senha) => {
        try {
            const response = await createSessionUsuarioAutenticar(email, senha);
            const loggedUser = response.data.cuidador;
            const token = response.data.token;

            localStorage.setItem("cuidador", JSON.stringify(loggedUser));
            localStorage.setItem("token", token);

            api.defaults.headers.Authorization = `Bearer ${token}`;

            setUser(loggedUser);
            navigate("/home");
        } catch (error) {
            if (error.response) {
                // O servidor respondeu com um status de erro (por exemplo, 404, 500)
                const status = error.response.status;
                if (status === 404) {
                    messageApi.error('Usuário não encontrado. Verifique seu e-mail e senha.');
                    console.log('Usuário não encontrado. Verifique seu e-mail e senha.');
                } else {
                    messageApi.error(`Erro ${status}: Ocorreu um problema durante a autenticação.`);
                }
            } else if (error.request) {
                // A requisição foi feita, mas não houve resposta do servidor
                messageApi.error('Sem resposta do servidor. Verifique sua conexão com a internet.');
            } else {
                // Ocorreu um erro durante a configuração da requisição
                messageApi.error('Erro na requisição. Tente novamente mais tarde.');
            }

            throw error;
        }
    };

    // ... (código posterior)


    const logout = () => {
        console.log('logout');

        localStorage.removeItem("cuidador"); //Limpa o localStorage para que a pessoa não tenha mais acesso 
        localStorage.removeItem("token"); //Limpa o localStorage para que a pessoa não tenha mais acesso 
        api.defaults.headers.Authorization = null;
        setUser(null);
        navigate("/login")
    };

    return (
        <>
            {contextHolder}
            <AuthContext.Provider value={{ authenticated: !!user, user, loading, login, logout }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

