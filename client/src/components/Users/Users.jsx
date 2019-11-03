import React from 'react';
import style from './Users.module.css';
import img from '../../assets/images/user.png';
import Filter from './Filter/Filter';
import Preloader from '../common/Preloader';
import {NavLink} from 'react-router-dom';

const Users = (props) => {

    const changeUsers = ({filterText}) => {
        props.changeFilterText(filterText);
    }

    return (
        <div className={style.userWrapper}>

        <h2 className={style.usersHeader}>
            Find Users
            <hr className={style.usersHeaderHr} />
        </h2>

        <Filter onSubmit={changeUsers}/>

        <div className={style.userInner} id="users-wrapper">
            {props.filterUsers.map(u => {
                return (
                    <div className={style.userBlock} key={u.id}>
                        <div className={style.userImage}>
                            <NavLink to={`/profile/${u.id}`}>
                                <img className={style.userImage} src={ u.photos.small ? u.photos.small : img}  alt="test" />
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
                                disabled={props.followingInProgress.some(id => id === u.id)}
                                className={`${style.followBtn}`} 
                                onClick={() => props.unfollow(u.id)}>Unfollow</button> 
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                className={`${style.unffolowBtn}`} 
                                onClick={() => props.follow(u.id)}>Follow</button>
                        }
                    </div>
                    
                )
            })}
        </div>

        { props.isLoadingUsers && <Preloader/> }
        
        </div>
    )

}

export default Users