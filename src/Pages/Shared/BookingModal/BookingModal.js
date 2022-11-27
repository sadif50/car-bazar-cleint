import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';

const BookingModal = ({ selectProduct, setModal }) => {
    const { user } = useContext(AuthContext);
    const {register, handleSubmit, reset} = useForm();
    const handleBooking = data => {
        axios.post('http://localhost:5000/booking', {
            buyer: user?.displayName,
            email: user?.email,
            meeting_location: data?.meeting_location,
            phone: data?.phone,
            price: selectProduct?.resale_price,
            product_name: selectProduct?.name,
            booked_at: format(new Date(), 'PP'),
            seller: selectProduct?.seller_name,
            seller_email: selectProduct?.seller_email
        })
        .then(function(response){
            console.log(response);
            if(response.data.acknowledged){
                setModal(false);
                toast.success('Your Car Booked Successfully!')
                reset();
            }
        })
        .catch(function(error){
            console.log(error);
        })
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit(handleBooking)} className='grid grid-cols-1 gap-3 mt-10'>
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
                            <input {...register('phone')} type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        </div>

                        <div className='flex items-center'>
                            <label htmlFor="" className='w-1/4'>Location</label>
                            <input {...register('meeting_location')} type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
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