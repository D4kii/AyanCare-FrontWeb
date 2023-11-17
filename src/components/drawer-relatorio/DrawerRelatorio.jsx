import React, { useState } from 'react';
import { Button, Drawer, Form, Input, Radio } from 'antd';
import './drawer-ver-relatorio.css'
import Loading from '../loading/Loading';

function RelatorioDrawer({ open, setOpen, dadosRelatorio, loading }) {

    const relatorio = dadosRelatorio;

    console.log('11====================================');
    console.log(dadosRelatorio);
    console.log('====================================');

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const hasData = Object.keys(dadosRelatorio).length > 0

    return (
        <div>
            {hasData ?
                (
                    <Drawer width={700} closable={false} onClose={onClose} open={open}>
                        <div>
                            <Form>


                                {loading ?
                                    (<Loading />)
                                    :
                                    (
                                        <div className='ver-relatorio_field-screen'>

                                            <div className="ver-relatorio_paciente-content">
                                                <h2 className="ver-relatorio_paciente-name-title">
                                                    {relatorio.paciente.nome}
                                                </h2>
                                                <span className="ver-relatorio_paciente-idade-genero">
                                                    {`${relatorio.paciente.idade} anos, ${relatorio.paciente.genero}`}
                                                </span>
                                            </div>
                                            <div className="ver-relatorio_date-time">
                                                <Input

                                                    className='ver-relatorio_date-time input-drawer'
                                                    name='date'
                                                    addonBefore="Data"
                                                    style={{
                                                        width: 'max-content',
                                                        maxWidth: '150px',
                                                        textAlign: 'center',
                                                        fontSize: '1rem'
                                                    }}
                                                    value={relatorio.data}
                                                    readOnly
                                                />
                                                <Input
                                                    className='ver-relatorio_date-time input-drawer'
                                                    name='time'
                                                    addonBefore="Horário"
                                                    style={{
                                                        width: '9rem',
                                                        fontSize: '1rem'
                                                    }}
                                                    value={relatorio.horario}
                                                    readOnly
                                                />
                                            </div>
                                            <div className="ver-relatorio_text-field">
                                                <p className="ver-relatorio_text-field text-drawer">
                                                    {relatorio.texto}
                                                </p>
                                            </div>
                                            <div className="ver-relatorio_questionario">
                                                {dadosRelatorio.perguntas.length == 0 ?
                                                    <p>Sem perguntas</p>
                                                    :
                                                    (relatorio.perguntas.map((perguntas) => (
                                                        <Form.Item
                                                            style={{
                                                                width: '50vw'
                                                            }}
                                                            key={perguntas.id}
                                                            name={perguntas.id}
                                                        >
                                                            <span>{perguntas.pergunta}</span>
                                                            <Radio.Group
                                                                onChange={(e) => handleChange(perguntas.id, e.target.value)}
                                                                style={{
                                                                    display: 'flex'
                                                                }}
                                                                value={perguntas.resposta}
                                                            >
                                                                <Radio value={true}>Sim</Radio>
                                                                <Radio value={false}>Não</Radio>
                                                            </Radio.Group>
                                                        </Form.Item>
                                                    )
                                                    )

                                                    )
                                                }
                                            </div>
                                        </div>
                                    )

                                }
                            </Form>
                        </div>

                    </Drawer>
                )

                :
                (
                    null
                )

            }
        </div>
    );
}

export default RelatorioDrawer;