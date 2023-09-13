import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Agenda from "../pages/Agenda";
import Relatorios from "../pages/Relatorios";
import Pacientes from "../pages/Pacientes";

const Routes = () => {
    return(
        <BrowserRouter>
            <Route Component = { Home } path = "/" exact />
            <Route Component = { Agenda } path = "/agenda" />
            <Route Component = { Relatorios } path = "/relatorios" />
            <Route Component = { Pacientes } path = "/pacientes" />
        </BrowserRouter>
    )
}

export default Routes;