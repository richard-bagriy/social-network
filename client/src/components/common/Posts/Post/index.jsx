import React from 'react'
import style from './style.module.css'
import { generateImagePath } from '../../../../utils/helper'

const Post = ({
    message,
    date,
    userName,
    userImage,
 }) => {
    
    const image = generateImagePath(userImage)

    return <>
        <div className={style.postTop}>
            <img src={image} className="user-small-image" alt={image} />
            <div>
                <div className={style.postUserName}>{ userName }</div>
                <div className={style.postTime}>{ date }</div>
            </div>
        </div>
        <div className={style.postText}>{ message }</div>
    </>
}

export default Post;