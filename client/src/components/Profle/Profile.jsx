import React from 'react'
import PostsContainer from '../../containers/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileDetail from './ProfileDetail';
import Message from '../common/Message';
import ProfileSubscribersContainer from '../../containers/ProfileSubsribersContainer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import style from './style.module.css';

const Profile = ({ 
    profile: {
        image,
        name,
        subscriptions,
        subscribers,
        about,
        email,
        address = null,
        phone = null
    },
    id
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
                </TabList>

                <TabPanel>
                    <PostsContainer />
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
                    <ProfileSubscribersContainer/>
                </TabPanel>

            </Tabs>
            
        </div>
    )
}

export default React.memo(Profile);