import React from 'react'
import { NavLink } from 'react-router-dom'
import { generateImagePath } from '../../../../utils/helper'
import classNames from 'classnames'
import style from './style.module.css'

export default ({
    userName,
    lastMessage,
    userImage,
    activeId,
    userId,
    getDialog
}) => {

    const changeActiveDialog = () => getDialog(userId)
    
    const activeClass = activeId === userId ? style.active : ''

    const imageUrl = generateImagePath(userImage)
    
    return <NavLink className={classNames(style.wrapper, activeClass)} to={`/dialogs`} onClick={changeActiveDialog}>
        <div className={style.inner}>
            <img src={imageUrl} alt={userName} className={style.image} />
            <div className={style.info}>
                <div className={style.friendName}>
                    { userName }
                </div>
                <div className={style.message}>
                    { lastMessage.message }
                </div>
            </div>
            <div className={style.time}>
                Today 3:15 AM
            </div>
        </div>
    </NavLink>
}