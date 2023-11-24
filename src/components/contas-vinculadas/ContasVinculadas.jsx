import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import CardPacientes from "../card-pacientes/CardPaciente";
import { PlusOutlined } from '@ant-design/icons'
import './contas-vinculadas.css'

import { getPacientesByIDCuidador } from "../../services/api";
import ModalConectar from "../conectar-modal/ModalConectar";
import { Empty } from "antd";
import Loading from "../loading/Loading";

function ContasVinculadasScreen({ }) {
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
                        {paciente && paciente.conexao ? (
                            paciente.conexao.map((conexao) => (
                                <CardPacientes
                                    PacienteName={conexao.paciente}
                                    PacienteProfilePicture={conexao.foto_paciente}
                                />
                            ))
                        ) : (
                            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'Nenhum Paciente Encontrado'} />
                        )}

                    </div>
                    <ModalConectar
                        onOpen={openModalConexao}
                        onCancel={handleCancelConexao}
                    />

                </div>
            }
        </>

    );
}

export default ContasVinculadasScreen;