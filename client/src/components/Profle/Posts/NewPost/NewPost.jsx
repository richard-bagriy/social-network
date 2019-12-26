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
                <img className={style.profileImage} src={profileImage} alt="New Post"/>
                <Field 
                    component={Input} 
                    className={style.input} 
                    value={text} 
                    name="message" 
                    placeholder="Write your activity"
                    validate={[required,maxLength50]} 
                />
                <button className={style.btn}>Add post</button>
            </form>
        </div>
    )

}

export default reduxForm({ form: 'add-post' })(NewPost)