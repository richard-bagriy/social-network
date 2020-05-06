import React from 'react'
import Message from './Message'
import NewMessage from './NewMessage'
import { generateImagePath } from '../../../utils/helper'
import style from './style.module.css'

export default ({ 
    messages,
    userName,
    userImage,
    authID
 }) => {
    
    const imageLink = generateImagePath(userImage)
    
    return <div className={style.wrapper}>

        <div className={style.header}>
            <img src={imageLink} alt={userName} className="user-small-image" />
            { userName }
        </div>

        <div className={style.inner}>
            { messages && messages.map( m => <Message {...m} key={m._id} authID={authID} /> ) }
        </div>

        <NewMessage />

    </div>
}