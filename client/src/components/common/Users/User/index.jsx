import React from 'react'
import Info from './Info'
import Extra from './Extra'
import Button from './Button'
import style from '../style.module.scss'

const User = ({
    id,
    image,
    name,
    country,
    events,
    subscribers,
    subscriptions,
    subscribed,
}) => {
    return (
        <div className={style.userWrapper}>
            <Info
                image={ image }
                name={ name }
                country={ country }
                id={ id }
            />
            <Extra
                events={ events }
                subscribers={ subscribers }
                subscriptions={ subscriptions }
            />
            <Button
                subscribed={ subscribed }
                _id={ id }
            />
        </div>
    )
}

export default User