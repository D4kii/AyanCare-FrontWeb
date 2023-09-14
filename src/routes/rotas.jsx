// function App() {
//     return <h1>joinha</h1>
// }

// export default App
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from 'react';
import Home from '../pages/home/Home'
import SignIn from '../pages/signin/LogIn';
import SignUp from '../pages/signup/CadastroEmail';



function Rotas() {
  const Private = ({ Item }) => {
    const signed = false;

    return signed > 0 ? Item : signed 
  }

  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" Component={Private(Home)} />
        <Route path="/" Component={SignIn} />
        <Route path="/signup" Component={SignUp} />
        <Route path="*" Component={SignIn} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
//        