import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { api, createUsuario } from "../services/api";
import { AuthContext } from './auth';

export const RegisterContext = createContext();

export const registerProvider = ({ children }) => {

  
  const { login, logout } = useContext(AuthContext);

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

  const logup = async (nome, dataNascimento, email, senha, idGenero) => {

    const response = await createUsuario(nome, dataNascimento, email, senha, idGenero);
    console.log(response);

    const registerUser = response.data.cuidador;
    const token = response.data.token;
    const status = response.data.status;

    //localStorage só aceita strings e não objetos
    // JSON.stringfy() para fazer essa conversão, já que loggedUser é um objeto
    localStorage.setItem("cuidador", JSON.stringify(registerUser));
    localStorage.setItem("token", token);
    localStorage.setItem("status", status);

    api.defaults.headers.Authorization = `Bearer ${token}`;
    if (status == 201) {
      setUser(registerUser);
      navigate("/home")
      login(response.data.cuidador.email. response.data.cuidador.senha)

    } else {
      navigate("/error-500")
      console.log('erro meu camarada');
    }


  };

  return (
    <AuthContext.Provider value={{ authenticated: !!user, user, loading, login, logout }}>
        {children}
    </AuthContext.Provider>
)
}
