import React, { useEffect, useState } from "react";
import './contas-desvinculadas.css'
import { ativarContasDesvinculadas, getContasDesativadasIDCuidador } from "../../services/api";
import { Avatar, Empty, List, Modal, Popconfirm, Skeleton } from "antd";

function ContasDesvinculadasScreen({ idCuidador }) {

    const [loading, setLoading] = useState(true);
    const [paciente, setPaciente] = useState(null);

    const handleReconectar = async (idPaciente) => {
        console.log(idPaciente, idCuidador.id);
        try {
            // Chama a função para ativar a conta desvinculada
            await ativarContasDesvinculadas(idCuidador.id, idPaciente);
            // Atualiza os dados, você pode chamar novamente a API ou atualizar o estado diretamente
            const newData = await getContasDesativadasIDCuidador(idCuidador.id);
            setPaciente(newData);
        } catch (error) {
            console.error('Erro ao reconectar:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                //Api de Pacientes por id do cuidador
                const dataPacientesDesvinculadosByCuidador = await getContasDesativadasIDCuidador(idCuidador.id);

                setPaciente(dataPacientesDesvinculadosByCuidador);
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
        <div className="contas-desvinculadas_screen">
            <div className="contas-desvinculadas_content">
                <h2 className="contas-desvinculadas_content-title">Contas Desvinculadas</h2>
            </div>
            <div className="card-pacientes_field">
                {
                    paciente && paciente.conexao ? (
                        <List
                            className="demo-loadmore-list"
                            itemLayout="horizontal"
                            dataSource={paciente.conexao}
                            renderItem={(item) => (
                                <List.Item
                                    actions={[
                                        <Popconfirm
                                            title="Vincular contas novamente"
                                            description="Tem certeza que deseja restaurar as conexões com esse perfil?"
                                            okText="Sim"
                                            onConfirm={() => handleReconectar(item.id_paciente)}
                                            cancelText="Não"
                                        >
                                            <a key="list-loadmore-more" >
                                                Reconectar
                                            </a>
                                        </Popconfirm>
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
                                            title={<a >{item.paciente}</a>}
                                            description={item.observacao}
                                        />
                                        <div>{item.data}</div>
                                    </Skeleton>
                                </List.Item>
                            )}
                        />
                    ) : loading ? (
                        <loading />
                    ) : (
                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'Nenhuma conta desvinculada'} />
                    )
                }


            </div>
        </div>
    );
}

export default ContasDesvinculadasScreen;