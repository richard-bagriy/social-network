import React from 'react';
import { NavLink } from 'react-router-dom';
import Filter from './Filter/Filter';
import Preloader from '../common/Preloader';
import style from './style.module.css';

const Users = ({ 
    followingInProgress, 
    follow, 
    unfollow, 
    isLoadingUsers,
    changeFilterText,
    Users
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
            { Users.map(u => {
                return (
                    <div className={style.userBlock} key={u._id}>
                        <div className={style.userImage}>
                            <NavLink to={`/profile/${u._id}`}>
                                <img className={style.userImage} src={require(`../../assets/images/${u.image}`)}  alt="test" />
                            </NavLink>
                        </div>
                        <div className={style.userName}>
                            {u.name}
                        </div>
                        <div className={style.userCountry}>
                            <i className="fas fa-map-marker-alt location-market"></i>Ukraine
                        </div>
                        <div className={style.userInfo}>
                            <div>
                                <div className={style.userInfoCount}>15</div>
                                <div className={style.userInfoText}>Lisitngs</div>
                                
                            </div>
                            <div>
                                <div className={style.userInfoCount}>150</div>
                                <div className={style.userInfoText}>Followers</div>
                            </div>
                            <div>
                                <div className={style.userInfoCount}>265</div>
                                <div className={style.userInfoText}>Following</div>
                            </div>
                        </div>
                        { u.followed 
                            ? <button 
                                disabled={followingInProgress.some(id => id === u.id)}
                                className={`${style.followBtn}`} 
                                onClick={() => unfollow(u.id)}>Unfollow</button> 
                            : <button disabled={followingInProgress.some(id => id === u.id)}
                                className={`${style.unffolowBtn}`} 
                                onClick={() => follow(u.id)}>Follow</button>
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