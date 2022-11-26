import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from './Category';

const Categories = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div className='w-11/12 mx-auto py-20'>
            <div className='text-center mb-8'>
                <h2 className='text-2xl md:text-4xl uppercase font-semibold'>Category</h2>
                <p className='text-base'>
                    Find Your Cars By Barnd Name
                </p>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 transition-all'>
            {
                categories.map(category => <Category 
                    key = {category._id} category={category}
                ></Category>)
            }
            </div>
        </div>
    );
};

export default Categories;