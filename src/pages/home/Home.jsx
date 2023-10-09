import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth';

const Home = () => {
  const { authenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()

  }

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
      <span>{String(authenticated)}</span>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;