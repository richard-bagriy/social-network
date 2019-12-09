import React from 'react';
import style from './style.module.css';

const Message = (props) => {
    return (
        <div className={`${style.message} ${props.state.friend ? style.messageFriend : style.messageMy}`} > 
            {props.state.message} 
        </div>
    )
}

export default Message