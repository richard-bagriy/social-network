import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Overview from '../../containers/OverviewContainer'

export default () => {
    
    return <div className="p-x-25">
        <h2 className="h2">
            setting
            <hr className="h2-border" />
        </h2>

        <Tabs>

            <TabList>
                <Tab>Overview</Tab>
                <Tab>Change Password</Tab>
            </TabList>

            <TabPanel>
                <Overview />
            </TabPanel>

            <TabPanel>
                Change password
            </TabPanel>

        </Tabs>

    </div>
}