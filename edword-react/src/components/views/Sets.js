import '../styles/Cards.css';
import SetItem from '../SetItem';
import { Link } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:8080/wordsets`
})

function Sets() {

    const [clicked, setClicked] = useState(false);

    const[setId, setSetId] = useState(0);
    const[type, setType] = useState("");

    const listWords = (setId, type) => {
        setType(type);
        setSetId(setId);
        setClicked(true);
    }



    const [sets, setSets] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        api.get('/')
            .then(response => {
                Promise.all(response.data.map(num =>
                    api.get('http://localhost:8080/wordset/image/' + num.id)
                        .then(resp => resp.data)
                        .then(data => {
                            return {num, data};
                        }))
                ).then(v => {
                        v.map(k => k.num.setImage = k.data)

                        setSets(response.data);
                        setStatus(true);
                    }
                );

            })

    }, []);

    return (

        <div className="sets_section">
        {(!clicked) ? (
            <div className='sets'>
            <div className="sets_header_container">
                <h1 className="sets_header">Your sets</h1>
                <Link to="/addset">
                    <button>New set</button>
                </Link>
            </div>
            
            <div className='sets_container'>
                <div className='sets_wrapper'>

                    <ul className='sets_items'>

                        {sets.map(set => (
                            <SetItem
                                handleClick = {listWords}
                                key = {set.id}
                                id={set.id} 
                                src={set.setImage}
                                text={set.setName}
                                label={set.language}
                                type="LEARN"
                            />
                        ))}

                    
                    </ul>
                    
                </div>
            </div>
            </div>
        ) : (
            <div>
                Lista słów
                {
                    setId + " " + type
                }

                <button onClick = {() => setClicked(false)} >
                    Back
                </button>
            </div>
        )}
    </div>
    )}

export default Sets
