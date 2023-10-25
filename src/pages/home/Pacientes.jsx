import React from 'react';
import { Link } from "react-router-dom";

const Pacientes = () => {
    return (
        <div>
            <h1>Pacientes</h1>
            <Link to="/Home">retornar a página inicial</Link>
        </div>
    );
}

export default Pacientes;