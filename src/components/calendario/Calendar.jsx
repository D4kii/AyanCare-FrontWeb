import React from 'react';
import { Badge, Calendar, ConfigProvider, Select, Tag } from 'antd';
import './calendar.css';
import moment from 'moment/moment';

const CalendarComponent = ({ value, onSelect, onPanelChange, calendarioData }) => {
  const dateCellRender = (value) => {
    if (calendarioData) {
      const eventosSemanais = calendarioData.calendario.eventos_semanais || [];
      const turnos = calendarioData.calendario.turnos || [];
      const eventosUnicos = calendarioData.calendario.eventos_unicos || [];

    console.log(34444, calendarioData);
      const eventosDoDia = [...eventosSemanais, ...eventosUnicos].filter((evento) =>
        evento.dias.some((dia) => dia.id_dia_semana === (value.day() % 7) + 1)
      );
      const turnoDoDia = [...turnos].filter((turno) =>
        turno.dias.some((dia) => dia.id_dia_semana === (value.day() % 7) + 1)
      );

      

      const cores = {};

      if (eventosDoDia.length > 0 && eventosDoDia) {
        return (
          <ul className="events">
            {eventosDoDia.map((evento) => {
              const cor = evento.dias[0].cor;
              console.log(222,evento);
              // Verifica se a cor já foi mapeada
              if (!cores[evento.id]) {
                cores[evento.id] = cor;
              }

              return (
                <li key={evento.nome}>
                  <Badge color={`rgb(${cores[evento.id]})`} text={evento.nome} />
                </li>
              );
            })}
          </ul>
        );
      }else if (turnoDoDia.length > 0 && turnoDoDia) {
        return (
          <ul className="events">
            {turnoDoDia.map((turno) => {
              const cor = turno.dias[0].cor;
              console.log(222,turno);
              return (
                <Tag key={turno.id} color={`rgb(${cor})`}>
                  Turno: {turno.paciente}
                </Tag>
              );
            })}
          </ul>
        );
      }


      return null;
    };






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

          value={value}
          onSelect={onSelect}
          onPanelChange={onPanelChange}
          cellRender={dateCellRender}
        />
      </ConfigProvider>
    </div>
  );

}
export default CalendarComponent;
