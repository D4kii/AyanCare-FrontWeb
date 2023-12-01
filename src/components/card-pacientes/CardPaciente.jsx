import React from "react";
import './cards-pacientes.css'
import Button from "../button/Button";


function CardPacientes({ PacienteName, PacienteAge, PacienteProfilePicture }) {

    const nomePaciente = PacienteName
    const idadePaciente = PacienteAge
    const imagemPerfilPaciente = PacienteProfilePicture

    return (
        <div className="card">
            <div className="paciente-field">
                <div className="foto-paciente"
                    style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50px',
                        background: imagemPerfilPaciente ? `lightgray 50% / cover no-repeat` : '#7E6F94',
                        backgroundImage: imagemPerfilPaciente ? `url(${imagemPerfilPaciente})` : 'none'
                    }}
                ></div>
                <div className="dados">
                    <span>{nomePaciente}</span>
                    <p className="dados-paciente">{idadePaciente}</p>
                </div>

            </div>
            <div className="btns-acessos">
                <Button
                    nameButton={'Relatórios'}
                    heigthButton={'30px'}
                    widthButton={'95px'}
                    textSize={'12px'}
                />
                <Button
                    nameButton={'Ver agenda'}
                    heigthButton={'30px'}
                    widthButton={'max-content'}
                    textSize={'12px'}
                />
                <Button
                    nameButton={'Abrir Perfil'}
                    heigthButton={'30px'}
                    widthButton={'95px'}
                    textSize={'12px'}
                />
            </div>

        </div>
    )
}

export default CardPacientes;