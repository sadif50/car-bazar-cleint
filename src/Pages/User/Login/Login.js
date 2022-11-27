import { useQuery } from '@tanstack/react-query';
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logImg from '../../../assets/user/login.webp';
import { AuthContext } from '../../../contexts/AuthProvider';
import useToken from '../../../Hooks/useToken';

const Login = () => {
    const {register, handleSubmit, reset, formState: { errors }} = useForm();
    const { logInWithEmail, googleProviderLogIn } = useContext(AuthContext);
    const [userEmail, setUserEmail] = useState('');
    const [token] = useToken(userEmail);

    const { data: buyers = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users?role=buyer');
            const data = await res.json();
            return data;
        }
    });

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if(token){
        navigate(from, { replace: true });
    }

    const googleProvider = new GoogleAuthProvider();

    const handleLogin = data => {
        console.log(data);
        logInWithEmail(data.email, data.password)
        .then(result => {
            const user = result.user;
            setUserEmail(user.email);
            reset();
            toast.success('Login Successful.');
        })
        .catch(err => {
            toast.error(err.message);
        })
    }

    const logInWithGoogle = () => {
        googleProviderLogIn(googleProvider)
        .then(result => {
            const user = result.user;
            const alreadyUser = buyers.find(buyer => buyer.email === user.email);
            if(!alreadyUser){
                const userData = {
                    name: user?.displayName,
                    email: user.email,
                    role: 'buyer',
                    image: user?.photoURL,
                    verified: false,
                    uid: user?.uid
                }
                saveUser(userData);
            }
            else{
                setUserEmail(user.email);
                toast.success('Google Login Successful');
            }
        })
        .catch(err => {
            toast.error(err.message);
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
            setUserEmail(userData.email);
            toast.success('Google Login Successful');
        })
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
                            <input className='btn btn-primary text-white mt-4 w-full' value="Login" type="submit" />
                        </form>
                        <p className='mt-5'>New to CarBazar? <Link className='text-secondary' to="/signup">Sign Up</Link></p>
                        <div className="divider">OR</div>
                        <button className='btn w-full' onClick={logInWithGoogle}>CONTINUE WITH GOOGLE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;