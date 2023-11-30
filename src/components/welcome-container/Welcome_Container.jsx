import React from "react";
import '../welcome-container/welcome-container.css'

function WelcomeContainer({ title, text, logo }) {

    const titulo = title;
    const texto = text;
    const image = logo;

    return (
        <div>
            <div className="container-field">
                <div className="components_container-field">
                    <img src={image}
                    style={{
                        width: '15rem'
                    }}
                    alt="Logo da empresa, com duas personas se abraçando" />
                    <div className="text_components_container-field">
                        <h1>{titulo}</h1>
                        <span>{texto}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeContainer;