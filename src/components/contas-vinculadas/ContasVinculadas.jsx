import React from "react";
import Button from "../button/Button";
import CardPacientes from "../card-pacientes/CardPaciente";
import { PlusOutlined } from '@ant-design/icons'
import './contas-vinculadas.css'

function ContasVinculadasScreen({ }) {

    return (
        <div className="contas-vinculadas_screen">
            <div className="contas-vinculadas_titulo-criar-vinculo">
                <h2 className="contas-vinculadas_title">
                    Contas Vinculadas
                </h2>
                <Button
                    nameButton={'Criar vínculo'}
                    iconButton={<PlusOutlined />}
                    heigthButton={'2rem'}
                    textSize={'1rem'}
                />

            </div>
            <CardPacientes/>

        </div>
    );
}

export default ContasVinculadasScreen;