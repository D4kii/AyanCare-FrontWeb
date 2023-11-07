import { CheckCircleTwoTone, DownOutlined } from "@ant-design/icons";
import profilePicturePaciente from '../../images/background-image.png'
import './card-evento.css'
import React from "react";

function CardEvento({ dayContent, title, description, hexStatus }) {

    const diaEvento = dayContent
    const titulo = title
    const descricao = description
    const color = hexStatus
    const detalhesEvento = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam'
    const localEvento = 'Paraiba'
    const nomePaciente = 'Larissa'

    return (
        <div className="card-evento_body">
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'column'
            }}>

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
                            <p className="card-evento_body-content-description">{descricao}</p>
                        </div>

                    </div>
                    <div className="card-evento_body-field_bubble-color"
                        style={{
                            display: 'flex',
                            gap: '1rem'
                        }}
                    >
                        <div className="bubble-color">

                        </div>
                    </div>

                </div>
                <div className="card-evento_body-read-more" >
                    <p className="card-evento_body-read-more_content">
                        <span style={{
                            fontSize: '12px'
                        }}>Descrição:</span> {detalhesEvento}
                    </p>

                    <div className="card-evento_body-read-more_local-paciente">
                        <p className="card-evento_body-read-more_content">
                            <span style={{
                                fontSize: '12px'
                            }}>Local:</span> {localEvento}
                        </p>
                        <div className="card-paciente_field">
                            <img src={profilePicturePaciente} className="foto-paciente_read-more" alt="Foto de perfil do paciente" />
                            <div className="read-more_field-paciente">
                                <a className="read-more_paciente-name" >{nomePaciente}</a>
                            </div>
                        </div>
                    </div>
                    <div className="card-evento_body-read-more_dias">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardEvento;