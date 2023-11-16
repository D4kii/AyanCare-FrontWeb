import React from "react";
import './cards-pacientes.css'
import Button from "../button/Button";


function CardPacientes({PacienteName, PacienteAge, PacienteProfilePicture}) {

    const nomePaciente = PacienteName
    const idadePaciente = PacienteAge
    const imagemPerfilPaciente = PacienteProfilePicture

    return (
        <div className="card">
            <div className="paciente-field">
                <img className="foto-paciente" src={imagemPerfilPaciente} alt="" />
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