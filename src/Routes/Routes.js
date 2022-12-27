import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../Pages/User.js/Login";
import Signin from "../Pages/User.js/Signin";

export  const routes = createBrowserRouter([
   {
    path: '/',
    element: <Main/>,
    children: [

        {
            path: '/signin',
            element: <Signin/>
        },
        {
            path: '/login',
            element: <Login/>
        },
    ]
   

   }
])