import React , { Component } from 'react';
import { connect } from 'react-redux';
import { initializeApp, getInitApp } from '../store/App';
import { getAuth } from '../store/Auth/selectors';
import Preloader from '../components/common/Preloader';
import Auth from '../components/Auth';
import App from '../components/App';
import { Redirect } from 'react-router-dom';


class AppContainer extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        const { init, isAuth } = this.props;

        if (!init) {
            return <Preloader/>
        } else if (!isAuth) {
            return <>
                <Redirect to="/" />
                <Auth />
            </>
        } else {
            return <App/>
        }
    }

}

const mapStateToProps = (state) => ({
    init: getInitApp(state),
    isAuth: getAuth(state)
})

export default connect(mapStateToProps, { initializeApp })(AppContainer);