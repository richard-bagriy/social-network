import React from 'react'
import style from '../style.module.scss'
import { generateImagePath } from '../../../../utils/helper'

const Post = ({
    message,
    date,
    userName,
    userImage,
 }) => {
    
    const image = generateImagePath(userImage)

    return <>
        <div className={style.post__top}>
            <img src={image} className="user-small-image" alt={image} />
            <div>
                <div className={style.post__userName}>{ userName }</div>
                <div className={style.post__time}>{ date }</div>
            </div>
        </div>
        <div className={style.post__text}>{ message }</div>
    </>
}

export default Post;