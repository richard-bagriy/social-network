import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import ProfileContainer from '../../containers/ProfileContainer';
import DialogsContainer from '../../containers/DialogsContainer';
import UsersContainer   from '../../containers/UsersContainer';
import Preloader from '../common/Preloader'
import AuthRedirect from '../../hoc/withAuthRedirect';
import '../../styles/App.scss';

const Event = React.lazy(() => import('../../containers/EventContainer'))
const Setting = React.lazy(() => import('../Setting'))

export default () => (
    <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
            <Route path='/profile/:id?' component={AuthRedirect(ProfileContainer)} />
            <Route path='/dialogs/:id?' component={AuthRedirect(DialogsContainer)} />
            <Route path='/users' component={AuthRedirect(UsersContainer)} />

            <React.Suspense fallback={<Preloader />} >
                <Route path="/setting" exact component={AuthRedirect(Setting)} />
            </React.Suspense>

            <React.Suspense fallback={<Preloader />} >
                <Route path="/event/create" exact component={Event} />
            </React.Suspense>

        </div>
    </div>
)