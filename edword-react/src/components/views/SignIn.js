import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import SigninSection from '../SigninSection';
import '../styles/SignIn.css';
import video from '../../videos/video1.mp4';
import SignInForm from '../SignInForm';

function SignIn() {

    const randomUser = {
        email: "random@random.com",
        password: "random"
    }

    const [user, setUser] = useState({email: ""});
    const [error, setError] = useState("");

    const Login = details => {

        if(details.email===randomUser.email && details.password === randomUser.password){
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
            {/* <SigninSection /> */}
            {(user.email !== "") ? (
                <Link to='/learn'>
                    <button className='button-welcome'>You are logged in!</button>
                </Link>
            ) : (
                <SignInForm Login={Login} error={error}/>
            )}
        </div>
    )
}

export default SignIn

