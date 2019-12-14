import React from 'react';
import Form from './NewPostForm';
import style from './style.module.css';

const NewPost = (props) => {
    
    const addPost = ({message}) => {
        props.addPost(message);
    }
 
    return (
        <div className={style.wrapper}>
            <Form onSubmit={addPost} profileImage=""/>
        </div>
    )

}

export default NewPost;

