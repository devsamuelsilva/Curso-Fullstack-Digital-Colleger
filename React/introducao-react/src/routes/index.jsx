import { createBrowserRouter } from "react-router-dom"
import { MainLayout } from "../Layouts/MainLayouts/MainLayouts";
import Hooks from "../pages/Hooks/Hooks";
import UserPage from "../pages/Users";

export const routes = createBrowserRouter([

    {
        path: "/",
        element: <MainLayout />,
        children:[
            {
                path: "/",
                element: <Hooks />,
            },
            {
                path: "/usuarios",
                element: <UserPage />,
            },
            {
                path: "/clientes",
                element: <h1>Clientes</h1>,
            },
            {
                path: "/produtos",
                element: <h1>Produtos</h1>,
            },
        ], 
    },
]);