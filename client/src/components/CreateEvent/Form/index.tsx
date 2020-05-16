import React from 'react'
import Block from './InputWithHeader'
import { Input, Textarea } from '../../common/Forms/Forms'
import { required, maxLength, email, phoneNumber } from '../../../utils/Validators'
import { reduxForm, InjectedFormProps, Field } from 'redux-form'
import UploadImage from './UploadImage'
import Gallery from '../../../containers/CreateEvent/GalleryContainer'
import SocialNetwork from './SocialNetwork'
import style from './style.module.scss'

const maxLength20 = maxLength(20)

export type EventFormValuesType =  {
    title: string
    description: string
    logo: FileList
    cover: FileList
    gallery: FileList
    location: string
    tags: string
    social?: Array<{ network: string , url:string }>
    url?: string
    email: string
    phone: string
}

type EventFormKeyType = {
    [key:string]: string
}

export type EventHandleSubmitPropsType = EventFormKeyType & EventFormValuesType

export type EventFormInjectedProps = {
    clearImages: boolean
}

const Form: React.FC<InjectedFormProps<EventHandleSubmitPropsType, EventFormInjectedProps> & EventFormInjectedProps> = ({ 
    handleSubmit,
    clearImages
}) => {

    return <form onSubmit={handleSubmit}>

        <Block title="title" iconClass="fas fa-pencil-alt">
            <Field 
                component={Input} 
                className="input-border-bottom border w-100"
                name="title"
                placeholder="Name the Event"
                validate={[required, maxLength20]}  
            />
        </Block>

        <Block title="description" iconClass="fas fa-pencil-alt">
            <Field 
                component={Textarea}
                name="description"
                className="input w-100 textarea-style"
                placeholder="Write please a description"
                validate={[required]}
            />
        </Block>
        
        <Block title="images" iconClass="far fa-image">
            <div className={style.imagesWrapper}>
                <UploadImage title="Logo" name="logo" clean={clearImages} />
                <UploadImage title="Cover Image" name="cover" clean={clearImages} />
            </div>
        </Block>

        <Block title="Gallery Images" iconClass="far fa-images">
            <Gallery />
        </Block>


        <Block title="Contact Information" iconClass="far fa-clock">
            <div className={style.contactInformation}>
                <div className="font-size-14 color-blue">Email</div>
                <Field component={Input}  className="input-border-bottom border w-100" name="email"
                    placeholder="Example: user@gmail.com" validate={[required, email]}
                />
            </div>
            <div className={style.contactInformation}>
                <div className="font-size-14 color-blue">Phone</div>
                <Field component={Input} className="input-border-bottom border w-100" name="phone"
                    placeholder="Enter Phone Number" validate={[required, phoneNumber]}
                />
            </div>
        </Block>

        <Block title="Social Network Accounts" iconClass="fas fa-link">
            <SocialNetwork />
        </Block>

        <Block title="Location" iconClass="fas fa-map-marker-alt">
            <Field 
                component={Input} 
                className="input-border-bottom border w-100"
                name="location"
                placeholder="Put Location"
                validate={[required]}  
            />
        </Block>

        <Block title="Tags" iconClass="fas fa-tags">
            <Field component={Input} className="input-border-bottom border w-100" name="tags" 
                placeholder="Put tags separeted by ," 
            />
        </Block>

        <div className="text-center">
            <button className="btn btn-pink">
                Submit
            </button>
        </div>

    </form>

}

export default reduxForm<EventHandleSubmitPropsType, EventFormInjectedProps>({ 
    form: 'event-create'
})(Form)