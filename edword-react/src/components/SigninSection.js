import React from 'react';
import './styles/SigninForm.css';
import video from '../videos/video1.mp4';

function SigninSection() {
    return (
        <div className='signin-section'>
            <video src={video} autoPlay loop muted />
            <div className='signin-option'>
                <h1>Sign in</h1>
                <div className='no-account-signup'>
                    <p>You don't have an account?</p>
                    <button>
                        Sign Up
                    </button>
                </div>
                
                <form>
                    <input
                        className='signin-input'
                        name='email'
                        type='email'
                        placeholder='Your Email'
                    />
                    <input
                        className='signin-input'
                        name='password'
                        placeholder='Your password'
                        type='password'
                    />
                    <button className='button-confirm' type='submit'>
                        Confirm
                    </button>
                </form>
            </div>
            <div className='signup-option'>
                <h1>Sign Up</h1>
                <p>You have an account?</p>
                <button>
                    Sign In
                </button>
                <form>
                    <input
                        className='signin-input'
                        name='first-name'
                        type='text'
                        placeholder='Your name'
                    />
                    <input
                        className='signin-input'
                        name='surname'
                        type='text'
                        placeholder='Your surname'
                    />
                    <input
                        className='signin-input'
                        name='email'
                        type='email'
                        placeholder='Your Email'
                    />
                    <input
                        className='signin-input'
                        name='password'
                        placeholder='Your password'
                        type='password'
                    >
                    </input>
                    <button className='button-confirm' type='submit'>
                        Confirm
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SigninSection
