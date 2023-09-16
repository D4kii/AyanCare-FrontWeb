import axios from "axios";
import { useContext } from "react";
import { createContext } from "react";
import {
    createContent,
    useContent,
    useEffect,
    useMemo,
    useState,
} from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    //tokenrepresenta o token de autenticação.
    //"localStorage.getItem("token")" recupera o valor do token do armazenamento local, se existir.
    const [token, setToken_] = useState(localStorage.getItem("token"));

    const setToken = (newToken) => {
        setToken_(newToken);

    }

    //Este efeito é executado sempre que o valor token muda.
    //Se token existir, ele define o cabeçalho de autorização em axios e localStorage.
    //Se o token for nulo ou indefinido, ele removerá o cabeçalho de autorização de axios e localStorage.
    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = "Bearer" + token;
            localStorage.setItem('token', token);
        } else {
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem('token')
        }
    }, [token]);

    //Memoriza o valor do contexto de autenticação
    const contextValue = useMemo(
        () => ({
            token,
            setToken,
        }),
        [token]
    );
    
    //Fornece o contexto de autenticação aos componentes filhos
    return(
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );

};
export const useAuth = () => {
    return useContext(AuthContext);
  };
  
  export default AuthProvider;

