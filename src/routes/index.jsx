import {
    Route,
    BrowserRouter as Router,
    Routes,
    Navigate
} from "react-router-dom";
import React, { useState } from "react";
import LandingPage from "../pages/LandingPage";
import Home from "../pages/home/Home.jsx";
import Agenda from "../pages/home/Agenda";
import Pacientes from "../pages/home/Pacientes";
import Relatorios from "../pages/home/Relatorios";
import SignIn from "../pages/signin/LogIn.jsx";
import Signup from "../pages/signup/CadastroEmail.jsx";

import { AuthContext } from "../contexts/auth";

const AppRoutes = () => {

    const [{user, setUser}] = useState(null);

    const login = (email, password) => {
        console.log('login', {email, password});
        setUser({id: "123", email})
    };

    const logout = () => {
        console.log('logout');
    };

    return (
        <Router>
            <AuthContext.Provider value={{authenticated:!! user, user, login}}>
                <Routes>
                    <Route exact path="/signin" element={<SignIn />} />
                    <Route exact path="/login" element={<SignIn />} />
                    <Route exact path="/" element={<LandingPage />} />
                    <Route exact path="/signup" element={<Signup />} />
                </Routes>
            </AuthContext.Provider>
        </Router>
    )
};

// const { token } = useAuth();

// //Define as rotas que serão acessíveis a todos os usuários
// const routesForPublic = [
//     {
//         path: "/landing-page",
//         element: <LandingPage/>,
//     }

// ];

// //Define rotas que serão acessíveis somente a usuários autenticados 
// const routesForAuthenticatedOnly = [
//     {
//         path: "/",
//         element: <ProtectedRoute />,
//         children: [
//             {
//                 path: "/home",
//                 element: <Home/>,
//             },
//             {
//                 path: "/agenda",
//                 element: <Agenda/>,
//             },
//             {
//                 path: "/pacientes",
//                 element: <Pacientes/>,
//             },
//             {
//                 path: "/relatorios",
//                 element: <Relatorios/>,
//             },
//             {
//                 path: "/logout",
//                 element: <div>Logout</div>,
//             }
//         ]
//     }
// ];

// //Define rotas acessíveis somente a usuários não autenticados
// const routesForNotAuthenticatedOnly = [
//     {
//         path: "/",
//         element: <LandingPage/>
//     },
//     {
//         path: "/login",
//         element: <SignIn/>
//     },
//     {
//         path: "/signup",
//         element: <Signup/>
//     }
// ];
// //  if (!routesForPublic && !routesForAuthenticatedOnly && !routesForNotAuthenticatedOnly) {
// //     const anotherRoutes = [
// //         {
// //             path: "/*",
// //             element: <LandingPage/>
// //         }
// //     ]
// //  }

// //Combina e inclue condicionalmente as rotas com base no status de autenticação
// const router = createBrowserRouter([
//     ...routesForPublic,
//     ...(!token ? routesForNotAuthenticatedOnly : []),
//     ...routesForAuthenticatedOnly,
// ]);

// //Fornece a configuração das rotas usando o RouterProvider
// return <RouterProvider router={router} />;




export default AppRoutes;

