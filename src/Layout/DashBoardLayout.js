import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Loader from '../Pages/Shared/Loader/Loader';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext);
    const { data: userData = [], isLoading } = useQuery({
        queryKey: [`user`],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/user?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-5">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-base-300">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {
                            (userData.role === 'buyer') && <li className='border-b border-cyan-300-300'><NavLink to="/dashboard/myorders">My Orders</NavLink></li>
                        }
                        {
                            (userData.role === 'seller') && <>
                                <li className='border-b border-cyan-300-300'><NavLink to="/dashboard/addProduct">Add a Product</NavLink></li>
                                <li className='border-b border-cyan-300-300'><NavLink to="/dashboard/myProducts">My Products</NavLink></li>
                            </>
                        }
                        {
                            (userData.role === 'admin') && <>
                                <li className='border-b border-cyan-300-300'><NavLink to="/dashboard/allSellers">All Sellers</NavLink></li>
                                <li className='border-b border-cyan-300-300'><NavLink to="/dashboard/allBuyers">All Buyers</NavLink></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;