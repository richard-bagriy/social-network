import React from 'react';
import s from './Header.module.css';
import logo from '../../logo.svg';
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux';
import {compose} from 'redux';
import AuthRedirect from '../../hoc/withAuthRedirect';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import { getAuth } from '../../redux/selectors/auth-selector';

const Header = ({isAuth}) => {
    
    return (
        <header className={s.header}>
            <div className={s.logoLeft}>
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