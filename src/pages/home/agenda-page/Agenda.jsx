import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//Componentes
import Menu from '../../../components/menu/menu';
import CalendarComponent from '../../../components/calendario/Calendar';
import CardTurno from '../../../components/card-turno/CardTurno';
import { Carousel, Radio, ConfigProvider, Card } from 'antd';

import './agenda.css'

const contentStyle = {
    height: '50vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

//Simulando dados da api
const eventosData = [
    { ' id': 1, 'nome': 'Evento 1' },
    { 'id': 2, 'nome': 'Evento 2' },
    { 'id': 3, 'nome': 'Evento 3' },
];

const alarmesData = [
    { 'id': 1, 'nome': 'Alarme 1' },
    { 'id': 2, 'nome': 'Alarme 2' },
    { 'id': 3, 'nome': 'Alarme 3' },
];

const Agenda = () => {
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

                    <div>
                        {dotPosition === 'left' ? (
                            <div>
                                {eventosData.map((evento) => (
                                    <h2 key={evento.id}>{evento.nome}</h2>
                                ))}
                            </div>
                        ) : (
                            <div>
                                {alarmesData.map((alarme) => (
                                    <h2 key={alarme.id} >{alarme.nome}</h2>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
                <div className="agenda-field_calendario-turnos">
                    <div className="agenda-field_calendario-turnos-field">
                        <div className="agenda-field_calendario-turnos_calendario">
                            <CalendarComponent />
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