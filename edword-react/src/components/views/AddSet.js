import React, { useState } from 'react';
import SetForm from '../SetForm';
import { Link } from 'react-router-dom';
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
                    <Link to='/addword/'>
                        <button>Your set was created succesfully</button>
                    </Link>
                </div>
            )}

        </>
    )
}

export default AddSet
