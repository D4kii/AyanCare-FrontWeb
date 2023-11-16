import { Form, Input } from "antd";
import Modal from "antd/es/modal/Modal";
import React, { useEffect, useState } from "react";
import SubmitButton from "../button/SubmitButton";
import Button from "../button/Button";
import { createConexaoUsuarios, getPacienteById } from "../../services/api";


const cuidadorLocalStorage = localStorage.getItem('cuidador')

const cuidadorJSON = cuidadorLocalStorage ? JSON.parse(cuidadorLocalStorage) : null;
const idCuidador = cuidadorJSON ? cuidadorJSON.id : null;

function ModalConectar({ onOpen, onCancel }) {
    const [form] = Form.useForm();

    const [paciente, setPaciente] = useState({});
    const [idPaciente, setIdPaciente] = useState({});
    const [loading, setLoading] = useState(true);

    //Pegar o usuario para fazer a verificação se ele existe 

    useEffect(() => {
        const fetchData = async () => {
            try {
                //Api de buscar pacientes
                const dataPacienteById = await getPacienteById();

                // const dataCreateRelatorio = await createRelatorio();

                setPaciente(dataPacienteById);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
                setLoading(false);
            }
        };

        if (idCuidador) {
            fetchData();
        }
    }, [idCuidador]);
    console.log(idCuidador);


    const onFinishMadeConection = async (values) => {
        try {
            const pacienteID = JSON.parse(values.idPaciente);
            const cuidadorID = idCuidador;

            // Chama a API para criar a conexão
            const response = await createConexaoUsuarios(cuidadorID, pacienteID);

            // Exibe a modal de sucesso
            Modal.success({
                content: 'Conexão feita com sucesso',
                onOk: () => {
                    // Fecha ambas as modais quando o usuário clicar em "OK"
                    onCancel();
                },
            });
        } catch (error) {
            // Lida com erros na chamada da API
            console.error('Erro ao criar conexão:', error);
        }
    };

    return (
        <Modal
            centered
            open={onOpen}
            onCancel={onCancel}
            footer={null}
        >
            <Form
                form={form}
                onFinish={onFinishMadeConection}
                style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '30vh'
                }}>
                <h3>Conectar contas</h3>
                <p>Insira o código de conexao do seu paciente, por favor.</p>

                <Form.Item
                    name={'idPaciente'}
                >
                    <Input
                        value={idPaciente}
                        style={{
                            width: '10rem',
                            height: '3rem',
                            textAlign: 'center',
                            fontSize: '1.2rem'
                        }} />

                </Form.Item>

                <Form.Item
                    name={'button'}
                >

                    <SubmitButton
                        nameButton={'Conectar'}
                        form={form}
                    />

                </Form.Item>

            </Form>

        </Modal>
    );
}

export default ModalConectar;