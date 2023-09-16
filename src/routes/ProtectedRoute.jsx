import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../authProvider";

export const ProtectedRoute = () => {
    const { token } = useAuth();
    console.log('verificando o' + token);

    //Vai checar se o usuário é autenticado
    if (!token || token == null) {
        //Se não for autenticado, será encaminhado para a página de login
        return <Navigate to="/login" />;
    }
    //Se for autenticado, renderizará as rotas filhas
    return <Outlet />;
};