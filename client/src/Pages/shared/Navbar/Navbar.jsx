import { Link, NavLink } from "react-router";
import darkMoodIcon from '../../../assets/icons/darkmood.png';
import lightMoodIcon from '../../../assets/icons/lightmood.png';
import { useState } from "react";
import ZapShiftLogo from "../ZapShift/ZapShiftLogo";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
    const links = ['Home', 'About Us', 'Services', 'Contact'];
    const [darkMood, setDarkMood] = useState(false);
    return (
        <header className="navbar bg-base-100 shadow-sm px-2 md:px-4 lg:px-8 py-5 rounded-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className=" p-2 lg:hidden hover:bg-transarent">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg> */}
                        <GiHamburgerMenu className="text-xl mr-2"/>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-3">
                        {/* mobile menu */}
                        {
                            links.map((link, index) => <li key={index}><NavLink
                                to={link === 'Home' ? '/' : link.toLowerCase().split(' ')[0]}
                                className={({ isActive }) => `font-semibold text-lg hover:text-gray-600 transition-all duration-100 active:bg-slate-50 ${isActive ? 'text-green-700 hover:text-green-500' : ''}
                            `}
                            >{link}</NavLink></li>)
                        }
                    </ul>
                </div>
                {/* logo */}
                <ZapShiftLogo />
            </div>
            <nav className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3">
                    {
                        links.map((link, index) => <li key={index}><NavLink
                            to={link === 'Home' ? '/' : link.toLowerCase().split(' ')[0]}
                            className={({ isActive }) => `font-semibold text-lg hover:text-gray-600 transition-all duration-100 hover:bg-white active:bg-slate-50 ${isActive ? 'text-green-700 hover:text-green-500 ' : ''}
                            `}
                        >{link}</NavLink></li>)
                    }
                </ul>
            </nav>
            <div className="navbar-end font-bold flex gap-x-4">
                {/* <button onClick={() => setDarkMood(!darkMood)} className="btn btn- btn-circle bg-teal-100"><img src={darkMood ? darkMoodIcon : lightMoodIcon} className="max-w-6" /></button> */}
                <button className="btn btn-outline px-8 py-4">Sign In</button>
                <button className="btn btn-primary text-black px-8 py-4 hidden lg:block">Be a rider</button>
                <button className="btn rounded-full bg-black text-white -ml-4">{'>'}</button>
            </div>
        </header>
    );
};

export default Navbar;