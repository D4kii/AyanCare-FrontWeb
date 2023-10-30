import React from 'react';
import { Link } from "react-router-dom";
import Menu from '../../../components/menu/menu';
import CardPacientes from '../../../components/card-pacientes/CardPaciente';
import Perfil from '../../../images/equipe.jpg'
import { SearchOutlined } from '@ant-design/icons'
import './pacientes.css'
import { Input } from 'antd';

const Pacientes = () => {
    return (
        <div>
            <Menu />
            <div class="paciente">
                <h1 className='pacientes-page_title'>Pacientes</h1>
                <Input type="search"
                    placeholder="Pesquisar"
                    style={{
                        width: '40vw',
                        maxWidth: '800px',
                        fontFamily: 'manrope',
                        fontSize: '1rem',
                        color: '#7E6F94',
                        fontWeight: 400
                    }}
                    prefix={<SearchOutlined style={{
                        fontSize: '1.1rem',
                        color: '#7E6F94'
                    }} />}
                />
                <div className="card-pacientes_field">
                    <CardPacientes
                        PacienteAge={'84 anos'}
                        PacienteName={'Clarice'}
                        PacienteProfilePicture={Perfil}
                    />
                    <CardPacientes
                        PacienteAge={'84 anos'}
                        PacienteName={'Clarice'}
                        PacienteProfilePicture={Perfil}
                    />

                </div>
            </div>
        </div>

    );
}

export default Pacientes;