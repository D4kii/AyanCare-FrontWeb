import {
    Route,
    BrowserRouter as Router,
    Routes,
    Navigate
} from "react-router-dom";
import React, { useContext } from "react";
import LandingPage from "../pages/LandingPage";
import Home from "../pages/home/Home.jsx";
import Agenda from "../pages/home/Agenda";
import Pacientes from "../pages/home/Pacientes";
import Relatorios from "../pages/home/Relatorios";
import SignIn from "../pages/signin/LogIn.jsx";
import Signup from "../pages/signup/CadastroEmail.jsx";

import { AuthContext, AuthProvider } from "../contexts/auth";

const AppRoutes = () => {

    //Função que avalia se o valor do contexto é autenticado ou não, redirecionando para suas respectivas páginas
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return (
                <div className="loading">Carregando...</div>
            )
        }

        if (!authenticated) {
            return <Navigate to="/login" />
        }

        return children;
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route
                        exact path="/login"
                        element={<SignIn />}
                    />
                    <Route
                        exact path="/"
                        element={<LandingPage />}
                    />
                    <Route
                        exact path="/signup"
                        element={<Signup />}
                    />
                    <Route
                        exact path="/home"
                        element={
                            <Private>
                                <Home />
                            </Private>} />
                    <Route
                        exact path="/agenda"
                        element={
                            <Private>
                                <Agenda />
                            </Private>} />
                    <Route
                        exact path="/pacientes"
                        element={
                            <Private>
                                <Pacientes />
                            </Private>} />
                    <Route
                        exact path="/relatorios"
                        element={
                            <Private>
                                <Relatorios />
                            </Private>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
};

export default AppRoutes;

