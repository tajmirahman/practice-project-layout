import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='w-2/5 mx-auto '>
            <h1 className='text-center text-2xl font-bold my-10'>Register your account</h1>
            <div className='space-y-3'>
                <input type="text" placeholder="Type your name" className="input input-neutral w-full" />
                <input type="photo" placeholder="select your photo link" className="input input-neutral w-full" />
                <input type="email" placeholder="email" className="input input-neutral w-full" />

                <input type="password" placeholder="password" className="input input-neutral w-full" />
                <Link type="submit" className="btn btn-secondary w-full">Submit</Link>
                <p>if do not have an account. <Link to={'/auth/login'} className='text-red-500'>login</Link></p>
            </div>
        </div>
    );
};

export default Register;