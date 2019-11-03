import React from 'react';
import style from './index.module.css';
import Form from './form';
import logo from '../../../logo.svg';
import {authLogin, checkAuth} from '../../../redux/auth-reducer';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { getAuth } from '../../../redux/selectors/auth-selector';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(data) {
        this.props.authLogin(data);
    }

    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.inner}>
                    <div className={style.loginHeader}>
                        <img src={logo} alt="Logo" />
                        <Link to="/registration">Sign Up now</Link>
                    </div>
                    <div className={style.loginBody}>
                        <h1 className={style.loginH1}>Sign In</h1>
                        <div className={style.loginText}>Hello there! Sign in and start managing your item.</div>
                        <div className={style.loginFormWrapper}>
                            <Form onSubmit={this.onSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({isAuth: getAuth(state)});

export default connect(mapStateToProps, {authLogin, checkAuth})(Login)