import React, { useState } from 'react';
import WordForm from '../WordForm';
import { Link } from 'react-router-dom';
import video from '../../videos/video4.mp4';
import '../../App.css';

function AddWord() {

    const [isWordSubmitted, setIsWordSubmitted] = useState(false);

    function submitWordForm() {
      setIsWordSubmitted(true);
    }

    return (
        <>
            {!isWordSubmitted ? (
            <WordForm submitForm={submitWordForm} />
            ) : (
                <div className='succes-signup'>
                    <video src={video} autoPlay loop muted />
                    <Link to='/sets'>
                        <button>Added words succesfully</button>
                    </Link>
                </div>  
            )}

        </>
    )
}

export default AddWord
