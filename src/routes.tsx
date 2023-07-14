import { createBrowserRouter } from "react-router-dom";
import { TimeLine } from "./pages/Timeline";
import { Status } from "./pages/Status";
import { Default } from './layout/default'

// http://localhost:5173/ path aqui

export const router = createBrowserRouter([
    // {
    //     path: '/',
    //     element: <TimeLine />
    // },

    // {
    //     path: '/tweet',
    //     element: <Status />
    // },

{
    path: '/',
    element: <Default />,
    children: [
        
    {
        path: '/',
        element: <TimeLine />
    },

    {
        path: '/tweet',
        element: <Status />
    },

    ]
}

])