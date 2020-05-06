import React from 'react';
import style from './style.module.css';

const Message = ({
    message,
    authID,
    user_id,
    sent_time
}) => {
    
    const postionClass = user_id === authID ? style.messageMy : style.messageFriend

    return <div className={`${style.message} ${postionClass}`} > 
        { message }
    </div>
}

export default Message