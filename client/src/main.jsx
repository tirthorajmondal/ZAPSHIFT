import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom';
import router from './Routes/Router.jsx';
import AOS from 'aos'
import 'aos/dist/aos.css'
import AuthProvider from './contexts/AuthContext/AuthContext.jsx';
import ThemeProvider from './contexts/ThemeContext/ThemeContext.jsx';

AOS.init()



createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ThemeProvider>
      <div className="bg-[#eaeced]">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  </AuthProvider>
)
