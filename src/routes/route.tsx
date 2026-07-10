import App from "@/App";
import Tasks from "@/pages/tasks";
import { createBrowserRouter } from "react-router";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "tasks",
                element: <Tasks />,
            },
        ],
    },
    {
        path: "/login",
        element: <div>Login</div>,
    }
]);