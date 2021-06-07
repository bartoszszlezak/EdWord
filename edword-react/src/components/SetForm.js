import React, { useState } from 'react'
import './styles/SignUpForm.css';
import Service from './ServiceSet';
import validate from './validateSet';


const SetForm = ({submitForm}) => {

    const {handleChange, handleSubmit, changeFile, values, errors} = Service(submitForm, validate);
        

    return (
        <div className='setform-section'>
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
                        onChange={changeFile}
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
