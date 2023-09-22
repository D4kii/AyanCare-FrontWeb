import React from 'react';
import { Input } from 'antd';
import "../input/input.css";

const InputComponent = ({textFielName} ) =>{
  return (
    
    <div className="input">
      <p className="text-field-title">{textFielName}</p>
      <Input className='text-field'/>
    </div>
  
  )
}

export default InputComponent;