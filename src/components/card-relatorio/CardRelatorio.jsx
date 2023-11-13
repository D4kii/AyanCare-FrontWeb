import React from "react";
import './card-relatorio.css'
import { FileTextFilled } from "@ant-design/icons";

function CardRelatorio() {
    return (
        <div>
            <div className="card-relatorio">
                <div className="card-relatorio_icon">
                    <FileTextFilled
                    style={{
                        fontSize: '2.5rem',
                        color: '#9986BD'
                    }}
                    />
                </div>
                <div className="card-relatorio_content">
                    <h2 className="card-relatorio_content-title">Relatório</h2>
                    <span className="card-relatorio_content-preview">Sed ut perspiciatis unde omnis...</span>
                </div>
                <div className="card-relatorio_content-time">
                    <p className="data">11/10/2023</p>
                    <p className="hora">17:30</p>

                </div>
            </div>
        </div>
    );
}

export default CardRelatorio;