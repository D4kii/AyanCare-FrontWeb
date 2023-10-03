import React from "react";
import '../button/button.css';

function Button({nameButton, sizeButton}) {

    const nome = nameButton;
    const tamanho = sizeButton;
    
    return(
        <div className="field-button">
            <button className="default-button">
                <span>{nome}</span>
            </button>
        </div>
    )
}

export default Button;