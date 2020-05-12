import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../../store/Auth/effects';
import { getAuthUserName } from '../../../store/Auth/selectors';
import style from './style.module.sass';

class HeaderMenu extends React.Component {

    state = {
        open: false
    }

    toggleMenu = () => {
        this.setState({open: !this.state.open})
    }

    logout = () => {
        this.props.logout();
    }

    render() {
        return (
            <div className={style.wrapper}>
                <button className={style.btn} onClick={this.toggleMenu}>
                    <i className="fas fa-user-circle"></i>
                    <span className={style.btn__userName}>{this.props.userName}</span>
                </button>

                <div className={`${style.menu} ${this.state.open ? style.open : ''} `}>
                    <NavLink to="/profile" className={style.menu__item}>
                        <span>My profile</span>
                    </NavLink>
                    <NavLink to="/setting" className={style.menu__item}>
                        <span>Setting</span>
                    </NavLink>
                    <div className={style.menu__item} onClick={this.props.logout}>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({userName: getAuthUserName(state)})

export default connect(mapStateToProps, {logout})(HeaderMenu);