import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import signImg from '../../../assets/user/signup.png';
import { toast } from 'react-toastify';

const Signup = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUserWithEmail, updateInfo } = useContext(AuthContext);

    const imageAPIkey = process.env.REACT_APP_imgbb_key;

    const handleSignUp = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageAPIkey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const userData = {
                        name: data.name,
                        email: data.email,
                        role: data.role,
                        image: imgData.data.url,
                        verified: false
                    }
                    createUserWithEmail(data.email, data.password)
                    .then(res => {
                        const user = res.user;
                        console.log(user);
                        toast.success('Sign Up Successful.');

                        updateInfo(data.name, userData.image)
                        .then(() => {
                            saveUser(userData);
                        })
                        .catch(err => console.log(err));
                    })
                    .catch(err => {
                        console.log(err);
                        toast.error(err.message)
                    });
                }
            })


    }
    const saveUser = userData => {
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            reset();
        })
    }
    return (
        <div className='py-10 w-11/12 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <img className='w-full hidden md:block' src={signImg} alt="" />
                </div>
                <div className='flex justify-center'>
                    <div className='md:w-1/2'>
                        <h2 className='text-2xl md:text-4xl mb-2 text-center font-semibold'>Sign Up</h2>
                        <hr className='md:hidden' />
                        <form onSubmit={handleSubmit(handleSignUp)}>
                            <div className="form-control w-full">
                                <label className="label"> <span className="label-text">Name</span></label>
                                <input type="text" {...register("name", { required: "Name Required" })} className="input input-bordered w-full" />
                                {errors.name && <p className='text-primary'>{errors.name.message}</p>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label"> <span className="label-text">Email</span></label>
                                <input type="email" {...register("email", { required: "Type a valid Email" })} className="input input-bordered w-full" />
                                {errors.email && <p className='text-primary'>{errors.email.message}</p>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label"> <span className="label-text">Password</span></label>
                                <input type="password" {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be 6 characters long" }
                                })} className="input input-bordered w-full" />
                                {errors.password && <p className='text-primary'>{errors.password.message}</p>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label"> <span className="label-text">Account Type</span></label>
                                <select id="" {...register("role")} defaultValue={'buyer'} className="input input-bordered w-full">
                                    <option value="buyer">Buyer</option>
                                    <option value="seller">Seller</option>
                                </select>
                            </div>
                            <div className="form-control w-full">
                                <label className="label"> <span className="label-text">Photo</span></label>
                                <input type="file" {...register("image")} className="input input-bordered w-full" />
                                {errors.name && <p className='text-primary'>{errors.name.message}</p>}
                            </div>
                            <input className='btn btn-primary text-white mt-4 w-full' value="Create Account" type="submit" />
                        </form>
                        <p className='mt-5'>Already have an account? <Link className='text-secondary' to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;