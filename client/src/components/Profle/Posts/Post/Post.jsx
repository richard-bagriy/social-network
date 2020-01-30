import React from 'react'
import { generateImagePath } from '../../../../utils/helper'
import style from './style.module.css'

const Post = ({
    message,
    date,
    name,
    image
 }) => {

    const userImage = generateImagePath(image)

    return (
        <div className={style.postWrapper}>
            <div className={style.postTop}>
                <img src={ userImage } className={style.image} alt="test" />
                <div>
                    <div className={style.postUserName}>{ name }</div>
                    <div className={style.postTime}>{ date }</div>
                </div>
            </div>
            <div className={style.postText}>{ message }</div>
        </div>
    )
}

export default Post;