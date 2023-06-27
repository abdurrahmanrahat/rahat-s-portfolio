import { createBrowserRouter } from "react-router-dom";
import Projects from "../Components/Projects/Projects";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home/Home";

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