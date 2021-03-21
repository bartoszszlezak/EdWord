import React from 'react';
import video from '../videos/video2.mp4';
import './styles/MainSection.css';
import '../App.css';
import { Link } from 'react-router-dom';


function MainSection() {
    return (
        <div className='main-section'>
            <video src={video} autoPlay loop muted />
            <h1>EdWord</h1>
            <p>Create your own sets of words and learn with passion</p>
            <div className='main-section-start'>
                <Link to='/signin'>
                    <button className='main-button'>
                        Start
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default MainSection;
