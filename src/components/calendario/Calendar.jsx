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
  
      const eventosSemanaisDoDia = eventosSemanais.filter((evento) =>
        evento.dias.some((dia) => dia.id_dia_semana === (value.day() % 7) + 1)
      );
  
      const eventosUnicosDoDia = eventosUnicos.filter((evento) => {
        const eventoDataFormatada = moment(evento.dia, 'DD/MM/YYYY');
        const dataAtualFormatada = moment(value.format('DD/MM/YYYY'), 'DD/MM/YYYY');
      
        return eventoDataFormatada.isSame(dataAtualFormatada, 'day');
      });
      
  
      const turnoDoDia = turnos.filter((turno) =>
        turno.dias.some((dia) => dia.id_dia_semana === (value.day() % 7) + 1)
      );
  
      const cores = {};
  
      return (
        <ul className="events">
          {/* Eventos Semanais */}
          {eventosSemanaisDoDia.map((evento) => {
            const cor = evento.dias[0].cor;
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
  
          {/* Eventos Únicos */}
          {eventosUnicosDoDia.map((evento) => (
            <li key={evento.nome}>
              <Badge color={'#52c41a'} text={evento.nome} />
            </li>
          ))}
  
          {/* Turnos */}
          {turnoDoDia.map((turno) => {
            const cor = turno.dias[0].cor;
            return (
              <li key={turno.id}>
                <Tag color={`rgb(${cor})`}>Turno: {turno.paciente}</Tag>
              </li>
            );
          })}
        </ul>
      );
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
