import LearnSection from '../LearnSection';
import '../styles/Cards.css';
import SetItem from '../SetItem';
import React, {useEffect, useState} from 'react';
import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:8080/wordsets`
})

function Learn() {

    const [sets, setSets] = useState([]);
    const [status, setStatus] = useState(false);

    const [clicked, setClicked] = useState(false)

    const setParam = (setId, type) => {
        setClicked(true);
    }

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
                                        handleClick = {setParam}
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
                <LearnSection setClicked={setClicked}/>
            )}
        </>
    );
}

export default Learn
