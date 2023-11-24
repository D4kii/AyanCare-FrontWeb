import React from "react";
import './card-turno.css'
import imagem from '../../images/background-image.png'
import { UserOutlined } from "@ant-design/icons";

function CardTurno({paciente, horario}) {

    const profilePicturePaciente = imagem
    const horarioTurno = horario
    const nomePaciente = paciente

    return (
        <div>
            <div className="card-turno">
                <div className="card-turno_field">
                    <div style={{background: imagem? `url(${profilePicturePaciente})` : <UserOutlined />}} className="foto-paciente" alt="Foto de perfil do paciente" />
                    <div className="card-turno_field-paciente-horario">
                        <span className="card-turno_paciente-name">{nomePaciente}</span>
                        <p className="card-turno_horario-turno">{horarioTurno}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardTurno;