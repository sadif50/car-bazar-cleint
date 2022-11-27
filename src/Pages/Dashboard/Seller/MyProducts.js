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
            const res = await fetch(`http://localhost:5000/products?seller_email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    const deleteProduct = id => {
        const agree = window.confirm('Are you sure to delete this product?');
        if(agree){
            fetch(`http://localhost:5000/product/${id}`, {
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
                                <td>{product?.status}</td>
                                <td>
                                    <button onClick={()=>deleteProduct(product._id)} className='btn-sm btn-error rounded'>Delete {product._id}</button>
                                </td>
                                <td><button className='btn-sm btn-secondary rounded'>Advertise</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;