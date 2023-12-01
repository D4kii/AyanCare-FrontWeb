import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css'
import Menu from '../../../components/menu/menu';
import CardRelatorioAcessoRapido from '../../../components/cards-acesso-rapido/AcessoRapidoCardRelatorio';

import { AuthContext } from '../../../contexts/auth';
import { getModificacoesByIDCuidador } from '../../../services/api';
import Loading from '../../../components/loading/Loading';
import { Divider, Empty, List } from 'antd';
import { StarOutlined } from '@ant-design/icons';

// //Pegando o json do cuidador e o token como string do localStorage
const cuidadorLocalStorage = localStorage.getItem('cuidador')
const cuidadorJSON = cuidadorLocalStorage ? JSON.parse(cuidadorLocalStorage) : null;
const idCuidador = cuidadorJSON ? cuidadorJSON.id : null;
const Home = () => {
  const [modificacoes, setModificacoes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataModificacoesCuidador = await getModificacoesByIDCuidador(idCuidador);
        setModificacoes(dataModificacoesCuidador);
        setLoading(false);
      } catch (erro) {
        console.log('Algo deu errado com o acesso rápido: ', erro);
        setLoading(false);
      }
    };

    if (idCuidador) {
      fetchData();
    }
  }, [idCuidador]); // Certifique-se de que idCuidador é estável

  console.log(modificacoes);


  //Para pegar os dados no localStorage e utilizar
  const cuidadorItem = localStorage.getItem("cuidador")
  const cuidadorJSON = {}
  cuidadorJSON.user = JSON.parse(cuidadorItem);
  const welcomeTitle = `Seja Bem-vindo, ${cuidadorJSON.user.nome}!`

  return (
    <div>

      <Menu></Menu>

      <div className="bem-vindo">
        <div className="bem-vindo_field">
          <h1 className='Welcome-user_text'>{welcomeTitle}</h1>
          <h2>Sentimos sua falta.</h2>

        </div>
      </div>
      <section className="acesso-rapido_field">

        <div className="informacao">
          <div className="recentes">
            <h3 className='recentes-title'>Minhas atividades recentes</h3>
            <p className='recentes-subtitle'>
              Confira suas atividades mais recentes logo abaixo e mantenha-se
              atualizado sobre o que está acontecendo na sua conta.
            </p>
          </div>
          <Divider />

          {loading ?
            <Loading />
            :
            <div>
              {
                modificacoes && modificacoes.notificacao ?
                  (
                    <div className="cards-do-relatorios">
                      {modificacoes.notificacao.slice(-5).map((modificacao) => (
                        <CardRelatorioAcessoRapido
                          data={modificacao}
                          key={modificacao.id}  // Certifique-se de fornecer uma chave única para cada elemento do array
                        />
                      ))}
                    </div>
                  ) : (
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'Você ainda não tem nenhuma atividade. Vincule-se para movimentar sua conta!'} />
                  )
              }
            </div>

          }


        </div>


      </section>
    </div>
  );
}

export default Home;