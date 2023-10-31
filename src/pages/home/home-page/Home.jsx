import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './home.css'
import Menu from '../../../components/menu/menu';
import CardRelatorioAcessoRapido from '../../../components/cards-acesso-rapido/AcessoRapidoCardRelatorio';

import { AuthContext } from '../../../contexts/auth';

const Home = () => {
 

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
            <h3>Minhas atividades recentes</h3>
            <p>
              Confira suas atividades mais recentes logo abaixo e mantenha-se
              atualizado sobre o que está acontecendo na sua conta.
            </p>
            <hr />
          </div>

          <div className="cards-do-relatorios">
            <CardRelatorioAcessoRapido
              tituloCard={'Relatório'}
              nomePaciente={'Janine'}
              descricaoCard={'Sed ut perspiciatis unde omnis.'}
            />
            <CardRelatorioAcessoRapido
              tituloCard={'Relatório'}
              nomePaciente={'Janine'}
              descricaoCard={'Sed ut perspiciatis unde omnis.'}
            />
            <CardRelatorioAcessoRapido
              tituloCard={'Relatório'}
              nomePaciente={'Janine'}
              descricaoCard={'Sed ut perspiciatis unde omnis.'}
            />

          </div>
        </div>
        <div className="acesso">
          <div className="acesso-rapido">
            <h3>Acesso rápido</h3>
            <p>
              Acesse de forma ágil funcionalidades específicas da aplicação pelo
              Acesso rápido.
            </p>
            <hr />
          </div>
          <div className="btns-acesso">
            <button className="button-acesso-rapido">Meus Turnos</button>
            <button className="button-acesso-rapido">Alarmes de hoje</button>
            <button className="button-acesso-rapido">Calendário</button>
            <button className="button-acesso-rapido">Teste de humor</button>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Home;