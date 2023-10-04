import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../authProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import LandingPage from "../pages/LandingPage";
import Home from "../pages/home/Home.jsx";
import Agenda from "../pages/home/Agenda";
import Pacientes from "../pages/home/Pacientes";
import Relatorios from "../pages/home/Relatorios";
import SignIn from "../pages/signin/LogIn";
import Signup from "../pages/signup/CadastroEmail";

const Routes = () => {


    const { token } = useAuth();

    //Define as rotas que serão acessíveis a todos os usuários
    const routesForPublic = [
        {
            path: "/landing-page",
            element: <LandingPage/>,
        }

    ];

    //Define rotas que serão acessíveis somente a usuários autenticados 
    const routesForAuthenticatedOnly = [
        {
            path: "/",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "/home",
                    element: <Home/>,
                },
                {
                    path: "/agenda",
                    element: <Agenda/>,
                },
                {
                    path: "/pacientes",
                    element: <Pacientes/>,
                },
                {
                    path: "/relatorios",
                    element: <Relatorios/>,
                },
                {
                    path: "/logout",
                    element: <div>Logout</div>,
                }
            ]
        }
    ];

    //Define rotas acessíveis somente a usuários não autenticados
    const routesForNotAuthenticatedOnly = [
        {
            path: "/",
            element: <LandingPage/>
        },
        {
            path: "/login",
            element: <SignIn/>
        },
        {
            path: "/signup",
            element: <Signup/>
        }
    ];
    //  if (!routesForPublic && !routesForAuthenticatedOnly && !routesForNotAuthenticatedOnly) {
    //     const anotherRoutes = [
    //         {
    //             path: "/*",
    //             element: <LandingPage/>
    //         }
    //     ]
    //  }

    //Combina e inclue condicionalmente as rotas com base no status de autenticação
    const router = createBrowserRouter([
        ...routesForPublic,
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...routesForAuthenticatedOnly,
    ]);

    //Fornece a configuração das rotas usando o RouterProvider
    return <RouterProvider router={router} />;


};

export default Routes;







// import { Route, BrowserRouter, Routes } from "react-router-dom";
// import { useState } from 'react';
// import Home from '../pages/home/Home'
// import SignIn from '../pages/signin/LogIn';
// import SignUp from '../pages/signup/CadastroEmail';



// function Rotas() {
//   const Private = ({ Item }) => {
//     const signed = false;

//     return signed > 0 ? Item : signed
//   }

//   const [count, setCount] = useState(0)

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route exact path="/home" Component={Private(Home)} />
//         <Route path="/" Component={SignIn} />
//         <Route path="/signup" Component={SignUp} />
//         <Route path="*" Component={SignIn} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default Rotas;
// //        