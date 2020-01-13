import React from 'react'
import PostsContainer from '../../containers/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import style from './style.module.css';
import 'react-tabs/style/react-tabs.css';

const Profile = React.memo(({profile}) => {

    if (!profile) {
        return <></>;
    }

    return (
        <div className={style.wrapper}>
            <ProfileInfo profile={profile} />

            <Tabs>
                <TabList className="border border-bottom p-0 m-top-0 bg-white">
                    <Tab>Activity</Tab>
                    <Tab>Profile Detail</Tab>
                </TabList>

                <TabPanel>
                    <PostsContainer />
                </TabPanel>

                <TabPanel>
                    <h1>Test</h1>
                </TabPanel>

            </Tabs>
            
        </div>
    )
})

export default Profile;