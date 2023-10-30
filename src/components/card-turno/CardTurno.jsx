import React from "react";
import './card-turno.css'
import imagem from '../../images/background-image.png'

function CardTurno() {

    const profilePicturePaciente = imagem
    const horarioTurno = '17H - 18H'
    const nomePaciente = 'Janine Oliveira'

    return (
        <div>
            <div className="card-turno">
                <div className="card-turno_field">
                    <img src={profilePicturePaciente} className="foto-paciente" alt="Foto de perfil do paciente" />
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