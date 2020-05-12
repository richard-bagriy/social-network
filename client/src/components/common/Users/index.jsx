import React from 'react'
import User from './User'
import style from './style.module.scss'

export default ({ users }) => (
    <div className={style.usersWrapper}>
        { users.map(
            u => 
                <User
                    key={ u._id }
                    id={ u._id }
                    name={ u.name }
                    image={ u.images.photo }
                    country="Ukraine"
                    events="0"
                    subscribers={ u.subscribers }
                    subscriptions={ u.subscriptions }
                    subscribed={ u.subscribed }
                />
            )
        }
    </div>
)