import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Menu from '../../../components/menu/menu';
import CardPacientes from '../../../components/card-pacientes/CardPaciente';
import Perfil from '../../../images/equipe.jpg'
import { SearchOutlined } from '@ant-design/icons'
import './pacientes.css'
import { Avatar, Empty, Input, List, Modal, Skeleton } from 'antd';

import { getPacientesByIDCuidador, getPacienteById } from '../../../services/api';
import Loading from '../../../components/loading/Loading';
import ModalPacienteProfile from '../../../components/modal-paciente-profile/ModalPacienteProfile';


const Pacientes = ({ }) => {
    // //Pegando o json do cuidador e o token como string do localStorage
    const cuidadorLocalStorage = localStorage.getItem('cuidador')
    const cuidadorJSON = cuidadorLocalStorage ? JSON.parse(cuidadorLocalStorage) : null;
    const idCuidador = cuidadorJSON ? cuidadorJSON.id : null;

    const [openModalProfile, setOpenModalProfile] = useState(false)

    const [loading, setLoading] = useState(true);

    const [paciente, setPaciente] = useState("");
    const [selectedPaciente, setSelectedPaciente] = useState(null);

    const handleOpenPacienteProfile = async (idPaciente) => {
        try {
            const dadosPaciente = await getPacienteById(idPaciente);
            setSelectedPaciente(dadosPaciente);
            setOpenModalProfile(true);
        } catch (error) {
            console.error('Erro ao buscar dados do paciente:', error);
        }
    }

    const handleCancel = () => {
        setOpenModalProfile(false)
    }

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
    console.log(paciente);


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
                    <Input type="search"
                        placeholder="Pesquisar"
                        style={{
                            width: '40vw',
                            maxWidth: '900px',
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
                                <List
                                    className="demo-loadmore-list"
                                    itemLayout="horizontal"
                                    dataSource={paciente.conexao}
                                    renderItem={(item) => (
                                        <List.Item
                                            actions={[<a key="list-loadmore-more" >ver relatórios</a>, <a key="list-loadmore-more" >ver agenda</a>]}
                                            key={item.id_teste_humor}
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
                                                    title={<a onClick={() => handleOpenPacienteProfile(item.id_paciente)}>{item.paciente}</a>}
                                                    description={item.observacao}
                                                />
                                                <div>{item.data}</div>
                                            </Skeleton>
                                        </List.Item>
                                    )}
                                />
                            ) : loading ? (
                                <Loading />
                            ) : (
                                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'Nenhum paciente conectado'} />
                            )
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