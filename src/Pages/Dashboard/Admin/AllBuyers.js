import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../Shared/Loader/Loader';

const AllBuyers = () => {
    const { data: buyers = [], isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users?role=buyer');
            const data = await res.json();
            return data;
        }
    });
    console.log(buyers)
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='border rounded shadow-lg'>
            <div className='p-4 text-xl bg-slate-200'>
                All Sellers
            </div>
            <div className='p-4 overflow-x-auto'>
                <table className='table w-full'>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, i) => <tr key={buyer?._id}>
                                <td>{i + 1}</td>
                                <td>
                                    <img src={buyer.image} className='w-16 h-16 bg-slate-300 rounded-full border shadow' alt="" />
                                </td>
                                <td>{buyer?.name}</td>
                                <td>{buyer?.email}</td>
                                <td>
                                    <button className='btn-sm btn-error rounded'>Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;