import React, { createContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { api, createSessionUsuarioAutenticar } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        //usuário existente ou não no localStorage
        const recoveredUser = localStorage.getItem("cuidador");
        
        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }
        
        setLoading(false);
    }, []);
    
    const login = async (email, senha) => {
        
        const response = await createSessionUsuarioAutenticar(email, senha);
        console.log(response);
        
        const loggedUser = response.data.cuidador;
        const token = response.data.token;

        //localStorage só aceita strings e não objetos
        // JSON.stringfy() para fazer essa conversão, já que loggedUser é um objeto
        localStorage.setItem("cuidador", JSON.stringify(loggedUser));
        localStorage.setItem("token", token);

        api.defaults.headers.Authorization = `Bearer ${token}`;


        setUser(loggedUser);
        navigate("/home")

    };

    const logout = () => {
        console.log('logout');

        localStorage.removeItem("cuidador"); //Limpa o localStorage para que a pessoa não tenha mais acesso 
        localStorage.removeItem("token"); //Limpa o localStorage para que a pessoa não tenha mais acesso 
        api.defaults.headers.Authorization = null;
        setUser(null);
        navigate("/login")
    };

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

