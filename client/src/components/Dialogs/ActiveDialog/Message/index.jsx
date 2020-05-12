import React from 'react';
import style from '../style.module.scss';

const Message = ({
    message,
    authID,
    user_id,
    sent_time
}) => {
    
    const postionClass = user_id == authID ? style.message__my : style.message__friend

    return <div className={`${style.message} ${postionClass}`} > 
        { message }
    </div>
}

export default Message