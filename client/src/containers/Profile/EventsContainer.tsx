import React, { useEffect, useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { AppStateType } from '../../store'
import { getProfileEvents, getProfileLoadingUser } from '../../store/ProfilePage/selectors'
import { thunkGetProfileEvents } from '../../store/ProfilePage/effects'
import Preloader from '../../components/common/Preloader'
import ProfileEvents from '../../components/Profile/ProfileEvents'
import { compose } from 'redux'
import withUserID from '../../hoc/withUserID'
import Message from '../../components/common/Message'
import { setProfileEvents } from '../../store/ProfilePage/actions'

const mapStateToProps = (state: AppStateType) => ({
    events: getProfileEvents(state),
    loading: getProfileLoadingUser(state)
})

const connector = connect(mapStateToProps, { thunkGetProfileEvents, setProfileEvents })

type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps & {
    userId: string
    authId: string
}

const Container = (props:Props) => {
    
    const { events, loading, thunkGetProfileEvents, userId, authId, setProfileEvents } = props
    
    useEffect(() => {
        thunkGetProfileEvents(userId)

        return () =>  {
            setProfileEvents([])
        }

    }, [])


    if (loading) {
        return <Preloader />
    }

    if (!events.length) {
        return <Message message="No events O_O" type="" />
    }

    const canEdit = userId === authId ? true : false

    return <ProfileEvents events={events} edit={canEdit} />
}

export default compose(
    withUserID,
    connector
)(Container)