import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProviser';

const Register = () => {

    const { createUser, setUser, userUpdate } = useContext(AuthContext);

    const navigate=useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log({ name, photo, email, password });

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
                console.log(error.code)
            })
    }

    return (
        <div className='w-2/5 mx-auto '>
            <h1 className='text-center text-2xl font-bold my-10'>Register your account</h1>

            <form onSubmit={handleRegister} className='space-y-3'>

                <input type="text" name='name' placeholder="Type your name" className="input input-neutral w-full" />

                <input type="photo" name='photo' placeholder="select your photo link" className="input input-neutral w-full" />

                <input type="email" name='email' placeholder="email" className="input input-neutral w-full" />

                <input type="password" name='password' placeholder="password" className="input input-neutral w-full" />

                <button type="submit" className="btn btn-secondary w-full">Submit</button>

                <p>if do not have an account. <Link to={'/auth/login'} className='text-red-500'>login</Link></p>

            </form>
        </div>
    );
};

export default Register;