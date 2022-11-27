import React from 'react';
import './Product.css';
import verify from '../../../assets/verified.png';

const Product = ({ product, setSelectProduct, setModal }) => {
    const { name, product_photo, resale_price, location, original_price, used_year, seller_name, date_posted, verified } = product;
    return (
        <div className='bg-white shadow p-4 rounded border'>
            <div>
                <div className='p-3 flex items-center justify-center mb-5'>
                    <img className='w-full md:h-64' src={product_photo} alt="" />
                </div>
                <div className='text-center md:text-left'>
                    <h3 className='font-semibold text-2xl'>{name}</h3>
                    <h4 className='mb-3'>by 
                    <span className='text-xl font-semibold relative'>
                        {seller_name} 
                        {
                            verified ? 
                            <img src={verify} alt="" className='absolute w-4 top-2 right-[-20px]' /> :
                            ''
                        }
                    </span></h4>
                    <p><strong>Location:</strong> {location}</p>
                    <div className='md:flex justify-between'>
                        <p><strong>Resale Price:</strong> <span className='text-primary text-2xl'>${resale_price}</span></p>
                        <p>Original Price: <span>${original_price}</span></p>
                    </div>
                    <div className='md:flex justify-between mb-5'>
                        <p>Used: {used_year} years</p>
                        <p>Post Date: {date_posted}</p>
                    </div>
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white w-full"
                        onClick={()=>{
                            setModal(true);
                            setSelectProduct(product)}}
                    >Book Now</label>
                </div>

            </div>
        </div>
    );
};

export default Product;