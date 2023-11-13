import React from 'react'
import './card-relatorio-acesso-rapido.css'
import userPhoto from '../../images/background-image.png'

function CardRelatorioAcessoRapido({ tituloCard, descricaoCard, nomePaciente }) {


    return (
        <button className="button-relatorio">
            <div className="card-relatorio-acesso-rapido">
                <span className="title">{tituloCard}</span>
                <p className="description">{descricaoCard}</p>
                <div className="actions">
                    <img className="foto-paciente" src={userPhoto} />
                    <p className="paciente-nome">Paciente: {nomePaciente}</p>
                </div>
            </div>
        </button>);
}

export default CardRelatorioAcessoRapido;