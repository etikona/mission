import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddTask from "../Pages/AddTask";
import CompletedTask from "../Pages/CompletedTask";
import MyTask from "../Pages/MyTask";
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
        {
            path: '/addTask',
            element: <AddTask/>
        },
        {
            path: '/myTask',
            element: <MyTask/>
        },
        {
            path: '/completedTask',
            element: <CompletedTask/>
        },
    ]
   

   }
])