import React from 'react';
import style from './index.module.css';
import {Link} from 'react-router-dom';
import logo from '../../../logo.svg';
import Form from './form';
import {authAPI} from '../../../api/api';

const Register = () => {

    const onSubmit = (data) => {
        authAPI.registration(data)
    }

    return (
        <div className={style.wrapper}>
            <div className={style.inner}>
                <div className={style.loginHeader}>
                    <img src={logo} alt="Logo" />
                    <Link to="/login">Sign in</Link>
                </div>
                <div className={style.loginBody}>
                    <h1 className={style.loginH1}>Sign Up</h1>
                    <div className={style.loginText}>Hello there! Sign in and start managing your item.</div>
                    <div className={style.loginFormWrapper}>
                        <Form onSubmit={onSubmit} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register