import { Button, DatePicker, Form, Input, Select, Spin, Tooltip, } from "antd";
import React, { useEffect, useState } from "react";
import ProfilePicture from "../../profile-picture/ProfilePicture";
import { getCuidador, updateCuidador } from "../../../services/api";
import locale from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br'

dayjs.locale('pt-br')

function CuidadorEditarProfile({ onCancel }) {

    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];

    const cuidadorLocalStorage = localStorage.getItem('cuidador')
    const tokenLocalStorage = localStorage.getItem('token')
    const cuidadorJSON = cuidadorLocalStorage ? JSON.parse(cuidadorLocalStorage) : null;
    const idCuidador = cuidadorJSON ? cuidadorJSON.id : null;


    const [form] = Form.useForm();
    const [imagem, setImagem] = useState('');
    const [cuidadorData, setCuidadorData] = useState({});
    const [loading, setLoading] = useState(true);

    const validateAge = (rule, value) => {
        return new Promise((resolve, reject) => {
            if (value) {
                const dob = new Date(value);
                const today = new Date();
                const age = today.getFullYear() - dob.getFullYear();

                if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
                    age; // Ainda não fez aniversário neste ano
                }

                if (age < 16) {
                    reject('Você deve ter pelo menos 16 anos de idade.');
                } else {
                    resolve();
                }
            } else {
                reject('Por favor, insira sua data de nascimento.');
            }
        });
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const cuidadorResponse = await getCuidador(tokenLocalStorage, idCuidador);
                setCuidadorData(cuidadorResponse.cuidador);


                form.setFieldsValue({
                    nome: cuidadorResponse.cuidador.nome,
                    foto: cuidadorResponse.cuidador.foto,
                    data_nascimento: '01/01/2007',
                    genero: cuidadorResponse.cuidador.genero.values,
                    descricao_experiencia: cuidadorResponse.cuidador.descricao_experiencia,
                });
            } catch (error) {
                console.error('Erro ao buscar dados do cuidador:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [form, idCuidador, tokenLocalStorage]);

    const onFinish = async (values) => {
        console.log('values', values + imagem);
        try {
            const dadosUpdate = {
                "nome": values.nome,
                "foto": imagem,
                "id_genero": JSON.parse(values.genero),
                "descricao_experiencia": values.descricao_experiencia
            }
            // Substitua 'SEU_ID_DE_CUIDADOR' pelo ID correto do cuidador
            console.log(dadosUpdate);
            const updateCuidadorProfile = await updateCuidador(idCuidador, dadosUpdate);
            onCancel(); // Fecha o modal após a atualização
        } catch (error) {
            console.error('Erro ao atualizar dados do cuidador:', error);
        }
    };
    // Preenche automaticamente os campos do formulário
    console.log('hhh', cuidadorData);
    return (
        <Tooltip title="Carregando...">
            <Spin spinning={loading}>

                {cuidadorData ?
                    <Form
                        form={form}
                        name="register"
                        onFinish={onFinish}
                        layout="vertical"
                        style={{
                            height: '50vh'
                        }}
                    >
                        <Form.Item
                            name={'foto'}
                            className="profile-image_cuidador">
                            <ProfilePicture
                                imagem={imagem}
                                setImagem={setImagem}

                            />
                        </Form.Item>
                        <Form.Item
                            name={'nome'}
                            label='Nome'
                        >
                            <Input
                            />
                        </Form.Item>

                        {/* <Form.Item
                        name="data_nascimento"
                        label='Data de Nascimento'
                        rules={[
                            {
                                validator: validateAge
                            },
                        ]}
                        style={{
                            wordWrap: 'none'
                        }}

                    >
                        <DatePicker
                            format={dateFormatList}
                            id="nascimentoCadastro"
                            
                        />
                    </Form.Item> */}
                        <Form.Item
                            name={'genero'}
                            label='Gênero'
                        >
                            <Select placeholder="selecione seu gênero"
                                id="generoCadastro"
                                style={{
                                }}
                            >
                                <Option value="1">Homem</Option>
                                <Option value="2">Mulher</Option>
                                <Option value="3">Outro</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="descricao_experiencia"
                            label="Descrição  de experiência:"

                        >
                            <Input.TextArea
                                showCount maxLength={300}
                                style={{
                                    height: '15vh'
                                }}
                            />
                        </Form.Item>

                        <div
                            style={{
                                display: 'flex',
                                gap: '1rem',
                                justifyContent: 'flex-end', // Alinhe os botões à direita
                            }}
                        >
                            <Button
                                onClick={onCancel}
                            >
                                Cancelar
                            </Button>
                            <Button
                                type="primary"  // Adicione o tipo de botão 'primary'
                                htmlType="submit"  // Defina o tipo de HTML como 'submit'
                                style={{
                                    background: '#35225F',
                                    color: '#fff'
                                }}
                            >
                                Salvar
                            </Button>
                        </div>


                    </Form>
                    :
                    <div>

                        <p>algo deu errado</p>
                        <Button
                            onClick={onCancel}
                        >
                            Voltar
                        </Button>
                    </div>
                }

            </Spin>
        </Tooltip>
    );
}

export default CuidadorEditarProfile;