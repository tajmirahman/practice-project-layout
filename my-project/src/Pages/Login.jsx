import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProviser';

const Login = () => {

    const {userLogin}=useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();

    const handleLogin=(e)=>{
        e.preventDefault();
        const form =e.target;
        const email=form.email.value;
        const password=form.password.value;

        userLogin(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
            navigate(`${location.state ? location.state : "/"}`);
            
        })
        .catch(error=>{console.log(error)})
    }


    return (
        <div className='w-2/5 mx-auto '>
            <h1 className='text-center text-2xl font-bold my-10'>Login your accounta</h1>
            <form onSubmit={handleLogin} className='space-y-3'>
                <input type="email" name='email'  placeholder="email" className="input input-neutral w-full" />
                <input type="password" name='password' placeholder="password" className="input input-neutral w-full" />
                <button type="submit" className="btn btn-secondary w-full">Submit</button>

                <p>if do not have an account. <Link to={'/auth/register'} className='text-red-500'>Register</Link></p>
            </form>
        </div>
    );
};

export default Login;