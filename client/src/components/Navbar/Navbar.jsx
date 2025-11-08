import { Link, NavLink } from "react-router";
import darkMoodIcon from '../../assets/icons/darkmood.png';
import lightMoodIcon from '../../assets/icons/lightmood.png';
import { useState } from "react";


const Navbar = () => {
    const links = ['Home', 'About', 'Services', 'Contact'];
    const [darkMood, setDarkMood] = useState(false);
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-3">
                        {/* mobile menu */}
                        {
                            links.map((link, index) => <Link
                                key={index}
                                to={link === 'Home' ? '/' : link.toLowerCase()}
                            >{link}</Link>)
                        }
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl">ZAPSHIFT</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3">
                    {
                        links.map((link, index) => <NavLink
                            key={index}
                            to={link === 'Home' ? '/' : link.toLowerCase()}
                            className={({ isActive }) => `font-semibold text-lg hover:text-gray-600  ${isActive ? 'text-green-700 hover:text-green-500' : ''}
                            `}
                        >{link}</NavLink>)
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <button onClick={() => setDarkMood(!darkMood)} className="btn btn- btn-circle"><img src={darkMood ? darkMoodIcon : lightMoodIcon} className="max-w-6" /></button>
            </div>
        </div>
    );
};

export default Navbar;