import React, { useState, useEffect } from 'react'
import './styles/WordForm.css';
import Service from './ServiceWord';
import validate from './validateWord';


const WordForm = (props) => {

    const {handleChange, handleSubmit, handleClick, values, errors, words, isSubmitting} = Service(props.submitForm, validate);

    
  useEffect(
    () => {

        if(isSubmitting){
            words.push(values);
        }
        
    },
    [isSubmitting]
  );
        

    return (
        <div className='wordform-section'>
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
                            {w.word} <i className="fas fa-arrow-alt-circle-right"/> {w.translation}
                        </p>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default WordForm