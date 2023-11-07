import React, { useState } from 'react';
import { Alert, Calendar, ConfigProvider } from 'antd';
import './calendar.css'


const CalendarComponent = ({value, onSelect, onPanelChange}) => {

  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            colorPrimary: '#9986BD',
            colorLink: '#35225F',
            colorLinkHover: '#35225F',
            algorithm: true, // Enable algorithm
          }
        }}
      >
        <Calendar style={{
          width: '38vw'
        }} value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
      </ConfigProvider>
    </div>
  );
};
export default CalendarComponent;