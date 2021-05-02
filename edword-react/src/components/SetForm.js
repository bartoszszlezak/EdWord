import React, { useState } from 'react'
import './styles/SignUpForm.css';
import video from '../videos/video1.mp4';
import Service from './ServiceSet';
import validate from './validateSet';


const SetForm = ({submitForm}) => {

    const {handleChange, handleSubmit, setFile, values, errors} = Service(submitForm, validate);
        

    return (
        <div className='signup-section'>
            <video src={video} autoPlay loop muted />
            <h1>Create Set</h1>
            <div className="setform-container">
                <form className='sign-up-form' onSubmit={handleSubmit}>

                <div className='signup-inputs'>
                    <input
                        id='setName'
                        className='form-input'
                        type='text'
                        name='setName'
                        placeholder='Enter name'
                        value={values.setname}
                        onChange={handleChange}
                    />
                    {errors.setname && <p>{errors.setname}</p>}
                </div>

                <div className='signup-inputs'>
                    <input
                        id='language' 
                        type='text'
                        name='language'
                        className='form-input'
                        placeholder='Enter language'
                        value={values.language}
                        onChange={handleChange}
                    />
                    {errors.language && <p>{errors.language}</p>}
                </div>
                <div className='signup-inputs'>
                    <input
                        id='photo' 
                        type='file'
                        name='photo'
                        className='form-input'
                        placeholder='Enter set photo'
                        // value={values.photo}
                        onChange={e => setFile(e.target.files[0])}
                    />
                    {errors.photo && <p>{errors.photo}</p>}      
                </div>
                <button className='button-accept' type='submit'>
                    Confirm
                </button>
                
                
            </form>
            </div>
            
        </div>
    )
}

export default SetForm
