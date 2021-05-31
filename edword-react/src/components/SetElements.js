import axios from "axios";
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from "react-redux";
import video from "../videos/video5.mp4";

const api = axios.create({
    baseURL: `http://localhost:8080/wordset`
})

function SetElements(props) {

    const history = useHistory();
    const auth = useSelector(state => state.auth);
    const[words, setWords] = useState([]);

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
            api.get('/words/' + props.setId, config).then(
                response => {
                    console.log(response.data);
                    setWords(response.data);
                }
            )
        }
    }, [])

    return(
        <div className='words_container'>
            <video src={video} autoPlay loop muted />
            <p className='set_name'>Words from set {props.setName}</p>
            <div className='words-list'>
                {words.map(w => (
                    <div className='word-wrapper'>
                        <p className='word-list-element'>
                            {w.content} <i className="fas fa-arrow-alt-circle-right"/> {w.translation}
                        </p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default SetElements