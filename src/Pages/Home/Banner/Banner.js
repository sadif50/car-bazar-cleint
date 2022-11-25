import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='heroBanner w-full'>
            <div className='text-white'>
                <h2 className='text-3xl md:text-6xl text-center font-semibold mb-5'> WELCOME TO <span className='text-primary'>CAR BAZAR</span></h2>
                <p className='text-center text-base md:text-2xl'>Find Best Qualities Second Hand Cars<br/>From Us</p>
            </div>
        </div>
    );
};

export default Banner;