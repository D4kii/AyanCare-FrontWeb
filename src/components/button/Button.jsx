import React from "react";
import '../button/button.css';

function Button({nameButton, heigthButton, widthButton, textSize}) {

    const nome = nameButton;
    const altura = heigthButton;
    const largura = widthButton;
    const tamanhoLetra = textSize;
    
    return(
        <div className="field-button">
            <button className="default-button"
                style={{
                    height: altura,
                    width: largura
                }}
            >
                <span
                style={{
                    fontSize: tamanhoLetra,
                    width: 'max-content'
                }}
                >{nome}</span>
            </button>
        </div>
    )
}

export default Button;