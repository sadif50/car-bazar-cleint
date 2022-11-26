import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div className='loader-bg'>
            <div class='loader'>
                <div class="bg"></div>
                <div class='circle'></div>
                <div class='circle'></div>
                <div class='circle'></div>
                <div class='circle'></div>
                <div class='circle'></div>
            </div>
        </div>
    );
};

export default Loader;