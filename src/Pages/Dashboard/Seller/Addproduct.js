import React from 'react';
import { useForm } from 'react-hook-form';

const Addproduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const addProduct = data => {
        console.log(data);
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
                            <input type="text" {...register("product_condition", { required: "Product condition is required." })} className="input input-bordered w-full" />
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
                            <input type="text" {...register("category", { required: "Category is required." })} className="input input-bordered w-full" />
                            {errors.category && <p className='text-primary'>{errors.category.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"> <span className="label-text">Purchase Year</span></label>
                            <input type="text" {...register("purchase_year", { required: "Purchase Year is required." })} className="input input-bordered w-full" />
                            {errors.purchase_year && <p className='text-primary'>{errors.purchase_year.message}</p>}
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
                        <input className='btn btn-primary mt-4' value="Add Product" type="submit" />
                    </div>
                </form>
            </div>
            <div className='p-4 text-xl bg-slate-200'>
            </div>
        </div>
    );
};

export default Addproduct;