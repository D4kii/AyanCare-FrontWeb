import { Button, DatePicker, Divider, Form, Input, Modal, Radio, Select, Space, Switch, Tag, TimePicker } from "antd";
import React, { useEffect, useState } from "react";
import './create-evento.css'
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import CheckableTag from "antd/es/tag/CheckableTag";
import { getConexaoByIDCuidadorAndPacienteName, getCores, getPacientesByIDCuidador } from "../../services/api";
import Loading from "../loading/Loading";

const diasDaSemana = [
    {
        label: 'Domingo',
        value: 'Domingo'
    },
    {
        label: 'Segunda-feira',
        value: 'Segunda-feira'
    },
    {
        label: 'Terça-feira',
        value: 'Terça-feira'
    },
    {
        label: 'Quarta-feira',
        value: 'Quarta-feira'
    },
    {
        label: 'Quinta-feira',
        value: 'Quinta-feira'
    },
    {
        label: 'Sexta-feira',
        value: 'Sexta-feira'
    },
    {
        label: 'Sábado',
        value: 'Sábado'
    }];


function ModalCreateEvento({ setOpen, open, idCuidador }) {
    const [form] = Form.useForm();
    
    const [loading, setLoading] = useState(true);
    //Valor cores
    const [cores, setCores] = useState([]);
    const [paciente, setPaciente] = useState("");
    const [value, setValue] = useState(1);
    //Evento semanal? checked
    const [switchChecked, setSwitchChecked] = useState(true);
    const [selectedTags, setSelectedTags] = useState([]);


    useEffect(() => {
        // Função para buscar cores da API
        const fetchCores = async () => {
            try {
                const coresDaApi = await getCores(); // Substitua pela chamada real da sua API
                setCores(coresDaApi);
            } catch (error) {
                console.error('Erro ao buscar cores:', error);
            }
        };
        
        // Chama a função para buscar cores
        fetchCores();
    }, []); // Executa apenas uma vez quando o componente é montado
    
    
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                //Api de Pacientes por id do cuidador
                const dataPacientesByCuidador = await getPacientesByIDCuidador(idCuidador);
                console.log(dataPacientesByCuidador);
                
                setPaciente(dataPacientesByCuidador);
                // const dataCreateRelatorio = await createRelatorio();
                
                
                
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
    
    const changeCondition = (checked) => {
        setSwitchChecked(checked);
    };


    //Valor dias da semana
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    // Função para lidar com a seleção de cores
    const handleColorSelected = (tag, checked) => {
        console.log(tag);
        setSelectedTags(tag);
    };

    const onCancelModal = () => {
        setOpen(false)
    }

    //Pegando os valores para mandar para a api
    const onFinish = async (valuesEvento) => {
        try {
            let id_paciente_cuidador;
    
            if (valuesEvento.paciente && valuesEvento.paciente.key) {
                // Se você tem o id do paciente no form, use-o diretamente
                id_paciente_cuidador = valuesEvento.paciente.key;
            } else {
                // Caso contrário, faça uma chamada à API para obter o id_paciente_cuidador
                const conexao = await getConexaoByIDCuidadorAndPacienteName(idCuidador, valuesEvento.paciente.label);
                id_paciente_cuidador = conexao.id_paciente_cuidador;
            }
    
            const valuesEventosUnicos = {
                "nome": valuesEvento.titulo,
                "descricao": valuesEvento.descricao,
                "local": valuesEvento.local,
                "hora": valuesEvento['horario_evento'].format('HH:mm'),
                "dia": valuesEvento['data_evento_unico'].format('DD/MM/YYYY'),
                "idPaciente": id_paciente_cuidador,
                "idCuidador": idCuidador,
                "id_cor": selectedTags
            }
    
            const valuesEventosSemanais = {
                "nome": valuesEvento.titulo,
                "descricao": valuesEvento.descricao,
                "local": valuesEvento.local,
                "hora": valuesEvento['horario_evento'].format('HH:mm'),
                "id_paciente_cuidador": id_paciente_cuidador,
                "dias": valuesEvento.dias_semana_evento_semanal,
                "cor_id": selectedTags
            }
    
            console.log('eventosubmit', valuesEventosSemanais);
        } catch (error) {
            console.error('Erro ao processar o formulário:', error);
        }
    }
    
    return (
        <Modal
        open={open}
        title={'Criar Evento'}
        onCancel={onCancelModal}
        footer={null}
        width={'60vw'}
            style={{
                maxWidth: '1100px',
            }}
        >
            <div
                className="create-evento_screen Modal">
                <Form
                    form={form}
                    name="evento_resgister"
                    onFinish={onFinish}
                    layout="vertical"
                    style={{
                        width: '90%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        marginLeft: '5%'

                    }}
                    scrollToFirstError
                >
                    <div
                    >
                        <Form.Item
                            label={'Título'}
                            name={'titulo'}
                            rules={[{ required: true, message: 'Por favor, insira o título do evento!' }]}
                        >
                            <Input style={{ width: '700px', height: '2.5rem' }} />
                        </Form.Item>
                        <Space size={[8, 8]} wrap>
                            <Form.Item
                                label={'Cor do evento'}
                                name={'cor_evento'}
                                getValueFromEvent={selectedTags}
                            >
                                {cores.cores?.map((cor) => (
                                    <Tag
                                        key={cor.id} // Ou alguma outra propriedade única
                                        color={`rgb(${cor.hex})`}
                                        onClick={(checked) => handleColorSelected(cor.id, checked)}
                                        style={{
                                            cursor: 'pointer',
                                            border: selectedTags == cor.id ? '3px solid #35225F' : 'none',
                                        }}
                                    >
                                        <div
                                            style={{
                                                height: '1rem',
                                                width: '.3rem'
                                            }}
                                        />
                                    </Tag>
                                ))}
                            </Form.Item>
                        </Space>

                    </div>
                    <Divider orientation="left" orientationMargin="0">Dia e horário</Divider>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row-reverse',
                            alignItems: "center",
                            justifyContent: 'space-between',
                            width: '100%',
                            gap: '5rem'
                        }}
                    >
                        <Switch
                            defaultChecked
                            onChange={changeCondition}
                        />
                        <Form.Item
                            label={'Dias da semana'}
                            name={'dias_semana_evento_semanal'}
                        >
                            <Select
                                mode="multiple"
                                allowClear
                                style={{
                                    height: `2.5rem`,
                                    width: '400px'
                                }}
                                placeholder="Please select"
                                onChange={handleChange}
                                options={diasDaSemana}
                                disabled={!switchChecked}
                            />
                        </Form.Item>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '80%'
                        }}
                    >
                        <Form.Item
                            label={'Data'}
                            name={'data_evento_unico'}
                        >

                            <DatePicker bordered={false}
                                disabled={switchChecked} />
                        </Form.Item>
                        <Form.Item
                            label={'Horário'}
                            name={'horario_evento'}
                        >
                            <TimePicker bordered={false} format={'HH:mm'} />
                        </Form.Item>
                    </div>

                    <Divider orientation="left" orientationMargin="0">Evento</Divider>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '80%'
                        }}
                    >
                        <Form.Item
                            label={'Local'}
                            name={'local'}
                        >
                            <Input style={{
                                height: `2.5rem`
                            }} />
                        </Form.Item>
                        <Form.Item
                            label={'Paciente'}
                            name={'paciente'}
                        >
                            <Select
                                defaultValue=""
                                style={{ width: 200 }}
                                onChange={handleChange}
                                labelInValue="Paciente"
                            >
                                {loading ? (
                                    <Select.Option key="loading" value="loading">
                                        <Loading />
                                    </Select.Option>
                                ) : (
                                    paciente.conexao.map(conexao => (
                                        <Select.Option key={conexao.id_paciente} value={conexao.id_paciente}>
                                            {conexao.paciente}
                                        </Select.Option>
                                    ))
                                )}
                            </Select>
                        </Form.Item>

                    </div>
                    <Form.Item
                        label={'Descrição'}
                        name={'descricao'}
                    >
                        <TextArea
                            style={{ width: '700px' }}
                            placeholder="Controlled autosize"
                            autoSize={{
                                minRows: 3,
                                maxRows: 5,
                            }}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit">
                            Criar Evento
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        </Modal>
    );
}

export default ModalCreateEvento;