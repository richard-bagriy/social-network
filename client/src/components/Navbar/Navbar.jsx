import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>
                    <i className={`fas fa-user ${s.navbarIcon}`}></i>
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>
                    <i className={`far fa-envelope ${s.navbarIcon}`}></i>
                    Messages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.active}>
                    <i className={`fas fa-users ${s.navbarIcon}`}></i>
                    Find Users
                </NavLink>
            </div>
            {/* <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div> */}
            {/* <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/setting" activeClassName={s.active}>Setting</NavLink>
            </div> */}
        </nav>
    )
}

export default Navbar