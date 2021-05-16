import React from 'react';
import './styles/LearnSection.css';
import video from '../videos/video5.mp4';

function LearnSection({setClicked}) {



    return (
        
        <div className='learn-section'>
            <video src={video} autoPlay loop muted />
            <div className='flashcard' />
            <div className='buttons-learn'>
                <button>
                    Next
                </button>
                <button>
                    Done
                </button>
                <button onClick = {() => setClicked(false)} >
                    Back
                </button>
            </div>
        </div>
    );
}

export default LearnSection;


