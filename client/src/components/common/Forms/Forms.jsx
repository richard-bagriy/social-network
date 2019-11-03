import React from 'react';
import style from './Forms.module.css';


export const Textarea = ({input, meta: { touched, error }, ...props}) => {

    const haveError = touched && error;
    
    return (
        <div className={` ${haveError ? style.error : ''} ${style.formControl}`}>
            <textarea {...input} {...props}  />
            {(haveError) ? <div className={style.errorMessage}>{error}</div> : ''}
        </div>
    )

}

export const Input = ({input, meta: { touched, error }, ...props}) => {

    const haveError = touched && error;
    
    return (
        <div className={` ${haveError ? style.error : ''} ${style.formControl}`}>
            <input {...input} {...props}  />
            {(haveError) ? <div className={style.errorMessage}>{error}</div> : ''}
        </div>
    )

}
