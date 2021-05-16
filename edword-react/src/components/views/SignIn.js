import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import SigninSection from '../SigninSection';
import '../styles/SignIn.css';
import video from '../../videos/video1.mp4';
import SignInForm from '../SignInForm';
import axios from 'axios';
import { useSelector } from 'react-redux';

function SignIn() {

    const auth = useSelector(state => state.auth);

    const api = axios.create({
        baseURL: `http://localhost:8080`
    })
    

    return (
        <div className='signin-section'>
            <video src={video} autoPlay loop muted />
            {(auth.login) ? (
                <Link to='/sets'>
                    <button className='button-welcome'>You are logged in!</button>
                </Link>
            ) : (
                <SignInForm/>
            )}
        </div>
    )
}

export default SignIn

