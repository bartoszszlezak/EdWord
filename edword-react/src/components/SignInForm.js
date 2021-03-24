import React, { useState } from 'react'
import './styles/SigninForm.css';
import { Link } from 'react-router-dom';

function SignInForm({Login, error}) {

    const [details, setDetails] = useState({email: "", password: ""});

    const submitfunc = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <div className='signin-section'>
            <div className='signin-option'>
                <h1>Sign in</h1>
                <div className='no-account-signup'>
                    <p>You don't have an account?</p>
                    <Link to='/'>
                        <button className='sign-up'>
                            Sign Up
                        </button>
                    </Link>  
                </div>
                
                <form onSubmit={submitfunc}>
                    {(error !== "") ? (<p className='error'>{error}</p>) : ""}   
                    <div className='form-inputs'>
                        <input
                            className='signin-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                            onChange={e => setDetails({...details, email: e.target.value})}
                            value={details.email}
                        />
                    </div>
                    <div className='form-inputs'>
                        <input
                            className='signin-input'
                            name='password'
                            placeholder='Your password'
                            type='password'
                            onChange={e => setDetails({...details, password: e.target.value})}
                            value={details.password}
                        />
                    </div>
                    <button className='button-confirm' type='submit'>
                        Confirm
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignInForm
