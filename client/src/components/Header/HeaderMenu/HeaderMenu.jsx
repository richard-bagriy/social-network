import React from 'react';
import style from './HeaderMenu.module.css';
import { connect } from 'react-redux';
import { logout } from '../../../store/Auth/effects';
import { getAuthUserName } from '../../../store/Auth/selectors';

class HeaderMenu extends React.Component {

    state = {
        open: false
    }

    constructor(props) {
        super(props);

        this.toggleMenu = this.toggleMenu.bind(this);
        this.logout = this.logout.bind(this);
    }

    toggleMenu() {
        this.setState({open: !this.state.open})
    }

    logout() {
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