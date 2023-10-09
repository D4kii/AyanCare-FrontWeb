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
        const recoveredUser = localStorage.getItem("user");

        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false);
    }, []);

    const login = async (email, password) => {
        
        const response = await createSessionUsuarioAutenticar(email, password);
        
        console.log('login auth', response.data);

        const loggedUser = response.data.cuidador;

        //localStorage só aceita strings e não objetos
        // JSON.stringfy() para fazer essa conversão, já que loggedUser é um objeto
        localStorage.setItem("user", JSON.stringify(loggedUser));

        if (password === 'secret') {

            setUser(loggedUser);
            navigate("/home")
        }
    };

    const logout = () => {
        console.log('logout');
        
        localStorage.removeItem("user"); //Limpa o localStorage para que a pessoa não tenha mais acesso 

        setUser(null);
        navigate("/login")
    };

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

