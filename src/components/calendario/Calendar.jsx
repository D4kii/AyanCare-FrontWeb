import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Alert, Calendar, ConfigProvider } from 'antd';


const CalendarComponent = () => {
  const [value, setValue] = useState(() => dayjs('2017-01-25'));
  const [selectedValue, setSelectedValue] = useState(() => dayjs('2017-01-25'));
  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };
  const onPanelChange = (newValue) => {
    setValue(newValue);
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