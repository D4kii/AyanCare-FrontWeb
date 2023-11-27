import { DatePicker, Divider, Form, Input, Modal, Radio, Select, Switch, TimePicker } from "antd";
import React, { useState } from "react";
import './create-evento.css'
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

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
    const [switchChecked, setSwitchChecked] = useState(true);

    const changeCondition = (checked) => {
        setSwitchChecked(checked);
    };

    //Valor dias da semana
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    //Valor cores
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
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
                width: 'max-content',
            }}
        >
            <div
                className="create-evento_screen Modal">
                <Form
                    layout="vertical"
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'

                        }}>
                        <Form.Item
                            label={'Título'}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                        label={'Cor do evento'}
                        >
                            <Radio.Group 
                            onChange={onChange} 
                            value={value}
                            style={{gap:'2rem', display:'flex'}}
                            >
                                <Radio value={1}/>
                                <Radio value={2}/>
                                <Radio value={3}/>
                                <Radio value={4}/>
                                <Radio value={5}/>
                                <Radio value={6}/>
                            </Radio.Group>
                        </Form.Item>

                    </div>
                    <Divider orientation="left" orientationMargin="0">Dia e horário</Divider>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row-reverse',
                            alignItems: "center",
                            justifyContent: 'space-between'
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
                                    width: '500px',
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
                            width: '500px'
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
                            alignItems:'center',
                            justifyContent:'space-between',
                            width:'500px'
                        }}
                    >
                        <Form.Item
                            label={'Local'}
                        >
                            <Input></Input>
                        </Form.Item>
                        <Form.Item
                        label={'Paciente'}
                        >
                            <Select
                                defaultValue="lucy"
                                style={{
                                    width: 120,
                                    height:'40px'
                                    
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

                </Form>

            </div>
        </Modal>
    );
}

export default ModalCreateEvento;