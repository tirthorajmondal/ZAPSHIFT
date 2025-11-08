import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router"
import { RouterProvider } from 'react-router/dom';
import Layout from './Layouts/Layout.jsx'
import Home from './Pages/Home/Home/Home.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>Oops! Page not found.</div>,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <div>About Us</div>,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
