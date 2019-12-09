import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Auth   from '../Auth/Auth';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import ProfileContainer from '../../containers/ProfileContainer';
import DialogsContainer from '../../containers/DialogsContainer';
import UsersContainer   from '../../containers/UsersContainer';
import Preloader from '../common/Preloader';
import AuthRedirect from '../../hoc/withAuthRedirect';
import { initializeApp } from '../../store/App/effects';
import { getInitApp } from '../../store/App/selectors';
import { getAuth } from '../../store/Auth/selectors';
import './style.css';

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.init) return <Preloader/>
        if (!this.props.isAuth) return <Auth />

        return <>
            <Redirect to="/" />
            
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route path='/' exact component={AuthRedirect(DialogsContainer)} />
                    <Route path='/profile/:id?' component={AuthRedirect(ProfileContainer)} />
                    <Route path='/dialogs' component={AuthRedirect(DialogsContainer)} />
                    <Route path='/users' component={AuthRedirect(UsersContainer)} />
                </div>

            </div>
        </>
    }
    
}

const mapStateToProps = (state) => ({
    init: getInitApp(state),
    isAuth: getAuth(state)
})

export default connect(mapStateToProps, {initializeApp})(App);