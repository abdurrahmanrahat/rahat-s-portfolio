import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home/Home";
import Projects from "../Components/Home/Projects/Projects";

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