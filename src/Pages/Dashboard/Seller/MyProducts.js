import React from 'react';

const MyProducts = () => {
    return (
        <div className='border rounded shadow-lg'>
            <div className='p-4 text-xl bg-slate-200'>
                My Products
            </div>
            <div className='p-4 overflow-x-auto'>
                <table className='table w-full'>
                    <thead>
                        <th>SL</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Action</th>
                        <th>Advertise</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td></td>
                            <td>$2580</td>
                            <td>Ford</td>
                            <td>Unsold</td>
                            <td>
                                <button className='btn-sm btn-error rounded'>Delete</button>
                            </td>
                            <td><button className='btn-sm btn-secondary rounded'>Advertise</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;