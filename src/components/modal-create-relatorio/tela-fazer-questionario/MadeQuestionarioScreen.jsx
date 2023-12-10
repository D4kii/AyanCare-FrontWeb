import { Button, Divider, Flex, Form, Input, Radio, Space } from "antd";
import React, { useState } from "react";
import '../create-relatorio-modal.css'
import Loading from "../../loading/Loading";
import { CheckCircleTwoTone, MinusCircleOutlined, MinusCircleTwoTone, PlusOutlined, SmileOutlined } from "@ant-design/icons";
import { createPerguntaQuestionarioRelatorio } from "../../../services/api";

function MadeQuestionarioScreen(
    {
        questionarioParameterUseState,
        loadingParameterUseState,
        setLoadingParameterUseState,
        respostasParameterUseState,
        setRespostasParameterUseState,
        idRelatorioParameterUseState,
        toggleModoQuestionarioFunction,
        onFinishQuestionarioFunction,
        idCuidador
    }
) {
    const [form] = Form.useForm();

    const [carregandoPerguntaFeita, setCarregandoPerguntaFeita] = useState(false)

    const [perguntas, setPerguntas] = useState([
        { id: 1, first: '', last: '' } // Exemplo de pergunta inicial
    ]);

    const handleChange = (perguntaId, value) => {
        // Atualize o estado respostas com os novos valores
        const newRespostas = { ...respostas, [perguntaId]: value };
        console.log('LALALA', newRespostas);
        // Atualize o estado com as novas respostas
        setRespostasParameterUseState(newRespostas);
    };


    const questionario = questionarioParameterUseState;
    const loading = loadingParameterUseState;
    const respostas = respostasParameterUseState;
    const onFinishQuestionario = onFinishQuestionarioFunction;
    const toggleModoQuestionario = toggleModoQuestionarioFunction;
    console.log(questionario);
    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
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
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '.1rem'
                        }}
                    >
                        <h2 className="create-relatorio-modal_title">
                            Questionário
                        </h2>
                        <h4 className="create-relatorio_description">
                            Registre informações importantes sobre o dia do paciente com o Questionário do Relatório. Sua participação é fundamental para um cuidado mais eficiente.
                        </h4>
                        <Divider />
                    </div>
                    {loading ? (

                        <Loading />
                    ) : (
                        questionario?.questionario.map((perguntas) => (
                            <>
                                <span>{perguntas.pergunta}</span>
                                <div
                                    style={{
                                        display: 'Flex',
                                        maxWidth: '300px',
                                        flexdire: 'column',
                                        gap: '.5rem',
                                    }}
                                >
                                    <Form.Item
                                        style={{
                                            width: '50vw',
                                            marginLeft: '1rem'
                                        }}
                                        key={perguntas.id}
                                        name={perguntas.id}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Você esqueceu de responder uma pergunta. Responda a todas por favor!'
                                            }
                                        ]}
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

                                    </Form.Item>
                                </div>

                            </>
                        ))
                    )}



                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Form.Item>
                            <Button type="primary" htmlType="submit"
                                style={{
                                    backgroundColor: '#35225F '
                                }}>
                                Criar Relatório
                            </Button>
                        </Form.Item>
                    </div>

                </Form>)}
        </div>
    );
}

export default MadeQuestionarioScreen;