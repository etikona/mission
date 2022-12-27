import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const Login = () => {

    const [error, setError] = useState('');
    const{userLogIn, GoogleLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // Error displaying
        if(password.length < 6){
            setError("You are given wrong password!")
            return;
        }
      
        // Creating user
        userLogIn(email, password)
        .then(res => {
            const user = res.user;
            form.reset()
            navigate(from, {replace: true});
        })
        .catch(err =>{
            const msg = err.message;
            setError(msg);
        } )
    }

    // Log in with Google

    const Google = () => {
        const provider = new GoogleAuthProvider();
        GoogleLogin(provider)
        .then(() => {

        })
        .catch(error => 
            console.error(error),
            setError(error.message)
            )
    }

    return (
        <div>
              <div className='bg-slate-200 text-white p-5'>
         <div className='form-container bg-slate-200'>
            <h3 className='form-title'>Login</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required id="" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required id="" />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <button   onClick={Google} className='outline px-2  outline-offset-2 outline-2 my-3'>continue with Google</button>
           
            <p className='err-text'>{error}</p>
            <p><Link to='/signin' className='blue-300'>create a new account</Link></p>
        </div>
       </div>
        </div>
    );
};

export default Login;