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
                Component: Home
            },
            {
                path: '/about',
                element: <div>About Us</div>,
            },
            {
                path: '/login',
                element: <div>login</div>,
            },
            {
                path: '/register',
                element: <div>register</div>,
            },
            {
                path: '/calculate',
                element: <div>cost calculate</div>,
            },
        ]
    }
])

export default router;