import React from 'react'
import {Link} from 'react-router-dom'

function SetItem(props) {
    return (
        <>
            <li className='set_item'>
                <Link className='set_item_link' to={props.path}>
                    <figure className='set_item_wraper' data-category={props.label}>
                        <img
                            className='set_item_img'
                            alt='Set Image'
                            src={props.src}
                        />
                    </figure>
                    <div className='set_item_info'>
                        <h5 className='set_item_text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default SetItem
