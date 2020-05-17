import React from 'react'
import H2 from '../common/H2'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Overview from '../../containers/OverviewContainer'
import ChangePassword from '../../containers/ChangePasswordContainer'
import ProfileImages from '../../containers/ProfileImagesContainer'

export default () => {
    
    return <div className="p-x-25">

        <H2 text="setting" />

        <Tabs>

            <TabList>
                <Tab>Overview</Tab>
                <Tab>Profile Images</Tab>
                <Tab>Change Password</Tab>
            </TabList>

            <TabPanel>
                <Overview />
            </TabPanel>

            <TabPanel>
                <ProfileImages />
            </TabPanel>

            <TabPanel>
                <ChangePassword />
            </TabPanel>

        </Tabs>

    </div>
}