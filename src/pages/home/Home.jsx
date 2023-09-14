import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
  return (
    <div>
      <h1>Home</h1>
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
    </div>
  );
}

export default Home;