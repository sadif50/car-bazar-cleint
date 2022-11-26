import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div className='loader-bg'>
            <div className='loader'>
                <div className="bg"></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
            </div>
        </div>
    );
};

export default Loader;