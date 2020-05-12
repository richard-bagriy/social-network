import React from 'react';
import BorderBlock from '../BorderBlockWithIcon'
import style from './style.module.scss';
import cn from 'classnames'

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

export const FileInput = ({
    input: { value, ...inputRest },
    meta,
    ...props
}) => {
    
    return <label className="btn btn-pink">
        Choose File
        <input 
            {...inputRest} 
            {...props}
            type="file"
            className="hidden" 
            accept='.jpg, .png, .jpeg'
        />
    </label>

}

export const Select = ({ input, values, className, meta: { touched, error } }) => (   
    <div className={cn('select-wrapper', style.formControl, touched && error ? style.error : '' )}>
        <select {...input} className={className} onChange={input.onChange}>
            <option value="0">- Please Choose -</option>
            { values.map((val, i) => (
                <option key={i} value={val} >{val}</option>
            )) }
        </select>
            { touched && error && <div className={style.errorMessage}>{ error }</div> }
    </div>
)