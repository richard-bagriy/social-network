import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './style.module.sass'
import classNames from 'classnames'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <NavLink to="/" exact className={style.nav__item} activeClassName={style.active}>
                <i className={ classNames('far', 'fa-list-alt', style.icon) }></i>
                Events
            </NavLink>
            <NavLink to="/profile" activeClassName={style.active} className={style.nav__item}>
                <i className={ classNames('fas', 'fa-user', style.icon) }></i>
                Profile
            </NavLink>
            <NavLink to="/dialogs" activeClassName={style.active} className={style.nav__item}>
                <i className={ classNames('far', 'fa-envelope', style.icon) }></i>
                Messages
            </NavLink>
            <NavLink to="/users" activeClassName={style.active} className={style.nav__item}>
                <i className={ classNames('fas', 'fa-users', style.icon) }></i>
                Find Users
            </NavLink>
            <div className={style.nav__divider}></div>
            <NavLink to="/saved" activeClassName={style.active} className={style.nav__item}>
                <i className={ classNames('far', 'fa-heart', style.icon) }></i>
                Saved
            </NavLink>
            <div className={style.nav__divider}></div>
            <NavLink to="/setting" activeClassName={style.active} className={style.nav__item}>
                <i className={ classNames('fas', 'fa-cog', style.icon) }></i>
                Setting
            </NavLink>
        </nav>
    )
}

export default Navbar