import React, {useEffect, useState} from 'react';
import './styles/LearnSection.css';
import video from '../videos/video5.mp4';
import styled from "styled-components";
import axios from "axios";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";


const api = axios.create({
    baseURL: `http://localhost:8080/`
})

let index;

function LearnSection(props) {


    const [word, setWord] = useState("Click Next");
    const [translation, setTranslation] = useState("Click Next");
    const [status, setStatus] = useState(false);
    const auth = useSelector(state => state.auth);
    const history = useHistory();


    if(!auth.login){
        history.push("/");
    }

    const [words, setWords] = useState([]);
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        if(status === true){
            setStatus(false);
        }
        else {
            setStatus(true);
        }

    }

    const handleDone = () => {

        const config = {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token')
            }
        };


        if(words.length > 0){
            api.get('word/update/' + words[index].id, config)
            words.splice(index,1);
            if(words.length !==0){
                index = Math.floor(Math.random() * words.length);
                setWord(words[index].content);
                setTranslation(words[index].translation);
                setStatus(true);
            }
        }
        else{
            setWord("Nothing to learn");
            setTranslation("Nothing to learn");
            setStatus(true);
        }



    }

    const handleNext = () => {
        if(clicked === false){
            setClicked(true);
            setStatus(true);
        }
        else{
            setClicked(false);
            setStatus(true);
        }

    }

    useEffect(() => {

        const config = {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token')
            }
        };

        api.get('/wordset/words/' + props.setId +"/"+ props.type, config)
            .then(response => {
                setWords(response.data);
            })

    }, []);


    useEffect(() => {

        if(words.length > 0){
            index = Math.floor(Math.random() * words.length);
            setWord(words[index].content);
            setTranslation(words[index].translation);
        }
        else {
            setWord("Click Next");
            setTranslation("Click Next");
        }
    }, [clicked])


    return (
        
        <div className='learn-section'>
            <video src={video} autoPlay loop muted />

            <h1 className="set_name">You are in set: {props.setName}</h1>

            {(status) ? (
                <Flashcard status onClick={handleClick}>
                    <div className="flashcard_content">
                        {word}
                    </div>
                </Flashcard>
            ) : (
                <Flashcard onClick={handleClick}>
                    <div className="flashcard_content">
                        {translation}
                    </div>
                </Flashcard>
            )}

            <div className='buttons-learn'>
                <button onClick={handleNext}>
                    Next
                </button>
                <button onClick={handleDone}>
                    Done
                </button>
                <button onClick = {() => props.setClicked(false)} >
                    Back
                </button>
            </div>
        </div>
    );
}

export default LearnSection;

const Flashcard = styled.div`
  
  width: 50%;
  height: 40%;
  border-radius: 15px;
  position: relative;
  perspective: 1000px;
  background: ${(props) => props.status ? "linear-gradient(60deg, rgba(0, 0, 0, 0.9) 15%, rgba(19, 139, 200, 0.7) 100%)" : "linear-gradient(60deg, rgba(0, 0, 0, 0.9) 15%, rgba(200, 13, 139, 0.7) 100%)"};  
  box-sizing: border-box;
  border: 3px solid #171212;
  transition: 0.4s transform linear;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 60px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${(props) => props.status ? "rotateZ(180deg)" : "none"};
  
  .flashcard_content{
     transform: ${(props) => props.status ? "rotateZ(-180deg)" : "none"};
     font-size: 40px;
  }

  @media screen and (max-width: 820px) {
    .flashcard_content{
      font-size: 30px;
    }
  }

`