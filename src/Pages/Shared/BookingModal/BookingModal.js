import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ selectProduct }) => {
    const { user } = useContext(AuthContext);
    const handleBooking = e => {
        e.preventDefault();

    }
    console.log('slectProduct', selectProduct);

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <div className='flex items-center'>
                            <label htmlFor="" className='w-1/4'>Name</label>
                            <input name="name" type="text" defaultValue={user?.displayName} disabled className="input w-full input-bordered" />
                        </div>

                        <div className='flex items-center'>
                            <label htmlFor="" className='w-1/4'>Email</label>
                            <input name="email" type="email" defaultValue={user?.email} disabled className="input w-full input-bordered" />
                        </div>

                        <div className='flex items-center'>
                            <label htmlFor="" className='w-1/4'>Product</label>
                            <input name="product_name" type="text" defaultValue={selectProduct?.name} disabled className="input w-full input-bordered" />
                        </div>

                        <div className='flex items-center'>
                            <label htmlFor="" className='w-1/4'>Price ($)</label>
                            <input name="price" type="text" defaultValue={selectProduct?.resale_price} disabled className="input w-full input-bordered" />
                        </div>

                        <div className='flex items-center'>
                            <label htmlFor="" className='w-1/4'>Mobile</label>
                            <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        </div>

                        <div className='flex items-center'>
                            <label htmlFor="" className='w-1/4'>Location</label>
                            <input name="phone" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                        </div>
                        <br />
                        <input className='btn btn-primary text-white w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;