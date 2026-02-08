import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom';
import router from './Routes/Router.jsx';
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bg-[#eaeced]">
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
