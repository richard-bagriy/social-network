import React from 'react';
import style from './style.module.css';

const FormControl = ({input, meta: { touched, error }, ...props}) => {
    const haveError = touched && error;

    return (
        <div className={` ${haveError ? style.error : ''} ${style.formControl}`}>
            { props.children }
            { (haveError) ? ( <div className={style.errorMessage}>{ error }</div> ) : '' }
        </div>
    )
}

export const Textarea = ({ input, ...props }) => {
    return <FormControl {...props} > <textarea {...input} {...props}  /> </FormControl>
}

export const Input = ({ input, ...props }) => {
    return <FormControl {...props} > <input {...input} {...props}  /> </FormControl>
}

export const Radio = ({ input, label, ...props }) => {
    return (
        <label className={style.radioBlock}>
            <input {...input} {...props}  />
            <span/>
            { label }
        </label>
    )
}