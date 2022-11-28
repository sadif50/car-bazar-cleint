import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loader from '../../Shared/Loader/Loader';

const Addproduct = () => {
    const {user} = useContext(AuthContext);
    const [loader, setLoader] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // image server api
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    // Fetch categories
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://car-bazar-server.vercel.app/categories');
            const data = await res.json();
            return data;
        }
    });

    // Fetch current user data
    const { data: userData = [], isLoading } = useQuery({
        queryKey: [`user`],
        queryFn: async () => {
            const res = await fetch(`https://car-bazar-server.vercel.app/user?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    // handle add product
    const addProduct = data => {

        // only seller can submit this form
        if((userData?.role === 'seller') && !isLoading){
            setLoader(true);

            // upload image
            const image = data.product_photo[0];
            const formData = new FormData();
            formData.append('image', image);

            // send image to image server
            const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
            fetch(url, {
                method: 'POST',
                body: formData
            })
            .then(res => res.json())
            .then(imgData => {
                if(imgData.success){

                    // products data
                    const productData = {
                        name: data.name,
                        resale_price: data.resale_price,
                        original_price: data.original_price,
                        category: data.category,
                        description: data.description,
                        location: data.location,
                        mobile_number: data.mobile_number,
                        product_condition: data.product_condition,
                        product_photo: imgData.data.url,
                        purchase_year: data.purchase_year,
                        used_year: data.used_year,
                        seller_id: userData?._id,
                        seller_name: userData?.name,
                        seller_email: userData?.email,
                        seller_photo: userData?.image,
                        verified: (userData?.verified) ? true : false,
                        date_posted: format(new Date(), 'PP'),
                        advertise: false,
                        sold: false
                    }
                    // call the function to save product info
                    saveProduct(productData);
                    reset();
                }
            })
        }
        else {
            toast.error('Add Product Only For Seller Account');
            reset();
        }
    }

    // save product handler
    const saveProduct = productData => {
        fetch('https://car-bazar-server.vercel.app/addProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                toast.success('Product Added SuccessFully.');
                setLoader(false);

                // navigate to my products
                navigate('/dashboard/myProducts');
            }
        })
    }

    if(loader){
        return <Loader></Loader>
    }
    return (
        <div className='border rounded shadow-lg'>
            <div className='p-4 text-xl bg-slate-200'>
                Add a Product
            </div>
            <div className='p-4'>
                <form onSubmit={handleSubmit(addProduct)}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className="form-control w-full">
                            <label className="label"> <span className="label-text">Product Name</span></label>
                            <input type="text" {...register("name", { required: "Product name is required." })} className="input input-bordered w-full" />
                            {errors.name && <p className='text-primary'>{errors.name.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"> <span className="label-text">Resale Price</span></label>
                            <input type="text" {...register("resale_price", { required: "Resale price is required." })} className="input input-bordered w-full" />
                            {errors.resale_price && <p className='text-primary'>{errors.resale_price.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"> <span className="label-text">Original Price</span></label>
                            <input type="text" {...register("original_price", { required: "Original price is required." })} className="input input-bordered w-full" />
                            {errors.original_price && <p className='text-primary'>{errors.original_price.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"> <span className="label-text">Product Condition</span></label>
                            <select {...register("product_condition", { required: "Product condition is required." })} className="input input-bordered w-full">
                                <option value="" selected disabled>Select Condition</option>
                                <option value="excelent">Excelent</option>
                                <option value="good">Good</option>
                                <option value="fair">Fair</option>
                            </select>
                            {errors.product_condition && <p className='text-primary'>{errors.product_condition.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"> <span className="label-text">Mobile Number</span></label>
                            <input type="text" {...register("mobile_number", { required: "Mobile number is required." })} className="input input-bordered w-full" />
                            {errors.mobile_number && <p className='text-primary'>{errors.mobile_number.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"> <span className="label-text">Location</span></label>
                            <input type="text" {...register("location", { required: "Location is required." })} className="input input-bordered w-full" />
                            {errors.location && <p className='text-primary'>{errors.location.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"> <span className="label-text">Product Category</span></label>
                            <select type="text" {...register("category", { required: "Category is required." })} className="input input-bordered w-full">
                                <option disabled selected>Select Category</option>
                                {
                                    categories.map(category => <option value={category.name} key={category._id}>{category.name}</option>)
                                }
                            </select>
                            {errors.category && <p className='text-primary'>{errors.category.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"> <span className="label-text">Purchase Year</span></label>
                            <input type="text" {...register("purchase_year", { required: "Purchase Year is required." })} className="input input-bordered w-full" />
                            {errors.purchase_year && <p className='text-primary'>{errors.purchase_year.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"> <span className="label-text">Years of use</span></label>
                            <input type="text" {...register("used_year", { required: "Purchase Year is required." })} className="input input-bordered w-full" />
                            {errors.used_year && <p className='text-primary'>{errors.used_year.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"> <span className="label-text">Product Photo</span></label>
                            <input type="file" {...register("product_photo", { required: "Purchase Year is required." })} className="input input-bordered w-full" />
                            {errors.product_photo && <p className='text-primary'>{errors.product_photo.message}</p>}
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Description</span></label>
                        <textarea {...register("description", {
                            required: "Description is required"
                        })} className="input input-bordered w-full" ></textarea>
                        {errors.description && <p className='text-primary'>{errors.description.message}</p>}
                    </div>
                    <div className='flex justify-end'>
                        <input className='btn btn-primary text-white mt-4' value="Add Product" type="submit" />
                    </div>
                </form>
            </div>
            <div className='p-4 text-xl bg-slate-200'>
            </div>
        </div>
    );
};

export default Addproduct;