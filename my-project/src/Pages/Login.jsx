import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-2/5 mx-auto '>
            <h1 className='text-center text-2xl font-bold my-10'>Login your accounta</h1>
            <div className='space-y-3'>
                <input type="email"  placeholder="email" className="input input-neutral w-full" />
                <input type="password" placeholder="password" className="input input-neutral w-full" />
                <Link type="submit" className="btn btn-secondary w-full">Submit</Link>
                <p>if do not have an account. <Link to={'/auth/register'} className='text-red-500'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;