import React, { lazy, Suspense } from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileDetail from './ProfileDetail';
import Message from '../common/Message';
import ProfilePosts from '../../containers/ProfilePostsContainer';
import Preloader from '../common/Preloader';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import style from './style.module.css';

const ProfileSubscribersContainer = lazy( () => import('../../containers/ProfileSubsribersContainer') );
const ProfileSubscriptionsContainer  = lazy( () => import ('../../containers/ProfileSubscriptionsContainer') );

const Profile = ({ 
    profile: {
        image,
        name,
        subscriptions,
        subscribers,
        about,
        email,
        address = null,
        phone = null,
    },
    id,
}) => {
    return (
        <div className={style.wrapper}>

            <ProfileInfo
                image={image}
                name={name}
                subscriptions={subscriptions}
                subscribers={subscribers}
                id={id} 
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
                    <Message message="You don't have any events" />
                </TabPanel>

                <TabPanel>
                    <Suspense fallback={Preloader}>
                        <ProfileSubscribersContainer/>
                    </Suspense>
                </TabPanel>

                <TabPanel>
                    <Suspense fallback={Preloader}>
                        <ProfileSubscriptionsContainer />
                    </Suspense>
                </TabPanel>

            </Tabs>
            
        </div>
    )
}

export default React.memo(Profile);