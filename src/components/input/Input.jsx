import React from "react";
import './input.css'

function Input(description) {

    const placeholder = description
    return (
        <div>
            <div className="user-box">
                <input type="text" />
                <label>`${description}`</label>
              </div>
        </div>
    )

}

export default Input;