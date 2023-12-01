import React, { useEffect, useState } from "react";
import './create-relatorio-modal.css'

//COMPONENTES
import { Button, ConfigProvider, Form, Input, InputNumber, Modal, Radio, Select, message } from "antd";
import MadeQuestionarioScreen from "./tela-fazer-questionario/MadeQuestionarioScreen";
import MadeRelatorioScreen from "./tela-fazer-relatorio/MadeRelatorioScreen";

//API
import { getPacientesByIDCuidador, getPerguntasQuestionarioRelatorio, createRelatorio, createQuestionarioRelatorio } from "../../services/api";



//Pegar o usuario para fazer a verificação se ele existe 
const cuidadorLocalStorage = localStorage.getItem('cuidador')

function CreateRelatorioModal(
    {
        open,
        onCancel,
        setOpenModal
    }
) {

    const [messageApi, contextHolder] = message.useMessage();

    const ErrorMessage = (message) => {
        messageApi.open({
            type: 'error',
            content: message,
        });
    };
    const success = () => {
        Modal.success({
            content: 'some messages...some messages...',
        });
    };

    const [perguntasEnviadas, setPerguntasEnviadas] = useState(0);
    const [loading, setLoading] = useState(true);
    const [pergunta, setPergunta] = useState("");
    const [paciente, setPaciente] = useState("");
    const [respostas, setRespostas] = useState({});
    const [modoQuestionario, setModoQuestionario] = useState(false);
    const [idRelatorio, setIdRelatorio] = useState({})

    const cuidadorJSON = cuidadorLocalStorage ? JSON.parse(cuidadorLocalStorage) : null;
    const idCuidador = cuidadorJSON ? cuidadorJSON.id : null;

    const toggleModoQuestionario = () => {
        setModoQuestionario((prevModoQuestionario) => !prevModoQuestionario);
    };

    const handleChange = (selectedOption) => {
        const { value } = selectedOption;
    };


    const onFinishMadeRelatorio = async (values) => {
        try {
            const relatorio = {
                "texto_relatorio": values.relatorio,
                "validacao": 1,
                "id_paciente": values.paciente.value,
                "id_cuidador": idCuidador,
            };

            // Chama a API para criar o relatório
            const response = await createRelatorio(relatorio);



            setIdRelatorio(response.data)

            // Ativa o modo de questionário
            setModoQuestionario(true);
        } catch (error) {
            // Lida com erros na chamada da API
            console.error('Erro ao criar relatório:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                //Api de perguntas
                const dataPerguntasQuestionario = await getPerguntasQuestionarioRelatorio();
                //Api de Pacientes por id do cuidador
                const dataPacientesByCuidador = await getPacientesByIDCuidador(idCuidador);

                // const dataCreateRelatorio = await createRelatorio();

                setPaciente(dataPacientesByCuidador);
                setPergunta(dataPerguntasQuestionario)
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


    const onFinishMadeQuestionario = async (values) => {
        try {
            for (const dadosPergunta of pergunta.perguntas) {
                const questionario = {
                    "id_pergunta": dadosPergunta.id,
                    "id_relatorio": idRelatorio.relatorio.id,
                    "resposta": respostas[dadosPergunta.id]
                };

                // Chama a API para criar o questionário
                await createQuestionarioRelatorio(questionario);
            }

            // Todas as perguntas foram enviadas, exibe a mensagem de sucesso
            Modal.success({
                content: 'Relatório realizado com sucesso!',
                okText: 'Ok',
                onOk: () => {
                    setOpenModal(false);
                    window.location.reload();
                },
            });
            setModoQuestionario(false)
        } catch (error) {
            ErrorMessage("Erro ao criar Questionário");
            console.error('Erro ao criar Questionário:', error);
        }
    };




    return (
        <div>
            <ConfigProvider
                theme={{
                    components: {
                        Modal: {
                            padding: 0,
                        },
                    }
                }}
            >


                {paciente.status == 200 ? (
                    <Modal
                        open={open}
                        onCancel={onCancel}
                        title="Criar relatório"
                        footer={null}
                        width={'80vw'}
                        style={{
                            borderRadius: '12px',
                            height: '70vh',
                            width: '80vw',
                            padding: 0
                        }}
                    >
                        <div
                            className='create-relatorio-modal Modal'>

                            {modoQuestionario ? (
                                <MadeQuestionarioScreen
                                    loadingParameterUseState={loading}
                                    perguntaParameterUseState={pergunta}
                                    respostasParameterUseState={respostas}
                                    toggleModoQuestionarioFunction={toggleModoQuestionario}
                                    idRelatorioParameterUseState={idRelatorio}
                                    onFinishQuestionarioFunction={onFinishMadeQuestionario}
                                    setRespostasParameterUseState={setRespostas}
                                />
                            ) : (
                                <MadeRelatorioScreen
                                    onCancelParameterUseState={onCancel}
                                    loadingParameterUseState={loading}
                                    pacienteParameterUseState={paciente}
                                    onFinishFunction={onFinishMadeRelatorio}
                                    handleChangeSelect={handleChange}
                                    toggleModoQuestionarioFunction={toggleModoQuestionario}
                                />
                            )}


                        </div>
                    </Modal>
                ) :
                    (
                        <Modal

                            open={open}
                            onCancel={onCancel}
                            title={'Vincule sua conta'}
                            content={'Não é possível realizar um relatorio sem Conexão com algum paciente'}
                            okText='ok'
                            onOk={onCancel}
                        >
                            <p>Não é possível realizar um relatorio sem Conexão com algum paciente</p>
                        </Modal>
                    )}
            </ConfigProvider>

        </div >
    );
}

export default CreateRelatorioModal;