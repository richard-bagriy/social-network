import React , { Component } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from '../store/App/effects';
import { getInitApp } from '../store/App/selectors';
import { getAuth } from '../store/Auth/selectors';
import Preloader from '../components/common/Preloader';
import Auth from '../components/Auth';
import App from '../components/App';


class AppContainer extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        const { init, isAuth } = this.props;
        
        if (!init) return <Preloader/>
        if (!isAuth) return <Auth />

        return <App/>
    }

}

const mapStateToProps = (state) => ({
    init: getInitApp(state),
    isAuth: getAuth(state)
})

export default connect(mapStateToProps, { initializeApp })(AppContainer);