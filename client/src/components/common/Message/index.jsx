import React from 'react';
import style from './style.module.css';

export default ({ message, type }) => {

    let messageType;

    switch(type) {
        case 'error' :
            messageType = style.error;
            break;
        case 'warning' : 
            messageType = style.warning;
            break;
        case 'success' :
            messageType = style.success;
            break;
        default : messageType = style.warning;
    }
    
    return <div className={` ${messageType} ${style.message} `}>{ message }</div>
}