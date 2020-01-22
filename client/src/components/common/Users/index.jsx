import React from 'react'
import User from './User'
import style from './style.module.css'

export default ({ users }) => {
    return <div className={style.wrapper}>
        { users.map(
            u => 
                <User
                    key={ u._id }
                    id={ u._id }
                    name={ u.name }
                    image={ u.image }
                    country="Ukraine"
                    events="0"
                    subscribers={ u.subscribers }
                    subscriptions={ u.subscriptions }
                    subscribed={ u.subscribed }
                />
            )
        }
    </div>
}