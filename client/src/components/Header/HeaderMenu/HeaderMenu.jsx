import React from 'react';
import style from './HeaderMenu.module.css';
import {connect} from 'react-redux';
import {logout} from '../../../redux/auth-reducer';
import { getAuthUserName } from '../../../redux/selectors/auth-selector';

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
                    <div className={style.menuItem}>
                        <span onClick={this.props.logout}>Logout</span>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({userName: getAuthUserName(state)})

export default connect(mapStateToProps, {logout})(HeaderMenu);