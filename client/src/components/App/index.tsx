import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import ProfileContainer from '../../containers/ProfileContainer';
import DialogsContainer from '../../containers/DialogsContainer';
import UsersContainer   from '../../containers/UsersContainer';
import Events from '../../containers/EventsContainer'
import Preloader from '../common/Preloader'
import '../../styles/App.scss';

const CreateEvent = React.lazy(() => import('../../containers/CreateEvent/Container'))
const Setting = React.lazy(() => import('../Setting'))
const SavedEvents = React.lazy(() => import('../../containers/SavedEventsContainer'))

export default () => (
    <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
            <Route path='/' exact component={Events} />
            <Route path='/profile/:id?' component={ProfileContainer} />
            <Route path='/dialogs/:id?' component={DialogsContainer} />
            <Route path='/users' component={UsersContainer} />

            <React.Suspense fallback={<Preloader />} >
                <Route path="/setting" exact component={Setting} />
            </React.Suspense>

            <React.Suspense fallback={<Preloader />} >
                <Route path="/event/create" exact component={CreateEvent} />
            </React.Suspense>

            <React.Suspense fallback={<Preloader />} >
                <Route path="/saved" exact component={SavedEvents} />
            </React.Suspense>

        </div>
    </div>
)