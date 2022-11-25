import React from 'react';

const AllSellers = () => {
    return (
        <div className='border rounded shadow-lg'>
            <div className='p-4 text-xl bg-slate-200'>
                All Sellers
            </div>
            <div className='p-4 overflow-x-auto'>
                <table className='table w-full'>
                    <thead>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Verify</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>$2580</td>
                            <td>Ford</td>
                            <td>Verified</td>
                            <td><button className='btn-sm btn-secondary rounded'>Verify</button></td>
                            <td>
                                <button className='btn-sm btn-error rounded'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;