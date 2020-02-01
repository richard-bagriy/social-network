import React from 'react'
import { generateImagePath } from '../../../../utils/helper'
import DeletePost from './DeletePost'
import style from './style.module.css'

const Post = ({
    id,
    message,
    date,
    name,
    image,
    userId,
    authId,
    profileId,
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
            { userId === authId && <DeletePost userId={profileId} postId={id} /> }
        </div>
    )
}

export default Post;