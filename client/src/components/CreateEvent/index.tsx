import React from 'react'
import Form from '../../containers/EventFormContainer'
import { EventContainerTypeProps } from '../../containers/CreateEventContainer'
import Modal from 'react-modal'
import style from './style.module.scss'

const CreateEvent: React.FC<EventContainerTypeProps> = ({ created, eventCreated }) => (

    <div>
        <h2 className="h2">
            Create Event
            <hr className="h2-border" />
        </h2>

        <Modal isOpen={created} className={style.modal} style={{ overlay: { zIndex: 6666 }}} >
            <h2 className="h2">
                Event successfully created
                <hr className="h2-border" />
            </h2>
            <div className="text-center">
                <button className="btn btn-pink" onClick={() => eventCreated(false)}>Close</button>
            </div>
        </Modal>

        <div className={style.inner}>
            <Form />
        </div>

    </div>
)

export default CreateEvent