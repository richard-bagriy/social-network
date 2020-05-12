import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { AppStateType } from '../store'
import { getEvents, addEvent, removeEvent, thunkAddEvent } from '../store/Event'
import Form from '../components/Event/Form'
import { EventFormValuesType } from '../components/Event/Form'

const mapStateToProps = (state: AppStateType) => ({
    images: getEvents(state),
})

const connector = connect(mapStateToProps, { addEvent, removeEvent, thunkAddEvent })
    
type PropsFromRedux = ConnectedProps<typeof connector>
  
const Container = (props: PropsFromRedux) => {

    const handleSubmit = (values: EventFormValuesType) => {
        values.gallery = props.images
        props.thunkAddEvent(values)
    }

    return <Form onSubmit={handleSubmit} {...props} />

}

  export default connector(Container)