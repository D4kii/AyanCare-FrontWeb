import React from 'react'
import './card-relatorio-acesso-rapido.css'
import userPhoto from '../../images/background-image.png'
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';

function CardRelatorioAcessoRapido({ data }) {


    return (
        <Card
        style={{
          width: '30vw',
          maxWidth: '350px',
          marginTop: 16,
        }}
        actions={
           [`${data.hora_criacao}H`, data.data_criacao ]
        }
        type='inner'
      >
        <Card.Meta
          title={data.nome}
          description={data.descricao}
        />
        
      </Card>

        );
}

export default CardRelatorioAcessoRapido;