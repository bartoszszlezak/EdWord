import React, {useEffect, useState} from 'react';
import './styles/LearnSection.css';
import video from '../videos/video5.mp4';
import styled from "styled-components";
import axios from "axios";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";


const api = axios.create({
    baseURL: `http://localhost:8080/wordset/words`
})

function LearnSection(props) {


    const [word, setWord] = useState("Click Me");
    const [translation, setTranslation] = useState("");
    const [content, setContent] = useState(word);
    const [status, setStatus] = useState(false);
    const auth = useSelector(state => state.auth);
    const history = useHistory();

    const [words, setWords] = useState([]);
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        if(content === word){
            setContent(translation);
            setStatus(true);
        }
        else {
            setContent(word);
            setStatus(false);
        }

    }

    const handleNext = () => {
        if(clicked === false)
            setClicked(true);
        else
            setClicked(false);
    }

    useEffect(() => {

        if(!auth.login){
            history.push("/");
        }
        else {
            const config = {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('token')
                }
            };

            api.get('/' + props.setId +"/"+ props.type, config)
                .then(response => {
                    setWords(response.data);
                })
        }
    }, []);


    useEffect(() => {

        if(words.length > 0){
            let index = Math.floor(Math.random() * words.length);
            setWord(words[index].content);
            setTranslation(words[index].translation);
        }
    }, [clicked])


    return (
        
        <div className='learn-section'>
            <video src={video} autoPlay loop muted />
            {
                props.setName + " " + props.setId + props.type
            }
            {(status) ? (
                <Flashcard status onClick={handleClick}>
                    <div className="flashcard_content">
                        {content}
                    </div>
                </Flashcard>
            ) : (
                <Flashcard onClick={handleClick}>
                    <div className="flashcard_content">
                        {content}
                    </div>
                </Flashcard>
            )}

            <div className='buttons-learn'>
                <button onClick={handleNext}>
                    Next
                </button>
                <button>
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