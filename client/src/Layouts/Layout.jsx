import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';

const Layout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            {/* nav */}
            <Navbar></Navbar>
            <Outlet />
            {/* footer */}
        </div>
    );
};

export default Layout;