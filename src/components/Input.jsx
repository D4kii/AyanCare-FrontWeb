import React from "react";
import '../css/components/input.css'

function input(placeholder) {

    const placeholder = placeholder
    return (
        <div>
            <div className="user-box">
                <input type="text" />
                <label>`${placeholder}`</label>
              </div>
        </div>
    )

}