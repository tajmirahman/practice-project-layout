import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProviser';

const Register = () => {

    const { createUser, setUser, userUpdate } = useContext(AuthContext);

    const navigate=useNavigate();

    const [error,setError]=useState(null);


    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if(name.length<4){
            setError('Character Must be at least 4');
            return;
        }

        if(password.length < 6){
            setError('must be 6 character!')
            return;
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                userUpdate({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({...user, displayName: name, photoURL: photo});
                        navigate("/category/0");
                    })
                    .catch(err=>console.log(err.code))
            })
            .catch((error) => {
                setError(error.code)
            })
    }

    return (
        <div className='w-2/5 mx-auto '>
            <h1 className='text-center text-2xl font-bold my-10'>Register your account</h1>

            <form onSubmit={handleRegister} className='space-y-3'>

                <input type="text" name='name' placeholder="Type your name" className="input input-neutral w-full" required/>

                <input type="photo" name='photo' placeholder="select your photo link" className="input input-neutral w-full" required/>

                <input type="email" name='email' placeholder="email" className="input input-neutral w-full" required/>

                <input type="password" name='password' placeholder="password" className="input input-neutral w-full" required/>

                {
                    error && <p className='text-red-400'>{error}</p>
                }

                <button type="submit" className="btn btn-secondary w-full">Submit</button>

                <p>if do not have an account. <Link to={'/auth/login'} className='text-red-500'>login</Link></p>

            </form>
        </div>
    );
};

export default Register;