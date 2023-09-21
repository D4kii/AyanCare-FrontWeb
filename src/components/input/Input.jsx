import React from 'react';
import { Input } from 'antd';
import "../input/input.css";

const InputComponent = ({textFielName} ) =>{
  return (
    
    <div className="input">
      <span className="textFiledTitle">{textFielName}</span>
      <Input />
    </div>
  
  )
}

export default InputComponent;