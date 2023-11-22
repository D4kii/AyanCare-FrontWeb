import { CheckCircleTwoTone, DownOutlined } from "@ant-design/icons";
import profilePicturePaciente from '../../images/background-image.png'
import './card-evento.css'
import React from "react";

function CardEvento({ dayContent, title, hexStatus, type, onClick }) {

    const diaEvento = dayContent
    const titulo = title
    const color = hexStatus

    return (
        <div className="card-evento_body">
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'column',
                cursor: 'pointer'
            }}
            onClick={onClick}>

                <div className="card-evento_body-field">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '1rem'
                    }}>
                        <div className="card-evento_body-time">
                            <h3 className="card-evento_body-time-content">{diaEvento}</h3>
                        </div>
                        <div className="card-evento_body-content">
                            <h5 className="card-evento_body-content-title">{titulo}</h5>
                            <p className="card-evento_body-content-description">{type}</p>
                        </div>

                    </div>
                    <div className="card-evento_body-field_bubble-color"
                        style={{
                            display: 'flex',
                            gap: '1rem'
                        }}
                    >
                        <div className="bubble-color"
                        style={
                            {
                                backgroundColor: `rgb(${color})`
                            }
                        }>

                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    );
}

export default CardEvento;