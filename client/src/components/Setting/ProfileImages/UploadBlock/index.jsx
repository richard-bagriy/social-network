import React, { useState } from 'react'
import { Field } from 'redux-form'
import { FileInput } from '../../../common/Forms/Forms'
import { generateImagePath } from '../../../../utils/helper'
import style from './style.module.css'

export default ({
    uploadImage,
    label,
    imageName
}) => {

    const [image, setImage] = useState('')

    const changeHandler = (e, file) => {
        setImage(URL.createObjectURL(file[0]))
        uploadImage && uploadImage(file[0], e.currentTarget.name)
    }

    return <div className="border p-20 text-center bg-white">
        
        <div className="p-bot-10 color-blue font-size-14 font-bold">{label}</div>
        <div className={style.wrapper}>
            { image 
              ? <img src={image} className="max-width-400 m-bot-20" alt={imageName} />
              : <img 
                    src={generateImagePath(imageName)} 
                    alt={imageName}
                    className="max-width-400 m-bot-20" 
                />
            }
            <Field component={FileInput} name="cover" onChange={changeHandler} />
        </div>
    </div>
}