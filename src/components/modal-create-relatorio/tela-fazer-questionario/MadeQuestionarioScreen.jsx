import { Button, Flex, Form, Radio } from "antd";
import React from "react";
import '../create-relatorio-modal.css'
import Loading from "../../loading/Loading";

function MadeQuestionarioScreen(
    {
        perguntaParameterUseState,
        loadingParameterUseState,
        respostasParameterUseState,
        setRespostasParameterUseState,
        idRelatorioParameterUseState,
        toggleModoQuestionarioFunction,
        onFinishQuestionarioFunction

    }
) {
    const [form] = Form.useForm();


    const handleChange = (perguntaId, value) => {
        // Atualize o estado respostas com os novos valores
        const newRespostas = { ...respostas, [perguntaId]: value };
        // Atualize o estado com as novas respostas
        setRespostasParameterUseState(newRespostas);
    };

    const pergunta = perguntaParameterUseState;
    const loading = loadingParameterUseState;
    const respostas = respostasParameterUseState;
    const onFinishQuestionario = onFinishQuestionarioFunction;
    const toggleModoQuestionario = toggleModoQuestionarioFunction;
    console.log(idRelatorioParameterUseState);
    return (
        <div>
            <Form
                form={form}
                name="create-questionario"
                onFinish={onFinishQuestionario}
                style={{
                    maxWidth: '80vw',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    marginLeft: '1rem',
                }}
                layout="vertical"
                scrollToFirstError>
                <h2 className="create-relatorio-modal_title">
                    Questionário
                </h2>
                {loading ? (
                    <Loading />
                ) : (
                    pergunta.perguntas.map((perguntas) => (
                        <Form.Item
                            style={{
                                width: '50vw'
                            }}
                            key={perguntas.id}
                            name={perguntas.id}
                        >
                            <span>{perguntas.pergunta}</span>
                            <div
                                style={{
                                    display: 'Flex',
                                    maxWidth: '300px',
                                    flexdire: 'column',
                                    gap: '1.5rem',
                                }}
                            >
                                <Radio.Group
                                    onChange={(e) => handleChange(perguntas.id, e.target.value)}
                                    style={{
                                        display: 'flex'
                                    }}
                                    value={respostas[perguntas.id]}
                                >
                                    <Radio value={true}>Sim</Radio>
                                    <Radio value={false}>Não</Radio>
                                </Radio.Group>

                            </div>
                        </Form.Item>
                    ))
                )}
                {/* <Button onClick={toggleModoQuestionario}>Voltar</Button> */}
                <Form.Item

                >
                    <Button type="primary" htmlType="submit"
                        style={{
                            backgroundColor: '#35225F '
                        }}>
                        Criar Relatório
                    </Button>
                </Form.Item>

            </Form>
        </div>
    );
}

export default MadeQuestionarioScreen;