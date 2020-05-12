import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './style.module.sass'
import classNames from 'classnames'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.nav__item}>
                <NavLink to="/profile" activeClassName={style.active}>
                    <i className={ classNames('fas', 'fa-user', style.icon) }></i>
                    Profile
                </NavLink>
            </div>
            <div className={style.nav__item}>
                <NavLink to="/dialogs" activeClassName={style.active}>
                    <i className={ classNames('far', 'fa-envelope', style.icon) }></i>
                    Messages
                </NavLink>
            </div>
            <div className={style.nav__item}>
                <NavLink to="/users" activeClassName={style.active}>
                    <i className={ classNames('fas', 'fa-users', style.icon) }></i>
                    Find Users
                </NavLink>
            </div>
            <div className={style.nav__divider}></div>
            <div className={style.nav__item}>
                <NavLink to="/setting" activeClassName={style.active}>
                    <i className={ classNames('fas', 'fa-cog', style.icon) }></i>
                    Setting
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar