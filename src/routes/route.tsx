import App from "@/App";
import { createBrowserRouter } from "react-router";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <div>Users</div>,
            },
            {
                path: "tasks",
                element: <div>Tasks</div>,
            },
        ],
    },
    {
        path: "/login",
        element: <div>Login</div>,
    }
]);