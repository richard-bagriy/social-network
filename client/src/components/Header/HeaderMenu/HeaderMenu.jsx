import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../../store/Auth/effects';
import { getAuthUserName } from '../../../store/Auth/selectors';
import style from './style.module.css';

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
                    <span className={style.userName}>{this.props.userName}</span>
                </button>

                <div className={`${style.menu} ${this.state.open ? style.open : ''} `}>
                    <NavLink to="/profile" className={style.menuItem}>
                        <span>My profile</span>
                    </NavLink>
                    <div className={style.menuItem} onClick={this.props.logout}>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({userName: getAuthUserName(state)})

export default connect(mapStateToProps, {logout})(HeaderMenu);