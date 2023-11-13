import React from "react";
import './cards-pacientes.css'
import Button from "../button/Button";


function CardPacientes({PacienteName, PacienteAge, PacienteProfilePicture}) {

    const nomePaciente = PacienteName
    const idadePaciente = PacienteAge
    const imagemPerfilPaciente = PacienteProfilePicture

    return (
        <div class="card">
            <div className="paciente-field">
                <img class="foto-paciente" src={imagemPerfilPaciente} alt="" />
                <div class="dados">
                    <span>{nomePaciente}</span>
                    <p class="dados-paciente">{idadePaciente}</p>
                </div>

            </div>
            <div class="btns-acessos">
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