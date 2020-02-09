import React from 'react';
import BorderBlock from '../BorderBlockWithIcon'
import style from './style.module.css';

const FormControl = ({
    input, 
    meta: { touched, error }, 
    ...props
}) => {
    const haveError = touched && error;

    return (
        <div className={` ${haveError ? style.error : ''} ${style.formControl}`}>
            { props.children }
            { haveError && <div className={style.errorMessage}>{ error }</div> }
        </div>
    )
}


export const Textarea = ({ input, ...props }) => {
    return <FormControl {...props} > <textarea {...input} {...props}  /> </FormControl>
}

export const Input = ({ input, ...props }) => {
    return <FormControl {...props} > <input {...input} {...props}  /> </FormControl>
}

export const EditInput = ({ 
    input, 
    edit, 
    iconClass,
    textarea = false,
    ...props 
}) => {
    const { name, value } = input;

    const inputHtml =  textarea ? <textarea {...input} {...props}  /> : <input {...input} {...props}  />
    
    return <FormControl {...props} >
        <BorderBlock label={name} text={value} iconClass={iconClass} >
            { edit && inputHtml }
        </BorderBlock>
    </FormControl>
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