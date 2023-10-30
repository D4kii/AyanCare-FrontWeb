import React from 'react';
import { Link } from 'react-router-dom';

//Componentes
import Menu from '../../../components/menu/menu';
import CalendarComponent from '../../../components/calendario/Calendar';

import './agenda.css'

const Agenda = () => {



    const cardTitleTurno = 'Turnos'

    return (
        <div>
            <Menu />
            <div className='agenda_field'>
                <div className="agenda-field_eventos-alarmes">

                </div>
                <div className="agenda-field_calendario-turnos">
                    <div className="agenda-field_calendario-turnos-field">
                        <div className="agenda-field_calendario-turnos_calendario">
                            <CalendarComponent />
                        </div>
                        <div className="agenda-field_calendario-turnos_turnos">
                            <h3 className="calendario-turno_turnos-titulo">{cardTitleTurno}</h3>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Agenda;