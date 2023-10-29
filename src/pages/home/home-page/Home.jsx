import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './home.css'
import Menu from '../../../components/menu/menu';

import { AuthContext } from '../../../contexts/auth';

const Home = () => {
  const { authenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()

  }

  return (
    <div>
      <Menu></Menu>

      <div className="bem-vindo">
        <div className="bem-vindo_field">
          <h1 className='Welcome-user_text'>Seja Bem-Vinda Marcela,</h1>
          <h2>Sentimos sua falta!</h2>

        </div>
      </div>
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
          <button className="button-relatorio">
            <div className="card-relatorio">
              <span className="title">Relatório</span>
              <p className="description">Sed ut perspiciatis unde omnis.</p>
              <div className="actions">
                <img className="foto-paciente" src="../img/exemplo.jpg" />
                <p className="paciente-nome">Paciente: Janice</p>
              </div>
            </div>
          </button>
          <button className="button-relatorio">
            <div className="card-relatorio">
              <span className="title">Relatório</span>
              <p className="description">Sed ut perspiciatis unde omnis.</p>
              <div className="actions">
                <img className="foto-paciente" src="../img/exemplo.jpg" />
                <p className="paciente-nome">Paciente: Janice</p>
              </div>
            </div>
          </button>
          <button className="button-relatorio">
            <div className="card-relatorio">
              <span className="title">Relatório</span>
              <p className="description">Sed ut perspiciatis unde omnis.</p>
              <div className="actions">
                <img className="foto-paciente" src="../img/exemplo.jpg" />
                <p className="paciente-nome">Paciente: Janice</p>
              </div>
            </div>
          </button>
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


      {/* <h1>Home</h1>
      <nav>
        <ul>
          <li>
            <Link to="/agenda">Agenda</Link>
          </li>
          <li>
            <Link to="/relatorios">Relatorios</Link>
          </li>
          <li>
            <Link to="/pacientes">Pacientes</Link>
          </li>
        </ul>
      </nav>
      <span>{String(authenticated)}</span> */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;