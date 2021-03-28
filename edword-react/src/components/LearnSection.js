import React from 'react';
import './styles/LearnSection.css';
import video from '../videos/video4.mp4';

function LearnSection() {


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
            </div>
        </div>
    );
}

export default LearnSection;


