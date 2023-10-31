import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//Componentes
import Menu from '../../../components/menu/menu';
import CalendarComponent from '../../../components/calendario/Calendar';
import CardTurno from '../../../components/card-turno/CardTurno';
import { Carousel, Radio, ConfigProvider } from 'antd';

import './agenda.css'

const contentStyle = {
    height: '50vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const Agenda = () => {
    const [dotPosition, setDotPosition] = useState('top');
    const handlePositionChange = ({ target: { value } }) => {
        setDotPosition(value);
    };

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


                    <Carousel dotPosition={dotPosition}>
                        <div>
                            <h3 style={contentStyle}>1</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>2</h3>
                        </div>
                    </Carousel>

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