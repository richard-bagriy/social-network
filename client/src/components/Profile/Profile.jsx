import React, { lazy, Suspense } from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileDetail from './ProfileDetail';
import Message from '../common/Message';
import ProfilePosts from '../../containers/ProfilePostsContainer';
import Preloader from '../common/Preloader';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import style from './style.module.sass';

const ProfileSubscribersContainer = lazy( () => import('../../containers/ProfileSubsribersContainer') );
const ProfileSubscriptionsContainer  = lazy( () => import ('../../containers/ProfileSubscriptionsContainer') );
const ProfileEvents = lazy(() => import('../../containers/Profile/EventsContainer'))

const Profile = ({ 
    profile: {
        images,
        name,
        subscriptions,
        subscribers,
        about,
        email,
        address = null,
        phone = null,
    },
    id,
    showButton
}) => {
    return (
        <div className={style.wrapper}>

            <ProfileInfo
                images={images}
                name={name}
                subscriptions={subscriptions}
                subscribers={subscribers}
                id={id}
                showButton={showButton}
            />

            <Tabs>
                
                <TabList className="border border-bottom p-0 m-top-0 bg-white m-bot-20">
                    <Tab>Activity</Tab>
                    <Tab>Profile Detail</Tab>
                    <Tab>Events</Tab>
                    <Tab>Subscribers</Tab>
                    <Tab>Subscriptions</Tab>
                </TabList>

                <TabPanel>
                    <ProfilePosts />
                </TabPanel>

                <TabPanel>
                    <ProfileDetail 
                        about={about}
                        email={email}
                        phone={phone}
                        address={address}
                        country="Ukraine"
                    />
                </TabPanel>

                <TabPanel>
                    <Suspense fallback={<Preloader />}>
                        <ProfileEvents />
                    </Suspense>
                </TabPanel>

                <TabPanel>
                    <Suspense fallback={<Preloader />}>
                        <ProfileSubscribersContainer/>
                    </Suspense>
                </TabPanel>

                <TabPanel>
                    <Suspense fallback={<Preloader />}>
                        <ProfileSubscriptionsContainer />
                    </Suspense>
                </TabPanel>

            </Tabs>
            
        </div>
    )
}

export default React.memo(Profile);