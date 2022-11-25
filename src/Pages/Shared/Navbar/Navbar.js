import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaCar } from 'react-icons/fa';

const Navbar = () => {
    const menuItem = <>
        <li className='rounded lg:ml-4'>
            <NavLink className='rounded font-semibold' to='/'>Home</NavLink>
        </li>
        <li className='rounded lg:ml-4'>
            <NavLink className='rounded font-semibold' to='/dashboard'>Dashboard</NavLink>
        </li>
        <li className='rounded lg:ml-4'>
            <Link className='rounded font-semibold' to='/login'>Login</Link>
        </li>
        <li className='rounded lg:ml-4'>
            <Link className='rounded font-semibold' to='signup'>Sign Up</Link>
        </li>
        <li className='rounded lg:ml-4'>
            <Link className='rounded font-semibold'>Sign Out</Link>
        </li>
    </>;
    const location = useLocation();
    return (
        <div className='bg-slate-100'>
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded w-80">
                            {menuItem}
                        </ul>
                    </div>
                    <Link to='/' className="flex items-center uppercase text-2xl font-bold text-primary"><span>C</span><FaCar className='inline-block' /><span>R</span>&nbsp;<span>BAZAR</span></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
                {location.pathname.includes('dashboard') && <div className="navbar-end lg:hidden">
                    <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>}
            </div>
        </div>

    );
};

export default Navbar;