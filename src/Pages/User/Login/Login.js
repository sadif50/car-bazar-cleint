import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import logImg from '../../../assets/user/login.webp';

const Login = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();

    const handleLogin = data => {
        console.log(data);
    }
    return (
        <div className='py-10 w-11/12 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <img className='w-full hidden md:block' src={logImg} alt="" />
                </div>
                <div className='flex justify-center'>
                    <div className='md:w-1/2'>
                        <h2 className='text-2xl md:text-4xl mb-2 text-center font-semibold'>Log In</h2>
                        <hr className='md:hidden' />
                        <form onSubmit={handleSubmit(handleLogin)}>
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
                            <input className='btn btn-primary mt-4 w-full' value="Login" type="submit" />
                        </form>
                        <p className='mt-5'>New to CarBazar? <Link className='text-secondary' to="/signup">Sign Up</Link></p>
                        <div className="divider">OR</div>
                        <button className='btn w-full'>CONTINUE WITH GOOGLE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;