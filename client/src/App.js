import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profle/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Auth from './components/Auth/Auth';
import {Route, Redirect} from 'react-router-dom';
import AuthRedirect from './hoc/withAuthRedirect';
import {connect} from 'react-redux';
import Preloader from './components/common/Preloader';
import {initializeApp} from './redux/app-reducer';
import {getInitApp} from './redux/selectors/app-selector';
import {getAuth} from './redux/selectors/auth-selector';

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