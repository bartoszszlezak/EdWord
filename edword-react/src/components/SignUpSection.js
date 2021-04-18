import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import '../App.css';
import video from '../videos/video1.mp4';

const SignUpSection = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
      setIsSubmitted(true);
    }

    return (
        <>

            {!isSubmitted ? (
            <SignUpForm submitForm={submitForm} />
            ) : (
                <div className='succes-signup'>
                    <video src={video} autoPlay loop muted />
                    <Link to='/signin'>
                        <button>Your account was created succesfully</button>
                    </Link>
                </div>  
            )}


        </>
    );
};

export default SignUpSection;
