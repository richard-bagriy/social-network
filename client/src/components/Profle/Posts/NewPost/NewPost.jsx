import React from 'react';
import Form from './NewPostForm';
import style from './style.module.css';
import img from '../../../../assets/images/user.png';

const NewPost = (props) => {
    
    const profileImage = props.profileImage ? props.profileImage : img;
    
    const addPost = ({message}) => {
        props.addPost(message);
    }
 
    return (
        <div className={style.wrapper}>
            <Form onSubmit={addPost} profileImage={profileImage}/>
        </div>
    )

}

export default NewPost;

