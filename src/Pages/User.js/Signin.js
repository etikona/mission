import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import './User.css'
const Signin = () => {

    const [error, setError] = useState(null);
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const [userEmail, setUserEmail] = useState('');

    // Submit form
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;

        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, photoURL, email, password, confirm);
        // Error displaying
        if (password.length < 6) {
            setError("please give at least 6 characters")
            return;
        }

        // Creating user
        createUser(email, password)
            .then(res => {
                const user = res.user;
                toast.success("User created successfully")
            })
            .catch(err => {
                const msg = err.message;
            })

        updateUserProfile(email)
            .then(() => {
                storeUserInfo(email)
            })
            .catch(err => console.error(err))

            form.reset();
    };

    //  Store user Information in Databse 

    const storeUserInfo = (email) => {
        const user = { email };
        fetch('https://mission-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    };

    return (
        <div className='bg-slate-200 text-white p-5'>
            <div className='form-container bg-slate-200'>
                <h3 className='form-title text-white'>Sign In</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" required  />
                    </div>

                    <div className="form-control ">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" required />
                    </div>

                    <input className='btn-submit' type="submit" value="Sign in" />
                </form>
                <p className='err-text'>{error}</p>
                <p>All ready have an account?<Link to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Signin;