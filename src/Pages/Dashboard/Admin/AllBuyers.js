import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
import Loader from '../../Shared/Loader/Loader';

const AllBuyers = () => {

    // fetch buyer using query
    const { data: buyers = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://car-bazar-server.vercel.app/users?role=buyer');
            const data = await res.json();
            return data;
        }
    });

    // Delete buyer function
    const deleteUser = id => {
        const agree = window.confirm('Are you sure to delete this buyer?');
        if(agree){
            fetch(`https://car-bazar-server.vercel.app/user/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Buyer Delete Successful.');
                    refetch();
                }
            })
            .catch(err => console.log(err));
        }
    }
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='border rounded shadow-lg'>
            <div className='p-4 text-xl bg-slate-200'>
                All Buyers
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
                                    <button onClick={()=>deleteUser(buyer._id)} className='btn-sm btn-error rounded'>Delete</button>
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