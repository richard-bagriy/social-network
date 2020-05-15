import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom'
import AuthRedirect from '../../hoc/withAuthRedirect';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import { getAuth } from '../../store/Auth/selectors';
import style from './style.module.scss';
import classNames from 'classnames'
import logo from '../../assets/svg/logo.svg';

const Header = ({ isAuth }) => {

    const toggleMenu = () => {
        // Yes i know it's bad bad, i change after refactoring
        document.querySelector('.app-wrapper').classList.toggle('hide-menu')
    }
    
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <i className={classNames("fas fa-bars", style.toggleMenu)} onClick={toggleMenu}></i>
                <NavLink to="/">
                    <img src={logo} alt={logo}/>
                </NavLink>
                Social-Network
            </div>

            <div></div>
            
            <NavLink className={classNames ('btn btn-pink', style.eventBtn)} to="/event/create">+ Add event</NavLink>
            
            { isAuth && <HeaderMenu/>}
        </header>
    )
}

const mapStateToProps = (state) => ({isAuth: getAuth(state)})

export default compose(
    connect(mapStateToProps),
    AuthRedirect
)(Header)