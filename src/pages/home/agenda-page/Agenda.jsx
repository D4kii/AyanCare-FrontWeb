import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

//Componentes
import CardAlarme from '../../../components/card-alarme/CardAlarme';
import CardEvento from '../../../components/card-evento/CardEvento';
import Menu from '../../../components/menu/menu';
import CalendarComponent from '../../../components/calendario/Calendar';
import CardTurno from '../../../components/card-turno/CardTurno';
import { Carousel, Radio, ConfigProvider, Card } from 'antd';

import './agenda.css'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const contentStyle = {
    height: '50vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

//Simulando dados da api
const eventosData = [
    {
        ' id': 1,
        'nome': 'Evento 1',
        'description': 'Passeio no Parque',
        'cor': '#F67280',
        'dia': '22'
    },
    {
        'id': 2,
        'nome': 'Evento 2',
        'description': 'Passeio no Parque',
        'cor': '#F67280',
        'dia': '22'
    },
    {
        'id': 3,
        'nome': 'Evento 3',
        'description': 'Passeio no Parque',
        'cor': '#F67280',
        'dia': '22'
    },
];

const alarmesData = [
    { 'id': 1, 'nome': 'Alarme 1', 'description': '2x paracetamol, 2x dipirona', 'time': '08', 'status': true },
    { 'id': 2, 'nome': 'Alarme 2', 'description': '2x paracetamol, 2x dipirona', 'time': '08', 'status': true },
    { 'id': 3, 'nome': 'Alarme 3', 'description': '2x paracetamol, 2x dipirona', 'time': '08', 'status': true },
];

const Agenda = () => {
    //CALENDÁRIO
    const [value, setValue] = useState(() => dayjs());
    const [selectedValue, setSelectedValue] = useState(() => dayjs());
    const onSelect = (newValue) => {
      setValue(newValue);
      setSelectedValue(newValue);
    };
    const onPanelChange = (newValue) => {
      setValue(newValue);
    };
    console.log(selectedValue?.format('DD-MM-YYYY'));


    const [dotPosition, setDotPosition] = useState('left');
    const handlePositionChange = (e) => {
        setDotPosition(e.target.value);
    };
    console.log();

    const cardTitleTurno = 'Turnos'

    return (
        <div>
            <Menu />

            <div className='agenda_field'>
                <div className="agenda-field_eventos-alarmes">
                    <div className="agenda-field_eventos-alarmes_select-day">

                    <LeftOutlined />
                    <h2 className="select-day_title">{selectedValue?.format('DD-MM-YYYY')}</h2>
                    <RightOutlined />

                    </div>
                    <Radio.Group
                        onChange={handlePositionChange}
                        value={dotPosition}
                        style={{
                            marginBottom: 8,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Radio.Button
                            style={{
                                background: dotPosition === "left" ? "#35225F" : "#ffffff",
                                color: dotPosition === "left" ? "#ffffff" : "#35225F",
                                border: `1px solid #35225F`, // Adicione uma borda
                            }}
                            value="left"
                        >
                            Eventos
                        </Radio.Button>
                        <Radio.Button
                            style={{
                                background: dotPosition === "right" ? "#35225F" : "#ffffff",
                                color: dotPosition === "right" ? "#ffffff" : "#35225F",
                                border: `1px solid #35225F`, // Adicione uma borda
                            }}
                            value="right"
                        >
                            Alarmes
                        </Radio.Button>
                    </Radio.Group>

                    {dotPosition === 'left' ? (
                        <div className='eventos-alarmes_list-field'>
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
                    ) : (
                        <div className='eventos-alarmes_list-field'>
                            {alarmesData.map((alarme) => (
                                <CardAlarme key={alarme.id}
                                    title={alarme.nome}
                                    description={alarme.description}
                                    timeContent={alarme.time} 
                                    hexStatus={alarme.cor}
                                    />
                            ))}
                        </div>
                    )}

                </div>
                <div className="agenda-field_calendario-turnos">
                    <div className="agenda-field_calendario-turnos-field">
                        <div className="agenda-field_calendario-turnos_calendario">
                            <CalendarComponent 
                            onPanelChange={onPanelChange}
                            value={value}
                            onSelect={onSelect}
                            />
                        </div>
                        <div className="agenda-field_calendario-turnos_turnos-card">
                            <h3 className="calendario-turno_turnos-titulo">{cardTitleTurno}</h3>
                            <div className="agenda-card-turno_field">

                                <CardTurno />
                                <CardTurno />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}


export default Agenda;