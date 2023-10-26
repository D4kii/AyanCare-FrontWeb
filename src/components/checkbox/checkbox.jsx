import React from "react";
import './checkbox.css'
import { Checkbox } from "antd";

function CheckboxField({checkBoxName}) {
    const checkName = checkBoxName;

    return (
        <div className="checkbox-field">
            <Checkbox />
            <span className='checkbox-text'>{checkName}</span>
        </div>
    )
}

export default CheckboxField;