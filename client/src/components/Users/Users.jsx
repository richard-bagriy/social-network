import React from 'react';
import Preloader from '../common/Preloader';
import Filter from './Filter/Filter';
import Users from '../common/Users';
import style from './style.module.css';

export default ({ 
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

        <Users users={users} />

        { isLoadingUsers && <Preloader/> }
        
        </div>
    )

}