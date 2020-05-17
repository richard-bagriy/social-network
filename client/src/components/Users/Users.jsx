import React from 'react';
import Preloader from '../common/Preloader';
import Filter from './Filter/Filter';
import Users from '../common/Users';
import style from './style.module.sass';
import H2 from '../common/H2';

export default ({ 
    isLoadingUsers,
    changeFilterText,
    users
}) => {

    const changeUsers = ({ filterText }) => {
        changeFilterText(filterText);
    }

    return (
        <div className={style.users}>
        
        <H2 text="Find Users" />

        <Filter onSubmit={changeUsers}/>

        <Users users={users} />

        { isLoadingUsers && <Preloader/> }
        
        </div>
    )

}