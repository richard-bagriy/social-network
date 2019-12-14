import React from 'react'
import style from './style.module.css'

const Post = (props) => {
    const date = new Date();

    return (
        <div className={style.postWrapper}>
            <div className={style.postTop}>
                <img src="" className={style.image} alt="test" />
                <div>
                    <div className={style.postUserName}>Rock Smith</div>
                    <div className={style.postTime}>{ date.toLocaleTimeString() }</div>
                </div>
            </div>
            <div className={style.postText}>{props.message}</div>
        </div>
    )
}

export default Post;