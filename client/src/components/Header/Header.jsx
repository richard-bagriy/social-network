import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom'
import AuthRedirect from '../../hoc/withAuthRedirect';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import { getAuth } from '../../store/Auth/selectors';
import style from './style.module.css';
import logo from '../../assets/svg/logo.svg';

const Header = ({ isAuth }) => {
    
    return (
        <header className={style.header}>
            <div className={style.logoLeft}>
                <NavLink to="/">
                    <img src={logo} alt={logo}/>
                </NavLink>
                Social-Network
            </div>
            
            {isAuth && <HeaderMenu/>}
        </header>
    )
}

const mapStateToProps = (state) => ({isAuth: getAuth(state)})

export default compose(
    connect(mapStateToProps),
    AuthRedirect
)(Header)