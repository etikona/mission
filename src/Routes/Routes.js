import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import TaskLayout from "../layouts/TaskLayout";
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
           }
    ]
   },
   {
    path: '/task',
    element: <TaskLayout/>,
    children: [
        {
            path:'/task',
            element: <TaskLayout/>
        }
    ]
   }
])