import React, { useState } from 'react';
import WordForm from '../WordForm';
import { Link } from 'react-router-dom';
import '../../App.css';

function AddWord() {

    const [isWordSubmitted, setIsWordSubmitted] = useState(false);
    function submitWordForm() {
      setIsWordSubmitted(true);
    }

    return (
        <>
            {!isWordSubmitted ? (
            <WordForm submitForm={submitWordForm}/>
            ) : (
                <div className='succes-signup'>
                    <Link to='/sets'>
                        <button>Added words succesfully</button>
                    </Link>
                </div>  
            )}

        </>
    )
}

export default AddWord
