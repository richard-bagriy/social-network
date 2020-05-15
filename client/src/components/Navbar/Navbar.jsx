import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './style.module.sass'
import classNames from 'classnames'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <NavLink to="/" exact className={style.nav__item} activeClassName={style.active}>
                <i className={ classNames('far', 'fa-list-alt', style.icon) }></i>
                <span>Events</span>
            </NavLink>
            <NavLink to="/profile" activeClassName={style.active} className={style.nav__item}>
                <i className={ classNames('fas', 'fa-user', style.icon) }></i>
                <span>Profile</span>
            </NavLink>
            <NavLink to="/dialogs" activeClassName={style.active} className={style.nav__item}>
                <i className={ classNames('far', 'fa-envelope', style.icon) }></i>
                <span>Messages</span>
            </NavLink>
            <NavLink to="/users" activeClassName={style.active} className={style.nav__item}>
                <i className={ classNames('fas', 'fa-users', style.icon) }></i>
                <span>Find Users</span>
            </NavLink>
            <div className={style.nav__divider}></div>
            <NavLink to="/saved" activeClassName={style.active} className={style.nav__item}>
                <i className={ classNames('far', 'fa-heart', style.icon) }></i>
                <span>Saved</span>
            </NavLink>
            <div className={style.nav__divider}></div>
            <NavLink to="/setting" activeClassName={style.active} className={style.nav__item}>
                <i className={ classNames('fas', 'fa-cog', style.icon) }></i>
                <span>Setting</span>
            </NavLink>
        </nav>
    )
}

export default Navbar