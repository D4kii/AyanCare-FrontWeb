import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Menu from '../../../components/menu/menu';
import CardPacientes from '../../../components/card-pacientes/CardPaciente';
import Perfil from '../../../images/equipe.jpg'
import { SearchOutlined } from '@ant-design/icons'
import './pacientes.css'
import { Avatar, Empty, Input, List, Modal, Skeleton, Button } from 'antd';

import { getPacientesByIDCuidador, getPacienteById, getConexaoByIDCuidadorAndPacientName } from '../../../services/api';
import Loading from '../../../components/loading/Loading';
import ModalPacienteProfile from '../../../components/modal-paciente-profile/ModalPacienteProfile';

const Pacientes = ({ }) => {
    // //Pegando o json do cuidador e o token como string do localStorage
    const cuidadorLocalStorage = localStorage.getItem('cuidador')
    const cuidadorJSON = cuidadorLocalStorage ? JSON.parse(cuidadorLocalStorage) : null;
    const idCuidador = cuidadorJSON ? cuidadorJSON.id : null;

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredPacientes, setFilteredPacientes] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [openModalProfile, setOpenModalProfile] = useState(false)
    const [loading, setLoading] = useState(true);
    const [paciente, setPaciente] = useState("");
    const [selectedPaciente, setSelectedPaciente] = useState(null);



    const handleCancel = () => {
        setOpenModalProfile(false)
    }

    const handleOpenPacienteProfile = async (idPaciente) => {
        try {
            const dadosPaciente = await getPacienteById(idPaciente);
            setSelectedPaciente(dadosPaciente);
            setOpenModalProfile(true);
        } catch (error) {
            console.error('Erro ao buscar dados do paciente:', error);
        }
    }

    const handleSearch = async (value) => {
        setSearchTerm(value);
        setIsSearching(true);
        console.log(value);

        try {
            // Utilizando a função getConexaoByIDCuidadorAndPacientName para obter os resultados da pesquisa
            const result = await getConexaoByIDCuidadorAndPacientName(idCuidador, value);
            console.log(result);
            setFilteredPacientes(result);
        } catch (error) {
            console.error('Erro ao buscar dados da API:', error);
        }
    };

    const handleCancelSearch = () => {
        setSearchTerm("");
        setIsSearching(false);
        setSearchTerm(null)
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataPacientesByCuidador = await getPacientesByIDCuidador(idCuidador);
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
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'end'
                }}
            >
                <div className="paciente">
                    <h1 className='pacientes-page_title'>Pacientes</h1>
                    <div
                        style={{
                            display: 'flex',
                            gap:'1rem'
                        }}
                    >
                        <Input
                            className='input-search' type="search"
                            placeholder="Pesquisar"
                            style={{
                                width: '40vw',
                                maxWidth: '900px',
                                fontFamily: 'manrope',
                                fontSize: '1rem',
                                height: '3rem',
                                color: '#7E6F94',
                                fontWeight: 400
                            }}
                            prefix={<SearchOutlined style={{
                                fontSize: '1.1rem',
                                color: '#7E6F94'
                            }} />}
                            onChange={(e) => handleSearch(e.target.value)}
                            value={searchTerm}
                        />
                        {isSearching && (
                            <Button onClick={handleCancelSearch} style={{ color: '#7E6F94', height:'3rem' }}>
                                Cancelar
                            </Button>
                        )}
                    </div>
                    <div className="card-pacientes_field">
                        {
                            <List
                                className="demo-loadmore-list"
                                itemLayout="horizontal"
                                locale={{
                                    emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'Nenhum Teste feito ainda'} />
                                }}
                                dataSource={(isSearching ? filteredPacientes.conexao : paciente.conexao)}
                                renderItem={(item) => (
                                    <List.Item
                                        key={item.id_teste_humor}
                                        actions={[<a key="list-loadmore-more" onClick={() => handleOpenPacienteProfile(item.id_paciente)}>ver perfil</a>]}
                                        style={{
                                            padding: '1rem',
                                            marginBottom: '1.5rem',
                                            borderRadius: '4px',
                                            border: '1px solid #DBD7E2'
                                        }}
                                    >
                                        <Skeleton avatar title={item.paciente} loading={item.loading} active>
                                            <List.Item.Meta
                                                style={{
                                                    width: '18vw',
                                                    height: '2.5rem',
                                                    maxWidth: '700px',
                                                    alignItems: 'center',
                                                }}
                                                avatar={<Avatar src={item.foto_paciente} />}
                                                title={<a >{item.paciente}</a>}
                                                description={item.observacao}
                                            />
                                            <div>{item.data}</div>
                                        </Skeleton>
                                    </List.Item>
                                )} />
                        }
                    </div>
                </div>
            </div>

            <ModalPacienteProfile
                openModal={openModalProfile}
                onCancel={handleCancel}
                dataPaciente={selectedPaciente}
            />
        </div>
    );
}

export default Pacientes;
