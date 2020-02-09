import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateProfile } from '../store/ProfilePage/effects'
import Overview from '../components/Setting/Overview'
import {
    getAuthAbout,
    getAuthAddress,
    getAuthEmail,
    getAuthPhone,
} from '../store/Auth/selectors'

const Container = ({ updateProfile, ...props }) => {

    const updateHandler = ({ 
        onSubmit,
        ...data
    }) =>  {
        updateProfile(data)
        toggleEdit();
    };

    const [edit, setEdit] = useState(false)

    const toggleEdit = () => setEdit(!edit)

    return <Overview 
        {...props} 
        onSubmit={updateHandler}
        toggleEdit={toggleEdit}
        edit={edit}
    />
}

const mapStateToProps = state => ({
    about: getAuthAbout(state),
    address: getAuthAddress(state),
    email: getAuthEmail(state),
    phone: getAuthPhone(state),
    country: 'Ukraine',
})

export default connect(mapStateToProps, { updateProfile } )(Container)