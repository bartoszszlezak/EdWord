import React from 'react';
import { Link } from 'react-router-dom';
import './styles/SignUpForm.css';
import video from '../videos/video1.mp4';
import Service from './Service';
import validate from './validate';

const SignUpForm = ({submitForm}) => {

    const {handleChange, handleSubmit, values, errors} = Service(submitForm, validate);

    return (
        <div className='signup-section'>
            <video src={video} autoPlay loop muted />
            <h1>Sign Up</h1>
                <div className='account-signin'>
                    <p>I have an account</p>
                    <Link to='/signin'>
                        <button className='sign-up'>
                            Sign In
                        </button>
                    </Link>  
                </div>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <div className='signup-inputs'>
                    <input
                        id='email' 
                        type='email'
                        name='email'
                        className='form-input'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='signup-inputs'>
                    <input
                        id='password' 
                        type='password'
                        name='password'
                        className='form-input'
                        placeholder='Enter your password'
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}      
                </div>
                <div className='signup-inputs'>
                    <input
                        id='passwordrep' 
                        type='password'
                        name='passwordrep'
                        className='form-input'
                        placeholder='Repete your password'
                        value={values.passwordrep}
                        onChange={handleChange}
                    />
                    {errors.passwordrep && <p>{errors.passwordrep}</p>}
                </div>
                <button className='button-accept' type='submit'>
                    Confirm
                </button>
                
            </form>
        </div>
    )
}

export default SignUpForm;