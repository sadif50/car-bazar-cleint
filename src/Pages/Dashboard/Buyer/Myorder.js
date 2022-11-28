import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loader from '../../Shared/Loader/Loader';

const Myorder = () => {
    const {user} = useContext(AuthContext);
    
    // fetch order using query
    const { data: orders = [], isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://car-bazar-server.vercel.app/myorders?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });
    if(isLoading){
        <Loader></Loader>
    }
    return (
        <div className='border rounded shadow-lg'>
            <div className='p-4 text-xl bg-slate-200'>
                My Orders
            </div>
            <div className='p-4 overflow-x-auto'>
                <table className='table w-full'>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Product</th>
                            <th>Image</th>
                            <th>Seller</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, i) => <tr>
                                <td>{i+1}</td>
                                <td>{order?.product_name}</td>
                                <td>
                                    <img src={order?.image} alt="" className='h-20 w-20 rounded-xl' />
                                </td>
                                <td>{order?.seller}</td>
                                <td>$ {order?.price}</td>
                                <td>
                                    <button className='btn-sm btn-info rounded'>pay</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myorder;