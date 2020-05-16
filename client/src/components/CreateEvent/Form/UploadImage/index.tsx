import React, { useState, useEffect } from 'react'
import { Field } from 'redux-form'
import { FileInput } from '../../../common/Forms/Forms'
import { generateImagePath } from '../../../../utils/helper'

type Props = {
    title: string,
    name: string
    clean: boolean
}

const UploadImage: React.FC<Props> = ({
    title,
    name,
    clean = false
}) => {

    const [image, setImage] = useState('')

    /// Bad practice but need ( will be changed soon)
    useEffect(() => {
        if (clean) {
            setImage('')
        }
    }, [clean])

    const changeHandler = (e: any, file: FileList) => {
        setImage(URL.createObjectURL(file.item(0)))
    }

    const imageURL = image ? image : generateImagePath('default-upload.jpg')

    return <div className="text-center p-20 border">
        <div className="p-bot-10 color-blue font-size-16 font-bold">{ title }</div>
        <div className="d-flex align-items flex-column">
            <img src={imageURL} className="max-width-400 m-bot-20" alt={name} />
            <Field component={FileInput} name={name} onChange={changeHandler} />
        </div>
            
    </div>
}

export default UploadImage

