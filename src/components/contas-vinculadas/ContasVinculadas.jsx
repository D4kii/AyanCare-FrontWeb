import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import CardPacientes from "../card-pacientes/CardPaciente";
import { DeleteTwoTone, DownOutlined, MoreOutlined, PlusOutlined } from '@ant-design/icons'
import './contas-vinculadas.css'

import { getPacienteById, getPacientesByIDCuidador, desativarContasVinculadas } from "../../services/api";
import ModalConectar from "../conectar-modal/ModalConectar";
import { Avatar, Dropdown, Empty, List, Modal, Skeleton, Space } from "antd";
import Loading from "../loading/Loading";
import ModalPacienteProfile from "../modal-paciente-profile/ModalPacienteProfile";

const items = [
    {
        label: 'Desvincular',
        key: '0',
    }
];

function ContasVinculadasScreen({ }) {

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [idPacienteSelected, setIdPacienteSelected] = useState(null);

    // //Pegando o json do cuidador e o token como string do localStorage
    const cuidadorLocalStorage = localStorage.getItem('cuidador')
    const cuidadorJSON = cuidadorLocalStorage ? JSON.parse(cuidadorLocalStorage) : null;
    const idCuidador = cuidadorJSON ? cuidadorJSON.id : null;

    const [openModalConexao, setOpenModalConexao] = useState(false);
    const [loading, setLoading] = useState(true);

    const [paciente, setPaciente] = useState(null);

    const showModalConexao = () => {
        setOpenModalConexao(true);
    };
    const handleCancelConexao = () => {
        setOpenModalConexao(false);
    };
    const [openModalProfile, setOpenModalProfile] = useState(false)

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

    const handleOkModalConfirm = async () => {
        setConfirmLoading(true);
        try {
            await desativarContasVinculadas(idCuidador, idPacienteSelected);
            const newData =  await getPacientesByIDCuidador(idCuidador);
            setPaciente(newData)
            setConfirmLoading(false);
            setOpen(false)
        } catch (error) {
            console.error('Erro ao desvincular contas:', error);
        }

    };

    const showModal = (idPaciente) => {
        setIdPacienteSelected(idPaciente);
        setOpen(true);
    };

    const handleCancelModalConfirm = () => {
        setOpen(false);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                //Api de Pacientes por id do cuidador
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
        <>
            {loading ?
                <Loading />
                :
                <div className="contas-vinculadas_screen">
                    <div className="contas-vinculadas_titulo-criar-vinculo">
                        <h2 className="contas-vinculadas_title">
                            Contas Vinculadas
                        </h2>
                        <Button
                            nameButton={'Criar vínculo'}
                            iconButton={<PlusOutlined />}
                            heigthButton={'2rem'}
                            textSize={'1rem'}
                            onClick={showModalConexao}
                        />

                    </div>
                    <div className="contas-vinculadas_cards-pacientes">
                        {
                            paciente && paciente.conexao ? (
                                <List
                                    className="demo-loadmore-list"
                                    itemLayout="horizontal"
                                    dataSource={paciente.conexao}
                                    renderItem={(item) => (
                                        <List.Item
                                            actions={[
                                                // <a key="list-loadmore-more" >ver relatórios</a>,
                                                // <a key="list-loadmore-more" >ver agenda</a>,
                                                <Dropdown
                                                    menu={{
                                                        items,
                                                        onClick:()=> showModal(item.id_paciente),
                                                    }}
                                                    trigger={['click']}

                                                >
                                                    <a onClick={(e) => e.preventDefault()}>
                                                        <Space>
                                                            <MoreOutlined />
                                                        </Space>
                                                    </a>
                                                </Dropdown>
                                            ]}
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
                                                    description={`#${item.id_paciente}`}
                                                />
                                                <div>{item.data}</div>
                                            </Skeleton>
                                        </List.Item>
                                    )}
                                />
                            ) : loading ? (
                                <loading />
                            ) : (
                                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'Nenhuma conta vinculada ainda'} />
                            )
                        }

                    </div>
                    <ModalConectar
                        onOpen={openModalConexao}
                        onCancel={handleCancelConexao}
                    />
                    <ModalPacienteProfile
                        openModal={openModalProfile}
                        onCancel={handleCancel}
                        dataPaciente={selectedPaciente}
                    />
                    <Modal
                        title="Title"
                        open={open}
                        onOk={handleOkModalConfirm}
                        confirmLoading={confirmLoading}
                        onCancel={handleCancelModalConfirm}
                    >
                        <p>Tem certeza que deseja devincular as contas?</p>
                    </Modal>

                </div>
            }
        </>

    );
}

export default ContasVinculadasScreen;