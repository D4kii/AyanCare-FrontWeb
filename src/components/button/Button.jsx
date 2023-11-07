import React from "react";
import '../button/button.css';

function Button({nameButton, heigthButton, widthButton, textSize, color, contentColor}) {

    const nome = nameButton;
    const altura = heigthButton;
    const largura = widthButton;
    const tamanhoLetra = textSize;
    const backgroundColor = color;
    const corFonte = contentColor;
    
    return(
        <div className="field-button">
            <button className="default-button"
                style={{
                    height: altura,
                    width: largura,
                    background: backgroundColor
                }}
                
            >
                <span
                style={{
                    fontSize: tamanhoLetra,
                    width: 'max-content',
                    color: corFonte
                }}
                >{nome}</span>
            </button>
        </div>
    )
}

export default Button;