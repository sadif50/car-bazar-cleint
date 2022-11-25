import React from 'react';
import { useNavigate } from 'react-router-dom';

const Category = ({category}) => {
    const navigate = useNavigate();
    const {_id, name, img} = category;
    return (
        <div onClick={()=>navigate(`/category/${_id}`)} className='border p-6 rounded cursor-pointer hover:text-primary hover:bg-slate-100'>
            <div className='flex justify-center items-center'>
                <img className='h-40 w-40' src={img} alt="" />
            </div>
            <h4 className='text-xl mt-4 text-center'>{name}</h4>
        </div>
    );
};

export default Category;