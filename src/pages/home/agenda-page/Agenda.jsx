import React, { useEffect, useState } from 'react';
import { Select, Menu } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

import MenuCompoente from '../../../components/menu/menu';
import CalendarComponent from '../../../components/calendario/Calendar';
import CardTurno from '../../../components/card-turno/CardTurno';
import CardEvento from '../../../components/card-evento/CardEvento';
import CardAlarme from '../../../components/card-alarme/CardAlarme';
import Loading from '../../../components/loading/Loading';

import './agenda.css';
import {
    getEventosAlarmesByCuidadorAndMes,
    getPacientesByIDCuidador
} from '../../../services/api';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const alarmesData = [
    { 'id': 1, 'nome': 'Alarme 1', 'description': '2x paracetamol, 2x dipirona', 'time': '08', 'status': true },
    { 'id': 2, 'nome': 'Alarme 2', 'description': '2x paracetamol, 2x dipirona', 'time': '08', 'status': true },
    { 'id': 3, 'nome': 'Alarme 3', 'description': '2x paracetamol, 2x dipirona', 'time': '08', 'status': true },
];

const eventosData = [
    { diaSemana: 'Segunda-feira', eventos: ['Evento A', 'Evento B'] },
    { diaSemana: 'Terça-feira', eventos: ['Evento C', 'Evento D'] },
    { diaSemana: 'Quarta-feira', eventos: ['Evento E', 'Evento F'] },
    { diaSemana: 'Quinta-feira', eventos: ['Evento G', 'Evento H'] },
    { diaSemana: 'Sexta-feira', eventos: ['Evento I', 'Evento J'] },
    { diaSemana: 'Sábado', eventos: ['Evento K', 'Evento L'] },
    { diaSemana: 'Domingo', eventos: ['Evento M', 'Evento N'] },
];

const Agenda = () => {
    const [loading, setLoading] = useState(true);
    const cuidadorLocalStorage = localStorage.getItem('cuidador');
    const cuidadorJSON = cuidadorLocalStorage ? JSON.parse(cuidadorLocalStorage) : null;
    const idCuidador = cuidadorJSON ? cuidadorJSON.id : null;

    const [paciente, setPaciente] = useState("");
    const [pacienteSelected, setPacienteSelected] = useState(null);
    const [calendarioData, setCalendarioData] = useState(() => {
        const storedData = localStorage.getItem('calendarioData');
        return storedData ? JSON.parse(storedData) : null;
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataPacientesByCuidador = await getPacientesByIDCuidador(idCuidador);
                setPaciente(dataPacientesByCuidador);
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

    const handleChange = async (selectedOption) => {
        const { value } = selectedOption;
        const anoMes = selectedValue.format('MM-YYYY');
        setPacienteSelected(value);

        try {
            const dataCalendarioForMounthByPacienteAndCuidador = await getEventosAlarmesByCuidadorAndMes(idCuidador, anoMes, value);
            setCalendarioData(dataCalendarioForMounthByPacienteAndCuidador);
            setLoading(false);

            localStorage.setItem('calendarioData', JSON.stringify(dataCalendarioForMounthByPacienteAndCuidador));
            setPacienteSelected(selectedOption);
            localStorage.setItem('pacienteSelected', JSON.stringify(selectedOption));
        } catch (error) {
            console.error('Erro ao buscar dados do relatório de humor:', error);
            setLoading(false);
        }
    };

    const [openKeys, setOpenKeys] = useState('1');
    const onSelectKey = (value) => {
        setOpenKeys(value.key);
    };

    const items = [
        getItem('Eventos e turnos', '1'),
        getItem('Calendário', '2'),
        getItem('Alarmes', '3'),
    ];

    const [value, setValue] = useState(() => dayjs());
    const [selectedValue, setSelectedValue] = useState(() => dayjs());

    const onSelectDate = (newValue) => {
        setValue(newValue);
        setSelectedValue(newValue);
    };

    const onPanelChange = (newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        return () => {
            localStorage.removeItem('calendarioData');
        };
    }, []);

    useEffect(() => {
        return () => {
            localStorage.removeItem('pacienteSelected');
        };
    }, []);

    return (
        <div>
            <MenuCompoente />
            <div className='agenda_field'>
                <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: '3rem',
                            height: '10vh',
                            position: 'relative',

                        }}
                    >
                        <Menu
                            defaultSelectedKeys={['1']}
                            mode="horizontal"
                            openKeys={openKeys}
                            onClick={onSelectKey}
                            style={{
                                width: '400px'
                            }}
                            items={items}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        {openKeys === '1' ? (
                            <section id='eventos-turnos' className="agenda-field_eventos-turnos">
                                <div className="agenda-field_eventos-turnos_select-day">
                                    <LeftOutlined />
                                    <h2 className="select-day_title">{selectedValue?.format('DD-MM-YYYY')}</h2>
                                    <RightOutlined />
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-evenly'
                                    }}
                                >
                                    <div className='eventos-turnos_list-field'>
                                        <h3 className="turnos_turnos-titulo">{'Eventos'}</h3>
                                        <div className="agenda-card-turno_field">
                                            {eventosData.map((evento) => (
                                                <CardEvento
                                                    key={evento.id}
                                                    title={evento.nome}
                                                    description={evento.description}
                                                    dayContent={evento.dia}
                                                    hexStatus={evento.cor}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="agenda-field_turnos-card">
                                        <h3 className="turnos_turnos-titulo">{'Turnos'}</h3>
                                        <div className="agenda-card-turno_field">
                                            <CardTurno />
                                            <CardTurno />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        ) : openKeys === '2' ? (
                            <div id='calendario' className="agenda-field_calendario">
                                <div className="agenda-field_calendario-field">
                                    <div className="agenda-field_calendario_calendario">
                                        <Select
                                            style={{
                                                width: 130,
                                                marginBottom: '-2.8rem'
                                            }}
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
                                        <CalendarComponent
                                            onPanelChange={onPanelChange}
                                            value={value}
                                            onSelect={onSelectDate}
                                            calendarioData={calendarioData}
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className='alarmes_list-field'>
                                <div className="agenda-field_eventos-turnos_select-day">
                                    <LeftOutlined />
                                    <h2 className="select-day_title">{selectedValue?.format('DD-MM-YYYY')}</h2>
                                    <RightOutlined />
                                </div>
                                {alarmesData.map((alarme) => (
                                    <CardAlarme
                                        key={alarme.id}
                                        title={alarme.nome}
                                        description={alarme.description}
                                        timeContent={alarme.time}
                                        hexStatus={alarme.cor}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Agenda;
