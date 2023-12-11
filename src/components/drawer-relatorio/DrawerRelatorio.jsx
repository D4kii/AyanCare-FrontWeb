import React, { useEffect, useState } from 'react';
import { Button, Drawer, Form, Input, Radio } from 'antd';
import './drawer-ver-relatorio.css'
import Loading from '../loading/Loading';
import { getPDFRelatorio } from '../../services/api';

function RelatorioDrawer({ open, setOpen, dadosRelatorio, loading, setLoading }) {

    const [pdfRelatorio, setPdfRelatorio] = useState(null);

    const relatorio = dadosRelatorio;

    console.log('id:',relatorio.id);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const hasData = Object.keys(dadosRelatorio).length > 0

    const madePDF = async () => {
        const url = `https://ayan-backend.azurewebsites.net/v1/ayan/relatorio/pdf/${relatorio.id}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro na requisição: ${response.status}`);
                }
                return response.blob();
            })
            .then(blob => {
                // Cria um URL temporário para o blob
                const blobUrl = URL.createObjectURL(blob);

                // Cria um link temporário
                const link = document.createElement('a');
                link.href = blobUrl;
                link.download = 'relatorio.pdf'; // Nome do arquivo PDF

                // Adiciona o link ao corpo do documento
                document.body.appendChild(link);

                // Aciona o clique no link para iniciar o download
                link.click();

                // Remove o link do corpo do documento
                document.body.removeChild(link);
            })
            .catch(error => {
                console.error('Erro ao baixar o PDF:', error);
            });

    }



    return (
        <div>
            {hasData ?
                (
                    <Drawer width={800} closable={false} onClose={onClose} open={open}>
                        <div>
                            <Form
                            >


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
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '1rem'
                                                }}
                                            >
                                                <h3 className='ver-relatorio_field-screen-relatorio-subtitle'>Relatório</h3>
                                                <div className="ver-relatorio_text-field">
                                                    <p className="ver-relatorio_text-field text-drawer">
                                                        {relatorio.texto}
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '1rem'
                                                }}
                                            >
                                                <h3 className='ver-relatorio_field-screen-relatorio-subtitle'>Questionário</h3>
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

                                        </div>
                                    )

                                }
                                <Button
                                    onClick={() => madePDF()}
                                >Gerar PDF</Button>
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