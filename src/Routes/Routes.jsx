import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Projects from "../Components/Projects/Projects";
import Layout from "../Layout/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "projects",
                element: <Projects></Projects>
            }
        ]
    },
]);

export default router;