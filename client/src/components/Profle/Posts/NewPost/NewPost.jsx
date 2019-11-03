import React from 'react';
import style from './NewPost.module.css';
import img from '../../../../assets/images/user.png';
import Form from './NewPostForm';

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

