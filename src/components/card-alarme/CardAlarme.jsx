import { CheckCircleFilled, CheckCircleTwoTone } from "@ant-design/icons";
import './card-alarme.css'
import React from "react";

function CardAlarme({ timeContent, title, description, hexStatus }) {

    const horarioAlarme = timeContent
    const titulo = title
    const descricao = description
    const color = hexStatus

    return (
        <div className="card-alarme_body">
            <div className="card-alarme_body-field">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem'
                }}>

                    <div className="card-alarme_body-time">
                        <h3 className="card-alarme_body-time-content">{horarioAlarme}</h3>
                    </div>
                    <div className="card-alarme_body-content">
                        <h5 className="card-alarme_body-content-title">{titulo}</h5>
                        <p className="card-alarme_body-content-description">{descricao}</p>
                    </div>
                </div>
                <CheckCircleFilled style={{
                    color: "#3DD65F"
                }} />

            </div>
        </div>
    );
}

export default CardAlarme;