import LearnSection from '../LearnSection';
import '../styles/Cards.css';
import SetItem from '../SetItem';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const api = axios.create({
    baseURL: `http://localhost:8080/wordsets`
})

function Learn() {

    const auth = useSelector(state => state.auth);
    const history = useHistory();
    const [sets, setSets] = useState([]);
    const [status, setStatus] = useState(false);
    const[setId, setSetId] = useState(0);
    const[type, setType] = useState("");
    const[setName, setSetName] = useState("");

    const [clicked, setClicked] = useState(false)

    const handleClick = (setId, type, setName) => {
        setType(type);
        setSetId(setId);
        setSetName(setName);
        setClicked(true);
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
            const user_id = localStorage.getItem("id");
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


    }, [clicked]);


    return (
        <>
            {(!clicked) ? (
                <div className='sets'>
                    <div className="sets_header_container">
                        <h1 className="sets_header">Your sets ready to learn</h1>
                    </div>
                    
                    <div className='sets_container'>
                        <div className='sets_wrapper'>

                            <ul className='sets_items'>

                                {sets.map(set => (
                                    <SetItem
                                        handleClick = {handleClick}
                                        key = {set.id}
                                        id={set.id} 
                                        src={set.setImage}
                                        text={set.setName}
                                        label={set.language}
                                        type="learn"
                                    />
                                ))}

                            
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <LearnSection setClicked={setClicked} setName={setName} setId={setId} type={type}/>
            )}
        </>
    );
}

export default Learn
