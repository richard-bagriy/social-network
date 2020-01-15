import React from 'react'
import PostsContainer from '../../containers/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Message from '../common/Message';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import style from './style.module.css';

const Profile = React.memo(({ profile, id }) => {

    if (!profile) {
        return <></>;
    }

    return (
        <div className={style.wrapper}>

            <ProfileInfo profile={profile} id={id} />

            <Tabs>
                
                <TabList className="border border-bottom p-0 m-top-0 bg-white">
                    <Tab>Activity</Tab>
                    <Tab>Profile Detail</Tab>
                    <Tab>Events</Tab>
                </TabList>

                <TabPanel>
                    <PostsContainer />
                </TabPanel>

                <TabPanel>
                    <h1>Test</h1>
                </TabPanel>

                <TabPanel>
                    <Message message="You don't have any events" />
                </TabPanel>

            </Tabs>
            
        </div>
    )
})

export default Profile;