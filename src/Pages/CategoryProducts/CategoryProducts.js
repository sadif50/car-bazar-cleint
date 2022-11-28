import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../Shared/BookingModal/BookingModal';
import Loader from '../Shared/Loader/Loader';
import Product from '../Shared/Product/Product';

const CategoryProducts = () => {
    const [selectProduct, setSelectProduct] = useState(null);
    const [modal, setModal] = useState(false);
    const category = useLoaderData();

    // Load Product by category name
    const { data: products = [], isLoading } = useQuery({
        queryKey: [`category`],
        queryFn: async () => {
            const res = await fetch(`https://car-bazar-server.vercel.app/category?category_name=${category?.name}`);
            const data = await res.json();
            return data;
        }
    });
    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='w-11/12 mx-auto py-20'>
            <div className='text-center mb-8'>
                <h2 className='text-2xl md:text-4xl uppercase font-semibold'>{category.name}</h2>
                <p className='text-base'>
                    Showing cars by your selected brand.
                </p>
            </div>
            <hr />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                {
                    products.map(product => <Product 
                        key={product._id} 
                        product={product}
                        setSelectProduct={setSelectProduct}
                        setModal={setModal}
                        ></Product>)
                }
            </div>
            {
                modal && <BookingModal
                selectProduct={selectProduct}
                setModal={setModal}
            ></BookingModal>
            }
        </div>
    );
};

export default CategoryProducts;