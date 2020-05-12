import React from 'react'
import { reduxForm } from 'redux-form'
import UploadBlock from './UploadBlock'
import style from '../style.module.sass'
import classNames from 'classnames'


const ProfileImages = ({
    updateUserImage,
    images
}) => {
    const { photo, cover } = images
    
    return <div className={classNames('border p-20', style.imagesWrapper)}>
        <UploadBlock uploadImage={updateUserImage} label="Photo image" imageName={photo}/>
        <UploadBlock uploadImage={updateUserImage} label="Cover image" imageName={cover}/>
    </div>
}


export default reduxForm({ form: 'change-profile-images' })(ProfileImages)