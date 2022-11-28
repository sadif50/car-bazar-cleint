import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useBuyer from '../Hooks/useBuyer';
import useSeller from '../Hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext);

    // Load user role by using custom hooks
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);

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
                            isBuyer && <li className='border-b border-cyan-300-300'><NavLink to="/dashboard/myorders">My Orders</NavLink></li>
                        }
                        {
                            isSeller && <>
                                <li className='border-b border-cyan-300-300'><NavLink to="/dashboard/addProduct">Add a Product</NavLink></li>
                                <li className='border-b border-cyan-300-300'><NavLink to="/dashboard/myProducts">My Products</NavLink></li>
                            </>
                        }
                        {
                            isAdmin && <>
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