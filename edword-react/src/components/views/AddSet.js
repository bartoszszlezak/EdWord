import React, { useState } from 'react';
import SetForm from '../SetForm';
import { Link } from 'react-router-dom';
import video from '../../videos/video4.mp4';
import '../../App.css';


function AddSet() {

    const [isSetSubmitted, setIsSetSubmitted] = useState(false);

    function submitSetForm() {
      setIsSetSubmitted(true);
    }

    return (
        <>
            {!isSetSubmitted ? (
            <SetForm submitForm={submitSetForm} />
            ) : (
                <div className='succes-signup'>
                    <video src={video} autoPlay loop muted />
                    <Link to='/addword'>
                        <button>Your set was created succesfully</button>
                    </Link>
                </div>  
            )}

        </>
    )
}

export default AddSet
