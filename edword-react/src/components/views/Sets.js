import '../styles/Cards.css';
import SetItem from '../SetItem';
import pic1 from '../../images/pic1.jpg';
import pic2 from '../../images/pic2.jpg';
import pic3 from '../../images/pic3.jpg';
import pic4 from '../../images/pic4.jpg';
import pic5 from '../../images/pic5.jpg';
import { Link } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:8080/wordsets`
})

function Sets() {


    const [sets, setSets] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        api.get('/')
            .then(response => {
                Promise.all(response.data.map(num =>
                    api.get('http://localhost:8080//wordset/image/' + num.id)
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
                            key = {set.id}
                            src={set.setImage}
                            text={set.setName}
                            label={set.language}
                            path='/learn'
                        />
                    ))}

                   
                </ul>
                {/* <ul className='sets_items'>
                    <SetItem
                        src={pic1}
                        text='Learn types of animals'
                        label='Animals'
                        path='/learn'
                    />
                    <SetItem
                        src={pic2}
                        text='Discover same new words connected with nature'
                        label='Nature'
                        path='/learn'
                    />
                </ul>
                <ul className='sets_items'>
                    <SetItem
                        src={pic3}
                        text='Travel around our planet'
                        label='Travel'
                        path='/learn'
                    />
                    <SetItem
                        src={pic4}
                        text='Discover something new'
                        label='Science'
                        path='/learn'
                    />
                    <SetItem
                        src={pic5}
                        text='Visit the biggest cities in the world'
                        label='City'
                        path='/learn'
                    />
                </ul> */}
            </div>
        </div>
        </div>
    )
}

export default Sets
