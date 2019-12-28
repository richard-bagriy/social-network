import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { required, maxLength } from '../../../../utils/Validators';
import { Input } from '../../../common/Forms/Forms';
import style from './style.module.css';

const maxLength50 = maxLength(50);

const NewPost = ({
    handleSubmit,
    profileImage,
    text
}) => {

    return (
        <div className={style.wrapper}>
            <form onSubmit={handleSubmit} className={style.inner}>
                <img className="user-small-image" src={ profileImage } alt={ profileImage } />
                <Field 
                    component={Input} 
                    className="input border w-100" 
                    value={text} 
                    name="message" 
                    placeholder="Write your activity"
                    validate={[required,maxLength50]} 
                />
                <button className="btn btn-pink p-12">Add post</button>
            </form>
        </div>
    )

}

export default reduxForm({ form: 'add-post' })(NewPost)