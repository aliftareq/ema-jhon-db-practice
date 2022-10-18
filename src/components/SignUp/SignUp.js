import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './SignUp.css'
const SignUp = () => {

    const { createUser } = useContext(AuthContext)

    //all states
    const [error, setError] = useState('')

    //handler for forms
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        if (password.length < 6) {
            setError('Password length should be at least 6 char long.')
            return;
        }
        if (password !== confirm) {
            setError('Your password did not match with confirm password')
            return
        }

        // handler for createUser
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                form.reset()
            })
            .catch(error => {
                console.error(error);
                setError("This email have been already used")
            })
        setError('')

    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>SignUp</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" required />
                </div>
                <input className='btn-submit' type="submit" value="SignUp" />
                <p>Already have an account?<Link to='/login'>Login</Link></p>
                <p className='text-error'>{error}</p>
            </form>
        </div>
    );
};

export default SignUp;