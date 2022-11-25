import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashBoardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-base-300">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li className='border-b border-cyan-300-300'><NavLink to="/dashboard/myorders">My Orders</NavLink></li>
                        <li className='border-b border-cyan-300-300'><NavLink to="/dashboard/addProduct">Add a Product</NavLink></li>
                        <li className='border-b border-cyan-300-300'><NavLink to="/dashboard/myProducts">My Products</NavLink></li>
                        <li className='border-b border-cyan-300-300'><NavLink to="/dashboard/myBuyers">My Buyers</NavLink></li>
                        <li className='border-b border-cyan-300-300'><NavLink to="/dashboard/allSellers">All Sellers</NavLink></li>
                        <li className='border-b border-cyan-300-300'><NavLink to="/dashboard/allBuyers">All Buyers</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;