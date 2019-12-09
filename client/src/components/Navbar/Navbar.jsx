import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './style.module.css'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to="/profile" activeClassName={style.active}>
                    <i className={`fas fa-user ${style.navbarIcon}`}></i>
                    Profile
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs" activeClassName={style.active}>
                    <i className={`far fa-envelope ${style.navbarIcon}`}></i>
                    Messages
                </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/users" activeClassName={style.active}>
                    <i className={`fas fa-users ${style.navbarIcon}`}></i>
                    Find Users
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar