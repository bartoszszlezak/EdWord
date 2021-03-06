import React from 'react'

function SetItem(props) {


    return (
        <>
            <li className='set_item' onClick={() => props.handleClick(props.id, props.type, props.text)}>
                <div className='set_item_link'>
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
                </div>
            </li>
        </>
    );
}

export default SetItem
