import React from 'react';

const EmailSubscribe = () => {
    return (
        <div className='py-20 w-11/12 mx-auto'>
            <div className='text-center mb-8'>
                <h2 className='text-2xl md:text-4xl uppercase font-semibold'>Subscribe to Get Alert</h2>
                <p className='text-base'>
                    Get News for Cars
                </p>
            </div>
            <div className='flex justify-center'>
                <div className='w-full md:w-9/12 lg:w-1/2 sm:flex flex-wrap sm:flex-nowrap text-center'>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full mb-3 sm:mb-0" />
                    <button className='btn btn-primary'>Get News</button>
                </div>
            </div>
        </div>
    );
};

export default EmailSubscribe;