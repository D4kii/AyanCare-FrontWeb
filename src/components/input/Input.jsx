import React from 'react';
import { Input } from 'antd';
import "../input/input.css";

const InputComponent = ({textFielName, typeInput, idName, inputUseStateValue, setStateFunction} ) =>{
  
  const inputTitle = textFielName;
  const type = typeInput;
  const inputId = idName;
  const useStateValue = inputUseStateValue;
  const setState = setStateFunction;

  
  return (
    <div className="input">
      <p className="text-field-title">{inputTitle}</p>
      <Input className='text-field' type={type} id={inputId} value={useStateValue} onChange={setState}/>
    </div>
  
  )
}

export default InputComponent;