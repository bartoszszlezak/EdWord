import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import SigninSection from '../SigninSection';
import '../styles/SignIn.css';
import video from '../../videos/video1.mp4';
import SignInForm from '../SignInForm';
import axios from 'axios';

function SignIn() {

    

    const api = axios.create({
        baseURL: `http://localhost:8080`
    })
    

    const [user, setUser] = useState({email: ""});
    const [error, setError] = useState("");

    const Login = details => {

    
                if(details != ""){
                    console.log(details.email);
                    setUser({
                        email: details.email
                });
                } else{
                    setError("Wrong email or password!")
                }       
    }

    return (
        <div className='signin-section'>
            <video src={video} autoPlay loop muted />
            {(user.email !== "") ? (
                <Link to='/sets'>
                    <button className='button-welcome'>You are logged in!</button>
                </Link>
            ) : (
                <SignInForm Login={Login} error={error}/>
            )}
        </div>
    )
}

export default SignIn

