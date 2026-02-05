import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <Error />,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
            },
            {
                path: '/about',
                element: <div>About Us</div>,
            }
        ]
    }
])

export default router;