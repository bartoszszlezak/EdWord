import React from 'react';
import './styles/RevisionSection.css';
import video from '../videos/video5.mp4'

function RevisionSection(props) {
    return (
        <div className='revision-section'>
            {
                props.setName + " " + props.setId + props.type
            }
            <video src={video} autoPlay loop muted />
            <div className='flashcard' />
            <div className='buttons-revision'>
                <button>
                    Next
                </button>
                <button onClick = {() => props.setClicked(false)} >
                    Back
                </button>
            </div>
        </div>
    );
}

export default RevisionSection
