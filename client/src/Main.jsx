import React from 'react';
import {connect} from 'react-redux';
import App from './App';
import Auth from './components/Auth/Auth';
import {checkAuth} from './redux/auth-reducer';

class AuthRedirect extends React.Component {

    constructor(props) {
        super(props);
        this.props.checkAuth();
    }

    render() {
        
        if (this.props.isAuth) {
            return <App />
        } else {
            return <Auth />
        }
    }
    
}

const mapStateToProps = (state) => ({isAuth: state.auth.isAuth})

export default connect(mapStateToProps, {checkAuth})(AuthRedirect);