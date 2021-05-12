import React, { useState, useEffect } from 'react'
import './styles/SignUpForm.css';
import video from '../videos/video1.mp4';
import Service from './ServiceWord';
import validate from './validateWord';


const WordForm = ({submitForm}) => {

    const {handleChange, handleSubmit, handleClick, values, errors, words, isSubmitting} = Service(submitForm, validate);

    
  useEffect(
    () => {

        if(isSubmitting){
            console.log("useEffect, words length");
            console.log("Words useEffect");
            console.log(words);
            words.push(values);
        }
        
    },
    [isSubmitting]
  );
        

    return (
        <div className='signup-section'>
            <video src={video} autoPlay loop muted />
            <h1>Add Words</h1>
            <div className="setform-container">
                <form className='sign-up-form' onSubmit={handleClick}>

                <div className='signup-inputs'>
                    <input
                        id='word'
                        className='form-input'
                        type='text'
                        name='word'
                        placeholder='Enter word'
                        value={values.word}
                        onChange={handleChange}
                    />
                    {errors.word && <p>{errors.word}</p>}
                </div>

                <div className='signup-inputs'>
                    <input
                        id='translation' 
                        type='text'
                        name='translation'
                        className='form-input'
                        placeholder='Enter translation'
                        value={values.translation}
                        onChange={handleChange}
                    />
                    {errors.translation && <p>{errors.translation}</p>}
                </div>
                <button className='button-accept' type="submit">
                    Add
                </button>
            </form>
            <button className='button-accept' onClick = {handleSubmit}>
                    Confirm
            </button> 
            </div>

            <div>
                {words.map(w => (
                    <div key={w.word}>
                        <p>
                            Słowo: {w.word}
                        </p>
                        <p>
                            Tłumacznie: {w.translation}
                        </p>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default WordForm