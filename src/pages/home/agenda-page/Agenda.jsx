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
import ModalCreateTurno from '../../../components/modal-criar-turno/ModalCriarTurno';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}


const Agenda = () => {
    const [openModalCriarEvento, setOpenModalCriarEvento] = useState(false)
    const [openModalCriarTurno, setOpenModalCriarTurno] = useState(false)

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
    const [pacienteSelected, setPacienteSelected] = useState('todos');
    // useEffect(() => {
    //     if (pacienteSelected) {
    //         handleChange({ value: pacienteSelected }); // Chama handleChange com o valor de pacienteSelected
    //     }
    // }, [pacienteSelected]);

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
            setValue(newValue);
            setSelectedValue(newValue);
        } catch (error) {
            console.error('Erro ao buscar dados do calendário:', error);
            setLoading(false);
        }

    };



    const handleChange = async (selectedOption) => {
        const { value } = selectedOption;
        const idPaciente = value;
        const anoMesSelecionado = selectedValue.format('MM/YYYY');

        console.log(1111, value);
        setPacienteSelected(value);

        if (value !== 'todos') {
            // Restante do código para o caso de um paciente específico
            try {
                console.log('id', { idCuidador, anoMesSelecionado, idPaciente });
                const dataCalendarioForMounthByPacienteAndCuidador = await getEventosAlarmesByCuidadorAndMes(idCuidador, anoMesSelecionado, idPaciente);

                setCalendarioData(dataCalendarioForMounthByPacienteAndCuidador);
                setLoading(false);

                localStorage.setItem('calendarioData', JSON.stringify(dataCalendarioForMounthByPacienteAndCuidador));
                setPacienteSelected(selectedOption);
                localStorage.setItem('pacienteSelected', JSON.stringify(selectedOption));
            } catch (error) {
                console.error('Erro ao buscar dados do calendário:', error);
                setLoading(false);
            }
        } else {
            try {
                const pacientes = paciente.conexao.map((conexao) => conexao.id_paciente);
                const promises = pacientes.map(async (idPaciente) => {
                    const dataCalendario = await getEventosAlarmesByCuidadorAndMes(idCuidador, anoMesSelecionado, idPaciente);
                    return { idPaciente, dataCalendario };
                });

                const resultados = await Promise.all(promises);

                // Combine os resultados para um objeto com a chave "todos"
                const dataCalendarioTodosPacientes = resultados.reduce((acumulador, resultado) => {
                    acumulador.calendario = acumulador.calendario || {};
                    acumulador.calendario.eventos_semanais = (acumulador.calendario.eventos_semanais || []).concat(resultado.dataCalendario.calendario.eventos_semanais || []);
                    acumulador.calendario.eventos_unicos = (acumulador.calendario.eventos_unicos || []).concat(resultado.dataCalendario.calendario.eventos_unicos || []);
                    acumulador.calendario.turnos = (acumulador.calendario.turnos || []).concat(resultado.dataCalendario.calendario.turnos || []);
                    return acumulador;
                }, { todos: true });

                setCalendarioData(dataCalendarioTodosPacientes);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar dados do calendário para todos os pacientes:', error);
                setLoading(false);
            }


        }
    };




    const [openKeys, setOpenKeys] = useState('1');
    const onSelectKey = (value) => {
        setOpenKeys(value.key);
    };

    const items = [
        getItem('Calendário', '1'),
        getItem('Alarmes', '2'),
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
        console.log(e);
        setDadosEventoDrawer(e)
        setOpenDrawer(true);
    }

    const existemPacientes = paciente && paciente.conexao && paciente.conexao.length > 0;

    const handleClickCriarEvento = () => {
        if (existemPacientes) {
            setOpenModalCriarEvento(true);
        } else {
            // Adicione aqui a lógica para exibir uma mensagem quando não houver pacientes vinculados.
            alert("Você precisa vincular um paciente antes de criar um evento.");
            // Ou você pode exibir uma mensagem mais elaborada usando uma biblioteca de notificações, como Ant Design ou outra de sua escolha.
        }
    };

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
                            defaultSelectedKeys={'1'}
                            mode="horizontal"
                            openKeys={openKeys}
                            onClick={onSelectKey}
                            style={{
                                width: 'calc(max-content + 1rem)'
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
                                            placeholder="Clique aqui"
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
                                            <Select.Option key={'all'} value={'todos'}>
                                                Todos
                                            </Select.Option>
                                        </Select>
                                        <CalendarComponent
                                            onPanelChange={onPanelChange}
                                            value={value}
                                            onSelect={onSelectDate}
                                            calendarioData={pacienteSelected ? calendarioData : null}
                                        />
                                    </div>
                                </div>
                                <section id='eventos-unicos&&semanais' className="agenda-field_eventos">
                                    <div className="agenda-field_eventos_select-day">
                                        <h2 className="select-day_title">{selectedValue?.format('DD-MM-YYYY')}</h2>
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
                                                    {dateSelectedCalendario &&
                                                        (dateSelectedCalendario.calendario.eventos_unicos.length > 0 ||
                                                            dateSelectedCalendario.calendario.eventos_semanais.length > 0) ? (
                                                        <div className="agenda-card-turno_field">
                                                            {dateSelectedCalendario.calendario.eventos_semanais &&
                                                                dateSelectedCalendario.calendario.eventos_semanais.length > 0 && (
                                                                    <div className="agenda-card-turno_field">
                                                                        {dateSelectedCalendario.calendario.eventos_semanais.map((evento) => (
                                                                            <CardEvento
                                                                                onClick={() => viewEvento(evento)}
                                                                                key={evento.id}
                                                                                title={evento.nome}
                                                                                hexStatus={evento.cor}
                                                                                type={'Semanal'}
                                                                            />
                                                                        ))}
                                                                    </div>
                                                                )}

                                                            {dateSelectedCalendario.calendario.eventos_unicos &&
                                                                dateSelectedCalendario.calendario.eventos_unicos.length > 0 && (
                                                                    <div className="agenda-card-turno_field">
                                                                        {dateSelectedCalendario.calendario.eventos_unicos.map((evento) => (
                                                                            <CardEvento
                                                                                onClick={() => viewEvento(evento)}
                                                                                key={evento.id}
                                                                                title={evento.nome}
                                                                                hexStatus={evento.cor}
                                                                                type={'Único'}
                                                                            />
                                                                        ))}
                                                                    </div>
                                                                )}
                                                        </div>
                                                    ) : (
                                                        <Empty description={'Sem eventos por hoje'} />
                                                    )}
                                                </div>


                                            </div>
                                        </div>

                                        <FloatButton.Group
                                            trigger="click"
                                            style={{
                                                right: 100,
                                                bottom: 100,
                                            }}
                                            icon={<PlusOutlined />}
                                        >
                                            {existemPacientes ? (
                                                <Button
                                                    onClick={handleClickCriarEvento}
                                                    style={{
                                                        right: 80,
                                                        height: '2.5rem',
                                                        bottom: 20,
                                                        border: 'none',
                                                        boxShadow: '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
                                                    }}
                                                >
                                                    Criar Evento
                                                </Button>
                                            ) : (
                                                <Button
                                                    disabled
                                                    style={{
                                                        right: 120,
                                                        height: '2.5rem',
                                                        bottom: 20,
                                                        border: 'none',
                                                        boxShadow: '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
                                                    }}
                                                >
                                                    Nenhum paciente vinculado
                                                </Button>
                                            )}
                                            {/* <Button 
                                        onClick={handleClickCriarEvento}
                                        style={
                                            {
                                                right: 70,
                                                height: '2.5rem',
                                                bottom: 0,
                                                border: 'none',
                                                boxShadow: '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)'
                                            }
                                        }>
                                            Criar Turno
                                        </Button> */}
                                        </FloatButton.Group>

                                    </div>
                                </section>
                            </div>
                        ) : (
                            <div className='alarmes_list-field'>
                                <div className="agenda-field_eventos_select-day">
                                    <h2 className="select-day_title">{selectedValue?.format('DD-MM-YYYY')}</h2>
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
                                            {
                                                calendarioData && calendarioData.alarmes ?
                                                    (calendarioData.alarmes.map((alarme) => (
                                                        <CardAlarme
                                                            key={alarme.id}
                                                            title={alarme.nome}
                                                            description={alarme.description}
                                                            timeContent={alarme.time}
                                                            hexStatus={alarme.cor}
                                                        />
                                                    ))) : (
                                                        <Empty description={'Sem Alarmes por hoje'} />
                                                    )}
                                        </div>

                                    </div>


                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
            <ModalCreateTurno
                idCuidador={idCuidador}
                open={openModalCriarTurno}
                setOpen={setOpenModalCriarTurno}
            />
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
