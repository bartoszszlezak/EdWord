import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from './SignUpForm';

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
            <Link to='/learn'>
                <button>Your account was created succesfully</button>
            </Link>
            )}


        </>
    );
};

export default SignUpSection;
