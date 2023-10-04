import React from 'react';
import { Input } from 'antd';
import "../input/input.css";

const InputComponent = ({textFielName, typeInput, idName} ) =>{
  
  const inputTitle = textFielName;
  const type = typeInput;
  const id = idName;
  
  return (
    <div className="input">
      <p className="text-field-title">{inputTitle}</p>
      <Input className='text-field' type={type} id={id}/>
    </div>
  
  )
}

export default InputComponent;