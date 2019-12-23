import React from 'react';
import Preloader from '../common/Preloader';
import Filter from './Filter/Filter';
import ExtraInfo from './ExtraInfo';
import UserInfo from './UserInfo';
import style from './style.module.css';

const Users = ({ 
    followingInProgress, 
    subscribe, 
    unsubscribe, 
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
            { users.map(u => {
                return (
                    <div className={style.userBlock} key={u._id}>
                        <UserInfo id={u._id} name={u.name} image={u.image} country="Ukraine" />
                        <ExtraInfo events="0" subscribers={u.subscribers} subscriptions={u.subscriptions} />
                        { u.subscribed
                            ? <button 
                                disabled={followingInProgress.some(id => id === u._id)}
                                className={style.followBtn} 
                                onClick={() => unsubscribe(u._id)}>Unfollow </button> 
                            : <button 
                                disabled={followingInProgress.some(id => id === u._id)}
                                className={style.unffolowBtn} 
                                onClick={() => subscribe(u._id)}>Follow</button>
                        }
                    </div>
                    
                )
            })}
        </div>

        { isLoadingUsers && <Preloader/> }
        
        </div>
    )

}

export default Users