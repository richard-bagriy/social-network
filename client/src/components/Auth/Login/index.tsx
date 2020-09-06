import React, { useState } from 'react'
import style from '../Auth.module.scss'
import Form from './form'
import logo from '../../../assets/svg/logo.svg'
import { authLogin  } from '../../../store/Auth/effects'
import { connect, ConnectedProps } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoginHandleSubmitPropsType } from './form'

const connector = connect(null, { authLogin })

type PropsFromRedux = ConnectedProps<typeof connector> 

const Login = (props: PropsFromRedux) => {


    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = (data: LoginHandleSubmitPropsType) => {
        props.authLogin(data)
    }

    return  <div className={style.authWrapper}>
        <div className={style.authInner}>
            <div className={style.authHeader}>
                <img src={logo} alt="Logo"  className={style.authHeader__img}/>
                <Link to="/registration" className={style.authHeader__link}>Sign Up now</Link>
            </div>
            <div className={style.authBody}>
                <h1 className={style.authBody__header}>Sign In</h1>
                <div className={style.authBody__text}>Hello there! Sign in and start managing your item.</div>
                <div className={style.authForm}>
                    <Form
                        onSubmit={handleSubmit}
                        showPassword={showPassword}
                        toggleShowPassword={toggleShowPassword}
                    />
                </div>
            </div>
        </div>
    </div>
}

export default connector(Login)