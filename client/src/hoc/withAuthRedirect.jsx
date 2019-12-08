import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAuth } from '../store/Auth/selectors';

export default (Component) => {

    class Auth extends React.Component {

        render () {
            if (!this.props.isAuth) {
                return <Redirect to="/login" />
            } else {
                return <Component {...this.props} />
            }
        }
    }

    const mapStateToProps = (state) => ({isAuth: getAuth(state)})

    return connect(mapStateToProps)(Auth);
}