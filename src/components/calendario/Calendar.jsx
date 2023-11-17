import React from 'react';
import { Calendar, ConfigProvider } from 'antd';
import './calendar.css';

const CalendarComponent = ({ value, onSelect, onPanelChange }) => {
  const events = {
    '2023-11-15': { content: 'Evento A', color: 'green' },
    '2023-11-20': { content: 'Evento B', color: 'blue' },
    // Adicione mais eventos conforme necessário
  };

  const dateCellRender = (value) => {
    const dateString = value.format('YYYY-MM-DD');
    const event = events[dateString];

    if (event) {
      return (
        <div style={{ position: 'relative', height: '100%' }}>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: event.color,
            }}
          >
            {event.content}
          </div>
        </div>
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
          style={{
            width: '38vw',
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
