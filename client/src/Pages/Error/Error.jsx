import { Link } from 'react-router';
import { FaArrowAltCircleLeft, FaArrowLeft, FaLongArrowAltLeft } from 'react-icons/fa';

const Error = () => {
    return (
        <div className='min-h-[80vh] flex flex-col justify-center items-center'>
            <h1 className="text-4xl font-bold text-center mt-20">4<span className='text-red-500'>0</span>4 - Page Not Found</h1>
            <p className="text-center mt-4">Sorry, the page you are looking for does not exist.</p>
            <div className='flex mt-6 justify-center gap-6'>
                <Link to={-1} className='btn outline-0 border-0 text-lg font-bold text-red-500 relative group bg-white p-0 hover:bg-base-100'>
                    <span className='absolute group-hover:-translate-x-5 left-0 text-black -z-10 transition-all duration-150 text-'><FaArrowLeft />
                    </span>
                    <span>Go Back</span>
                </Link>
                <Link to={'/'} className='btn border-0 outline-2 bg-transparent hover:translate-x-1 transition-all text-lg duration-150 hover:bg-theme'>Go Home</Link>
            </div>
        </div>
    );
};

export default Error;