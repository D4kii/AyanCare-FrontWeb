import { Button, DatePicker, Divider, Form, Input, Modal, Radio, Select, Space, Switch, Tag, TimePicker } from "antd";
import React, { useEffect, useState } from "react";
import './create-evento.css'
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import CheckableTag from "antd/es/tag/CheckableTag";
import { getCores } from "../../services/api";

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


function ModalCreateEvento({ setOpen, open }) {
    const [value, setValue] = useState(1);

    const [valueDescription, setValueDescription] = useState('');

    //Evento semanal? checked
    const [switchChecked, setSwitchChecked] = useState(true);
    const changeCondition = (checked) => {
        setSwitchChecked(checked);
    };

    //Valor dias da semana
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    //Valor cores
    const [cores, setCores] = useState([]);

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


    const [selectedTags, setSelectedTags] = useState([]);

    // Função para lidar com a seleção de cores
    const handleColorSelected = (tag, checked) => {
        console.log(tag);
        setSelectedTags(tag);
    };

    const onCancelModal = () => {
        setOpen(false)
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
                    layout="vertical"
                    style={{
                        width: '90%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        marginLeft: '5%'

                    }}
                >
                    <div
                    >
                        <Form.Item
                            label={'Título'}
                        >
                            <Input style={{
                                width: `700px`,
                                height: `2.5rem`
                            }} />
                        </Form.Item>
                        <Form.Item
                            label={'Cor do evento'}
                        >
                            <Space size={[8, 8]} wrap>
                                {cores.cores?.map((cor) => (
                                    <Tag
                                        key={cor.id} // Ou alguma outra propriedade única
                                        color={`rgb(${cor.hex})`}
                                        onClick={(checked) => handleColorSelected(cor.id, checked)}
                                        style={{
                                            cursor:'pointer',
                                            border: selectedTags == cor.id? '3px solid #35225F' : 'none',
                                        }}
                                    >
                                        <div 
                                        style={{
                                            height:'1rem',
                                            width:'.3rem'
                                        }}
                                        />
                                    </Tag>
                                ))}
                            </Space>
                        </Form.Item>

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
                            label={'Data'}>
                            <DatePicker bordered={false}
                                disabled={switchChecked} />
                        </Form.Item>
                        <Form.Item
                            label={'Horário'}>
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
                        >
                            <Input style={{
                                height: `2.5rem`
                            }} />
                        </Form.Item>
                        <Form.Item
                            label={'Paciente'}
                        >
                            <Select
                                defaultValue="lucy"
                                style={{
                                    width: 120,
                                    height: '40px'

                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'jack',
                                        label: 'Jack',
                                    },
                                    {
                                        value: 'lucy',
                                        label: 'Lucy',
                                    },
                                    {
                                        value: 'Yiminghe',
                                        label: 'yiminghe',
                                    },
                                    {
                                        value: 'disabled',
                                        label: 'Disabled',
                                        disabled: true,
                                    },
                                ]}
                            />
                        </Form.Item>

                    </div>
                    <Form.Item
                        label={'Descrição'}
                    >
                        <TextArea
                            value={value}
                            style={{ width: '700px' }}
                            onChange={(e) => setValueDescription(e.target.value)}
                            placeholder="Controlled autosize"
                            autoSize={{
                                minRows: 3,
                                maxRows: 5,
                            }}
                        />
                    </Form.Item>
                            <Form.Item>
                                <Button>
                                    Criar Evento
                                </Button>
                            </Form.Item>
                </Form>

            </div>
        </Modal>
    );
}

export default ModalCreateEvento;