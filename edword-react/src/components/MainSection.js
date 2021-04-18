import React, { Component } from 'react';
import video from '../videos/video2.mp4';
import './styles/MainSection.css';
import '../App.css';
import { Link } from 'react-router-dom';



export default class MainSection extends Component {



    render(){
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
    
}

