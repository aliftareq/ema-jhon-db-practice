import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './Login.css'

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    //all states
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if (password.length < 6) {
            setError('Password length should be at least 6 char long.')
            return;
        }
        //handlers for login
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error);
                setError("no user found or Password is invalid")
            })
        setError('')

    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
                <p>New to ema-john <Link to='/signup'>Create a new Account</Link></p>
                <p className='text-error'>{error}</p>
            </form>
        </div>
    );
};

export default Login;