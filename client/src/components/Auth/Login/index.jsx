import React from 'react';
import style from '../Auth.module.css';
import Form from './form';
import logo from '../../../logo.svg';
import { authLogin, checkAuth } from '../../../store/Auth/effects';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAuth } from '../../../store/Auth/selectors';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = { showPassword: false };
    }

    togglePassword = () => {
        this.setState({showPassword: !this.state.showPassword});
    }

    onSubmit = (data) => {
        return this.props.authLogin(data);
    }

    render() {
        return (
            <div className={style.authWrapper}>
                <div className={style.authInner}>
                    <div className={style.authHeader}>
                        <img src={logo} alt="Logo"  className={style.authHeader__img}/>
                        <Link to="/registration" className={style.authHeader__link}>Sign Up now</Link>
                    </div>
                    <div className={style.authBody}>
                        <h1 className={style.authBody__header}>Sign In</h1>
                        <div className={style.authBody__text}>Hello there! Sign in and start managing your item.</div>
                        <div className={style.authForm}>
                            <Form onSubmit={this.onSubmit} showPassword={this.state.showPassword} togglePassword={this.togglePassword} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({isAuth: getAuth(state)});

export default connect(mapStateToProps, {authLogin, checkAuth})(Login)