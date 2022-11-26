import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Product from '../../Shared/Product/Product';

const AdvertizeItems = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        }
    });
    console.log(products);
    return (
        <div className='bg-slate-100 py-20'>
            <div className='w-11/12 mx-auto'>
                <div className='text-center mb-8'>
                    <h2 className='text-2xl md:text-4xl uppercase font-semibold'>Advertised Cars</h2>
                    <p className='text-base'>
                        Find Your Cars From Sellers Advertised Cars
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AdvertizeItems;