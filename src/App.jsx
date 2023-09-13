// function App() {
//     return <h1>joinha</h1>
// }

// export default App

import { useState } from 'react';
import Routes from './routes/routes';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes></Routes>
  );
}

export default App
