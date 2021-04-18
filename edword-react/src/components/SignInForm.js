import React, { useState } from 'react'
import './styles/SignIn.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const api = axios.create({
    baseURL: `http://localhost:8080`
  })


function SignInForm({Login, error}) {

    const [details, setDetails] = useState({email: "", password: ""});
    const respon = async () => {
                const resp = await api.post("http://localhost:8080/login", details);
                console.log(typeof(resp.data));
                Login(resp.data);
            }

    const submitfunc = e => {
        e.preventDefault();

        respon();
       
    }

    return (
        <div className='signin-section'>
            <div className='signin-option'>
                <h1>Sign in</h1>
                <div className='no-account-signup'>
                    <p>You don't have an account?</p>
                    <Link to='/signup'>
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
