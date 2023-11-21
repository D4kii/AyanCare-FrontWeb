import React from 'react';
import { Badge, Calendar, ConfigProvider, Select } from 'antd';
import './calendar.css';
import moment from 'moment/moment';

const CalendarComponent = ({ value, onSelect, onPanelChange, calendarioData }) => {
  const dateCellRender = (value) => {
    if (calendarioData) {
      const dateString = value.format('YYYY-MM-DD');
      const eventosSemanais = calendarioData.calendario.eventos_semanais || [];
      const eventosUnicos = calendarioData.calendario.eventos_unicos || [];

      const eventoSemanal = eventosSemanais.find((evento) =>
        evento.dias.some((dia) => dia.id_dia_semana === (value.day() % 7) + 1)
      );
      const eventoUnico = eventosUnicos.find((evento) => evento.dias);

      const event = eventoSemanal || eventoUnico;

      if (event) {
        const diaCorrespondente = event.dias.find((dia) =>
          moment().isoWeekday(dia.id_dia_semana).isSame(value, 'day')
        );

        if (diaCorrespondente) {
          return (
            <ul className="events">
              <li key={event.nome}>
                <Badge color={`rgb(${diaCorrespondente.cor})`} text={event.nome} />
              </li>
            </ul>
          );
        }
      }
    }

    return null;
  };



  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            colorPrimary: '#9986BD',
            colorLink: '#35225F',
            colorLinkHover: '#35225F',
            algorithm: true, // Enable algorithm
          },
        }}
      >
        <Calendar
          style={{
            width: '58vw',
            height: '92vh'
          }}
          value={value}
          onSelect={onSelect}
          onPanelChange={onPanelChange}
          cellRender={dateCellRender}
        />
      </ConfigProvider>
    </div>
  );
};

export default CalendarComponent;
