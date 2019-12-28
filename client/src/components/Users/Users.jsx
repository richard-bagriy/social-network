import React from 'react';
import Preloader from '../common/Preloader';
import Filter from './Filter/Filter';
import User from '../common/User';
import style from './style.module.css';

const Users = ({ 
    isLoadingUsers,
    changeFilterText,
    users
}) => {

    const changeUsers = ({ filterText }) => {
        changeFilterText(filterText);
    }

    return (
        <div className={style.userWrapper}>

        <h2 className={style.usersHeader}>
            Find Users
            <hr className={style.usersHeaderHr} />
        </h2>

        <Filter onSubmit={changeUsers}/>

        <div className={style.userInner} id="users-wrapper">
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

        { isLoadingUsers && <Preloader/> }
        
        </div>
    )

}

export default Users