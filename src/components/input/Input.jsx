import React from 'react';
import { Input } from 'antd';
import "../input/input.css";
{/* <style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
</style> */}

const InputComponent = ({textFielName} ) =>{
  return (
    
    <div className="input">
      <span className="textFiledTitle">{textFielName}</span>
      <Input />
    </div>
  
  )
}

export default InputComponent;