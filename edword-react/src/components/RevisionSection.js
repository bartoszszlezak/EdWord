import React from 'react';
import './styles/RevisionSection.css';
import video from '../videos/video5.mp4'

function RevisionSection() {
    return (
        <div className='revision-section'>
            <video src={video} autoPlay loop muted />
            <div className='flashcard' />
            <div className='buttons-revision'>
                <button>
                    Next
                </button>
            </div>
        </div>
    );
}

export default RevisionSection
