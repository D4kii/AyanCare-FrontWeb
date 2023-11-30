import { Descriptions, Drawer, Empty, Space, Tag } from "antd";
import React, { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import { getEventosSemanaisByID, getEventosUnitariosByID } from "../../services/api"; // Importe a função da sua API
import './drawer-eventos.css'

function DrawerEvento({ open, setOpen, dadosEvento, loading }) {

    const fotoPaciente = '';

    const [eventoData, setEventoData] = useState(null);
    const [carregando, setcarregando] = useState(true);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const fetchEventoData = async () => {
            try {
                // Verifica se há dados de evento e se o componente não está em um estado de loading
                if (dadosEvento && !loading) {
                    let eventData;
                    if (dadosEvento.dia_semana) {
                        console.log('idevento', dadosEvento);
                        // Se "dias" estiver presente em dadosEvento, chama o endpoint de eventos semanais
                        eventData = await getEventosSemanaisByID(dadosEvento.id);
                    } else {
                        // Caso contrário, chama o endpoint de eventos únicos
                        eventData = await getEventosUnitariosByID(dadosEvento.id);
                    }

                    setEventoData(eventData);
                    setcarregando(false);
                }
            } catch (error) {
                console.error('Erro ao buscar dados do evento:', error);
                setcarregando(false);
                // Lidar com erros, se necessário
            }
        };

        fetchEventoData(); // Chama a função de busca quando a propriedade dadosEvento ou loading muda
    }, [dadosEvento, loading]);


    console.log(eventoData);
    return (
        <div>
            {dadosEvento ?
                (
                    <Drawer width={750}
                        closable={false}
                        onClose={onClose}
                        open={open}
                        title={'Evento'}
                    >
                        <div
                        >
                            {loading ?
                                (<Loading />)
                                :
                                (
                                    <div className='ver-evento_field-screen'>
                                        {carregando ?
                                            (<Loading />)
                                            :
                                            (

                                                <div>
                                                    {eventoData && eventoData.evento && (
                                                        <div
                                                            style={{
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                gap: '3rem'
                                                            }}
                                                        >
                                                            <div className="ver-evento_field-title">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                                    <ellipse cx="8.11298" cy="8" rx="8.11298" ry="7.5" fill={`rgb(${eventoData.evento.cor})`} />
                                                                </svg>
                                                                <h3 className="ver-evento_title">
                                                                    {eventoData.evento.nome}
                                                                </h3>
                                                            </div>
                                                            <div className="ver-evento_field-content">
                                                                <div className="ver-evento_foto-nome-paciente">
                                                                    <div className="paciente-image_evento"
                                                                        style={{
                                                                            width: '50px',
                                                                            height: '50px',
                                                                            borderRadius: '50px',
                                                                            background: fotoPaciente ? `url(${fotoPaciente}), lightgray 50% / cover no-repeat;` : '#7E6F94'
                                                                        }}
                                                                    />
                                                                    <span className="paciente-name_evento">
                                                                        {dadosEvento.paciente}
                                                                    </span>
                                                                </div>
                                                                {eventoData.evento.dias ? (
                                                                    <>
                                                                        <Descriptions title={null}
                                                                            items={[
                                                                                {
                                                                                    label: 'Local',
                                                                                    children: eventoData.evento.local
                                                                                }
                                                                            ]} />
                                                                        <Descriptions title={null}
                                                                            items={[
                                                                                {
                                                                                    label: 'Descrição',
                                                                                    children: eventoData.evento.descricao
                                                                                }
                                                                            ]} />

                                                                        <div className="ver-evento_dias-field">
                                                                            <div>

                                                                                <Space size={[0, 8]} wrap>
                                                                                    {eventoData.evento.dias
                                                                                        .filter((diaSemana) => diaSemana.status) // Filtra os dias com status igual a true
                                                                                        .map((diaSemana) => (
                                                                                            <Tag key={diaSemana.id} color={`rgb(${eventoData.evento.cor})`}>
                                                                                                {diaSemana.dia}
                                                                                            </Tag>
                                                                                        ))}
                                                                                </Space>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                ) : eventoData.evento.dia ? (
                                                                    <>
                                                                        <Descriptions title="Informações do evento"
                                                                            layout="horizontal"
                                                                            items={[
                                                                                {
                                                                                    label: 'Local',
                                                                                    children: eventoData.evento.local
                                                                                },
                                                                                {
                                                                                    label: 'Data',
                                                                                    children: eventoData.evento.dia
                                                                                }
                                                                            ]} />
                                                                            <Descriptions title={null}
                                                                            layout="horizontal"
                                                                            items={[
                                                                                {
                                                                                    label: 'Descrição',
                                                                                    children: eventoData.evento.descricao
                                                                                }
                                                                            ]} />

                                                                        
                                                                    </>
                                                                ) : (

                                                                    <Empty description={'Vazio'} />
                                                                )
                                                                }

                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                            )
                                        }
                                    </div>
                                )}
                        </div>
                    </Drawer>
                )
                :
                (
                    null
                )
            }
        </div >
    );
}

export default DrawerEvento;
