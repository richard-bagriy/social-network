import React from 'react';
import style from '../Auth.module.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../../assets/svg/logo.svg';
import Form from './form';
import { authRegistration } from '../../../store/Auth/effects';
import { getRegMessage } from '../../../store/Auth/selectors';

const Register = ({ authRegistration, regMessage }) => {

    const onSubmit = (data) => {
        return authRegistration(data);
    }
    
    return (
        <div className={style.authWrapper}>
                <div className={style.authInner}>
                    <div className={style.authHeader}>
                    <img src={logo} alt="Logo" className={style.authHeader__img} />
                    <Link to="/login" className={style.authHeader__link}>Sign in</Link>
                </div>
                <div className={style.authBody}>
                    <h1 className={style.authBody__header}>Sign Up</h1>
                    <div className={style.authBody__text}>Hello there! Sign in and start managing your item.</div>
                    <div className={style.authForm}>
                        <Form onSubmit={onSubmit} message={regMessage}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({ regMessage: getRegMessage(state) });

export default connect(mapStateToProps, { authRegistration })(Register)