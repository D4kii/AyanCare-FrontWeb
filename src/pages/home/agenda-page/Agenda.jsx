import React, { useEffect, useState } from 'react';
import { Select, Menu, Empty, FloatButton, Button } from 'antd';
import { CommentOutlined, CustomerServiceOutlined, LeftOutlined, PlusOutlined, RightOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

import MenuCompoente from '../../../components/menu/menu';
import CalendarComponent from '../../../components/calendario/Calendar';
import CardTurno from '../../../components/card-turno/CardTurno';
import CardEvento from '../../../components/card-evento/CardEvento';
import CardAlarme from '../../../components/card-alarme/CardAlarme';
import Loading from '../../../components/loading/Loading';
import DrawerEvento from '../../../components/drawer-evento/DrawerEvento';

import './agenda.css';
import {
    getEventosAlarmesByCuidadorAndDate,
    getEventosAlarmesByCuidadorAndMes,
    getPacientesByIDCuidador,
    getTurnosByIDCuidador
} from '../../../services/api';
import ModalCreateEvento from '../../../components/modal-criar-evento/CreateEvento';

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



const Agenda = () => {
    const [openModalCriarEvento, setOpenModalCriarEvento] = useState(false)

    const [value, setValue] = useState(() => dayjs());
    const [selectedValue, setSelectedValue] = useState(() => dayjs());

    function getDiaSemana(numeroDia) {
        const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        return diasDaSemana[numeroDia];
    }

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

    const [dateSelectedCalendario, setDateSelectedCalendario] = useState(null)
    const onSelectDate = async (newValue) => {
        if (!pacienteSelected) {
            // Se pacienteSelected for nulo, não execute o código restante
            return;
        }

        const idPaciente = pacienteSelected.value;
        const dataSelecionada = newValue.format('DD/MM/YYYY');
        const diaSemanaSelecionada = getDiaSemana(newValue.day());

        try {
            const dataCalendarioForDateByPacienteAndCuidador = await getEventosAlarmesByCuidadorAndDate(idCuidador, dataSelecionada, idPaciente, diaSemanaSelecionada);


            setDateSelectedCalendario(dataCalendarioForDateByPacienteAndCuidador);
            setLoading(false);
        } catch (error) {
            console.error('Erro ao buscar dados do calendário:', error);
            setLoading(false);
        }

        setValue(newValue);
        setSelectedValue(newValue);
    };


    const handleChange = async (selectedOption) => {
        const { value } = selectedOption;

        const idPaciente = value;
        const anoMesSelecionado = selectedValue.format('MM-YYYY');


        setPacienteSelected(value);

        try {
            const dataCalendarioForMounthByPacienteAndCuidador = await getEventosAlarmesByCuidadorAndMes(idCuidador, anoMesSelecionado, idPaciente);

            console.log(dataCalendarioForMounthByPacienteAndCuidador);
            setCalendarioData(dataCalendarioForMounthByPacienteAndCuidador);
            setLoading(false);

            localStorage.setItem('calendarioData', JSON.stringify(dataCalendarioForMounthByPacienteAndCuidador));
            setPacienteSelected(selectedOption);
            localStorage.setItem('pacienteSelected', JSON.stringify(selectedOption));
        } catch (error) {
            console.error('Erro ao buscar dados do calendário:', error);
            setLoading(false);
        }
    };




    const [openKeys, setOpenKeys] = useState('2');
    const onSelectKey = (value) => {
        setOpenKeys(value.key);
    };

    const items = [
        getItem('Eventos e turnos', '1'),
        getItem('Calendário', '2'),
        getItem('Alarmes', '3'),
    ];


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

    const [openDrawer, setOpenDrawer] = useState(false);
    const [dadosDadosEventoDrawer, setDadosEventoDrawer] = useState({});
    const viewEvento = (e) => {
        setDadosEventoDrawer(e)
        setOpenDrawer(true);
    }
    console.log('calendario', calendarioData);
    console.log('value', value);

    return (
        <div>
            <MenuCompoente />
            <div className='agenda_field'>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'start',
                        alignItems: 'center',
                        marginRight: '8vw'
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
                            defaultSelectedKeys={'2'}
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
                        {openKeys == '1' ? (
                            <section id='eventos-unicos&&semanais' className="agenda-field_eventos">
                                <div className="agenda-field_eventos_select-day">
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
                                        <div
                                            style={{
                                                height: '90%'
                                            }}>
                                            <div className="agenda-card-turno_field">
                                                {dateSelectedCalendario && dateSelectedCalendario.calendario && dateSelectedCalendario.calendario.eventos_semanais ? (

                                                    dateSelectedCalendario.calendario.eventos_semanais.map((evento) => (
                                                        <CardEvento
                                                            onClick={() => viewEvento(evento)}
                                                            key={evento.id}
                                                            title={evento.nome}
                                                            hexStatus={evento.cor}
                                                            type={'Semanal'}
                                                        />
                                                    ))
                                                ) : (
                                                    <Empty description={'Sem eventos por hoje'} />
                                                )}

                                            </div>
                                        </div>
                                    </div>

                                    <FloatButton.Group
                                        trigger="hover"

                                        style={{
                                            right: 100,
                                            bottom: 100
                                        }}
                                        icon={<PlusOutlined />}
                                    >
                                        <Button
                                            onClick={() => setOpenModalCriarEvento(true)}
                                            style={
                                                {
                                                    right: 80,
                                                    height: '2.5rem',
                                                    bottom: 20,
                                                    border: 'none',
                                                    boxShadow: '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)'
                                                }
                                            }>
                                            Criar Evento
                                        </Button>
                                        <Button style={
                                            {
                                                right: 70,
                                                height: '2.5rem',
                                                bottom: 0,
                                                border: 'none',
                                                boxShadow: '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)'
                                            }
                                        }>
                                            Criar Turno
                                        </Button>
                                    </FloatButton.Group>
                                </div>
                            </section>
                        ) : openKeys == '2' ? (
                            <div id='calendario' className="agenda-field_calendario">
                                <div className="agenda-field_calendario-field">
                                    <div className="agenda-field_calendario_calendario">
                                        <Select
                                            defaultValue={pacienteSelected}
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
                                                paciente.conexao?.map(conexao => (
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
                                            calendarioData={pacienteSelected ? calendarioData : null}
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className='alarmes_list-field'>
                                <div className="agenda-field_eventos_select-day">
                                    <LeftOutlined />
                                    <h2 className="select-day_title">{selectedValue?.format('DD-MM-YYYY')}</h2>
                                    <RightOutlined />
                                </div>
                                <div className="alarmes-turnos_list">
                                    <div className="agenda-field_turnos-card">
                                        <h3 className="turnos_turnos-titulo">{'Turnos'}</h3>
                                        <div className="agenda-card-turno_field turno_field">
                                            {calendarioData && calendarioData.turnos ?
                                                (calendarioData.turnos.map((turno) => (
                                                    <CardTurno
                                                        paciente={turno.cuidador}

                                                    />

                                                ))) : (
                                                    <Empty description={'Sem turnos para hoje'} />
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: '1rem'
                                        }}
                                    >
                                        <h3 className="turnos_turnos-titulo">{'Alarmes'}</h3>
                                        <div className="agenda-card-turno_field turno_field">

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

                                    </div>


                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
            <ModalCreateEvento
                idCuidador={idCuidador}
                open={openModalCriarEvento}
                setOpen={setOpenModalCriarEvento}
            />
            <DrawerEvento
                dadosEvento={dadosDadosEventoDrawer}
                open={openDrawer}
                setOpen={setOpenDrawer}
            />
        </div>
    );
}

export default Agenda;
