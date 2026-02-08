import { Outlet } from 'react-router';
import Navbar from '../Pages/shared/Navbar/Navbar';
import Footer from '../Pages/shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-[1500px] mx-auto font-urbanist pt-4 lg:pt-8 pb-1.5 md:pb-3 lg:pb-12 px-2 2xl:px-0'>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-288px)]" >
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;