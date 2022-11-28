import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loader from '../../Shared/Loader/Loader';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: [`product`],
        queryFn: async () => {
            const res = await fetch(`https://car-bazar-server.vercel.app/products?seller_email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    const deleteProduct = id => {
        const agree = window.confirm('Are you sure to delete this product?');
        if(agree){
            fetch(`https://car-bazar-server.vercel.app/product/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Product Deleted Successfully.');
                    refetch();
                }
            })
            .catch(err => console.log(err));
        }
    }

    const advertiseProduct = id => {
        const updatedData = {
            advertise: true
        }
        fetch(`https://car-bazar-server.vercel.app/product/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Product Advertised SuccessFully.');
                refetch();
            }
        })
    }

    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='border rounded shadow-lg'>
            <div className='p-4 text-xl bg-slate-200'>
                My Products
            </div>
            <div className='p-4 overflow-x-auto'>
                <table className='table w-full'>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) => <tr key={product._id}>
                                <td>{i+1}</td>
                                <td>{product.name}</td>
                                <td>${product.resale_price}</td>
                                <td>{product.category}</td>
                                <td>
                                    {(product?.sold) ? 'Sold' : 'Available'}
                                </td>
                                <td>
                                    <button onClick={()=>deleteProduct(product._id)} className='btn-sm btn-error rounded'>Delete</button>
                                </td>
                                <td>
                                    {
                                        (product?.advertise) 
                                        ? <>
                                            {
                                                (product?.sold) ? <strong>Product Sold</strong> : <button className='btn-sm btn-success rounded text-white' disabled>Product Advertised</button> 
                                            }
                                        </>
                                        
                                        : <>
                                            {
                                                (product?.sold) ? <strong>Product Sold</strong> : <button onClick={()=>advertiseProduct(product._id)} className='btn-sm btn-info rounded'>Advertise</button>
                                            }
                                        </>
                                    }
                                    
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;