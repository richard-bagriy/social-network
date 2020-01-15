import React from 'react';
import style from './style.module.css';

export default ({ message, type }) => {

    let className;

    switch(type) {
        case 'error' :
            className = style.error + style.message;
            break;
        case 'warning' : 
            className = style.warning + style.message;
            break;
        case 'success' :
            className = style.success + style.message;
            break;
        default : 
            className = 'p-20 border bg-white text-center color-grey font-bold';
    }
    
    return <div className={ className }>{ message }</div>
}