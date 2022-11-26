import React from 'react';
import notFound from '../../../assets/404.png';

const FourOFour = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <img className='w-2/3' src={notFound} alt="" />
        </div>
    );
};

export default FourOFour;