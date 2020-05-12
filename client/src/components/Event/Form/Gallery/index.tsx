import React from 'react'
import { Field } from 'redux-form'
import { FileInput } from '../../../common/Forms/Forms'
import { EventFormInjectedProps } from '../'
import style from './style.module.scss'
import cl from 'classnames'

const Gallery: React.FC<EventFormInjectedProps> = ({
    images,
    addEvent,
    removeEvent
}) => {

    const handleChange = (e: any, files: Array<File>) => {
        addEvent(files)
    }

    return <div>

        <div className={style.imagesWrapper}>
            { images && images.map((image: File, i: number) => {

                const url = URL.createObjectURL(image)

                return <div className={cl(style.image, 'border')} key={i}>
                    <img src={url} alt={image.name} />
                    <i className="far fa-times-circle" onClick={() => removeEvent(i)}></i>
                </div>

            }) }
            <div>
            
            </div>
        </div>

        <Field component={FileInput} name="gallery" multiple={true} onChange={handleChange} />
        
    </div>
}

export default React.memo(Gallery)