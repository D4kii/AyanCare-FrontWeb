import React from 'react';
import { Link } from "react-router-dom";
import Menu from '../../../components/menu/menu';
import CardPacientes from '../../../components/card-pacientes/CardPaciente';
import Perfil from '../../../images/equipe.jpg'
import './pacientes.css'

const Pacientes = () => {
    return (
        <div>
            <Menu />
            <div class="paciente">
                <h1>Pacientes</h1>
                <input type="Pesquisar" />
                <CardPacientes 
                PacienteAge={'84 anos'}
                PacienteName={'Clarice'}
                PacienteProfilePicture={Perfil}
                />
                <Link to="/Home">retornar a página inicial</Link>
            </div>
        </div>

    );
}

export default Pacientes;