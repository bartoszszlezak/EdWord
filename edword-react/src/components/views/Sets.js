import '../styles/Cards.css';
import SetItem from '../SetItem';
import {Link, useHistory} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useSelector} from "react-redux";
import SetElements from "../SetElements";


const api = axios.create({
    baseURL: `http://localhost:8080/wordsets`
})

function Sets() {

    const [clicked, setClicked] = useState(false);
    const[setId, setSetId] = useState(0);
    const[type, setType] = useState("");
    const[setName, setSetName] = useState("");
    const history = useHistory();
    const auth = useSelector(state => state.auth);

    const listWords = (setId, type, setName) => {
        setType(type);
        setSetId(setId);
        setSetName(setName);
        setClicked(true);
    }



    const [sets, setSets] = useState([]);
    const [status, setStatus] = useState(false);


    useEffect(() => {
        if(!auth.login){
            history.push("/");
        }
        else{
            const config = {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('token')
                }
            };
            const user_id = auth.auth.first;
            api.get('/' + user_id, config)
                .then(response => {
                    Promise.all(response.data.map(num =>
                        api.get('http://localhost:8080/wordset/image/' + num.id, config)
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
        }


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
            <div className="wordset-words-list">
                <SetElements setName={setName} setId={setId} setType={type}/>
                <button onClick = {() => setClicked(false)} >
                    Back
                </button>
            </div>
        )}
    </div>
    )}

export default Sets
