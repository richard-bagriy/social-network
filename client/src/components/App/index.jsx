import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import ProfileContainer from '../../containers/ProfileContainer';
import DialogsContainer from '../../containers/DialogsContainer';
import UsersContainer   from '../../containers/UsersContainer';
import Setting from '../Setting';
import AuthRedirect from '../../hoc/withAuthRedirect';
import '../../styles/App.css';

export default () => {
    return <>
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                <Route path='/profile/:id?' component={AuthRedirect(ProfileContainer)} />
                <Route path='/dialogs' component={AuthRedirect(DialogsContainer)} />
                <Route path='/users' component={AuthRedirect(UsersContainer)} />
                <Route path="/setting" component={AuthRedirect(Setting)} />
            </div>

        </div>
    </>
}