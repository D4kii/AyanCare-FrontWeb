import React from 'react';
import { Input } from 'antd';
import "../input/input.css";

const InputComponent = ({textFielName, typeInput, idName, inputUseStartValue, setStateFunction} ) =>{
  
  const inputTitle = textFielName;
  const type = typeInput;
  const id = idName;
  const useStateValue = inputUseStartValue;
  const setState = setStateFunction;
  
  return (
    <div className="input">
      <p className="text-field-title">{inputTitle}</p>
      <Input className='text-field' type={type} id={id} value={useStateValue} onChange={setState}/>
    </div>
  
  )
}

export default InputComponent;