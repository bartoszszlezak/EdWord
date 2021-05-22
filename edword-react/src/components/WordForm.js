import React, { useState, useEffect } from 'react'
import './styles/WordForm.css';
// import video from '../videos/video1.mp4';
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
        <div className='wordform-section'>
            {/* <video src={video} autoPlay loop muted /> */}
            <h1>Add Words</h1>
            <div className="wordform-container">
                <form className='wordform-form' onSubmit={handleClick}>

                <div className='word-inputs'>
                    <input
                        id='word'
                        className='form-input-word'
                        type='text'
                        name='word'
                        placeholder='Enter word'
                        value={values.word}
                        onChange={handleChange}
                    />
                    {errors.word && <p>{errors.word}</p>}
                </div>

                <div className='word-inputs'>
                    <input
                        id='translation' 
                        type='text'
                        name='translation'
                        className='form-input-word'
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
            <button className='button-confirm' onClick = {handleSubmit}>
                    Confirm
            </button> 
            </div>

            <div className='words-list'>
                {words.map(w => (
                    <div key={w.word} className='word-wrapper'>
                        <p className='word-list-element'>
                            {w.word} <i class="fas fa-arrow-alt-circle-right"></i> {w.translation}
                        </p>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default WordForm