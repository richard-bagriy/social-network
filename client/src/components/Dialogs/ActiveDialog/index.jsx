import React from 'react'
import Message from './Message'
import NewMessage from './NewMessage'
import { generateImagePath } from '../../../utils/helper'
import style from './style.module.scss'

const ActiveDialog = ({
    dialog: { messages, userName, userImage },
    authID
}) => (
    <div className={style.wrapper}>

        <div className={style.header}>
            <img src={generateImagePath(userImage)} alt={userName} className="user-small-image" />
            { userName }
        </div>

        <div className={style.messages}>
            { messages && messages.map( m => <Message {...m} key={m._id} authID={authID} /> ) }
        </div>

        <NewMessage />

    </div>
)

export default ActiveDialog