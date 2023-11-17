import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Menu from '../../../components/menu/menu';
import CardPacientes from '../../../components/card-pacientes/CardPaciente';
import Perfil from '../../../images/equipe.jpg'
import { SearchOutlined } from '@ant-design/icons'
import './pacientes.css'
import { Input } from 'antd';

import { getPacientesByIDCuidador } from '../../../services/api';


const Pacientes = ({ }) => {
    // //Pegando o json do cuidador e o token como string do localStorage
    const cuidadorLocalStorage = localStorage.getItem('cuidador')
    const cuidadorJSON = cuidadorLocalStorage ? JSON.parse(cuidadorLocalStorage) : null;
    const idCuidador = cuidadorJSON ? cuidadorJSON.id : null;

    const [loading, setLoading] = useState(true);

    const [paciente, setPaciente] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                //Api de Pacientes por id do cuidador
                const dataPacientesByCuidador = await getPacientesByIDCuidador(idCuidador);

                console.log(dataPacientesByCuidador);

                setPaciente(dataPacientesByCuidador);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
                setLoading(false);
            }
        };

        if (idCuidador) {
            fetchData();
        }
    }, [idCuidador]);


    return (
        <div>
            <Menu />
            <div className="paciente">
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
                    {
                        paciente && paciente.conexao ? (
                            paciente.conexao.map((paciente) => (
                                <CardPacientes
                                    key={paciente.id_paciente}
                                    PacienteName={paciente.paciente}
                                    PacienteProfilePicture={paciente.foto_paciente}
                                />
                            ))
                        ) : (
                            <p>Nenhum paciente conectado.</p>
                        )
                    }


                </div>
            </div>
        </div>

    );
}

export default Pacientes;