import React from 'react'
import { Field } from 'redux-form'
import { FileInput } from '../../../common/Forms/Forms'
import { addGalleryImg, removeGalleryImg } from '../../../../store/Event'
import style from './style.module.scss'
import cl from 'classnames'

type Props = {
    images: Array<File>
    addGalleryImg: typeof addGalleryImg
    removeGalleryImg: typeof removeGalleryImg
}

const Gallery: React.FC<Props> = ({
    images,
    addGalleryImg,
    removeGalleryImg
}) => {

    const handleChange = (e: any, files: Array<File>) => {
        addGalleryImg(files)
    }

    return <div>

        <div className={style.imagesWrapper}>
            { images && images.map((image: File, i: number) => {

                const url = URL.createObjectURL(image)

                return <div className={cl(style.image, 'border')} key={i}>
                    <img src={url} alt={image.name} />
                    <i className="far fa-times-circle" onClick={() => removeGalleryImg(i)}></i>
                </div>

            }) }
            <div>
            
            </div>
        </div>

        <Field component={FileInput} name="gallery" multiple={true} onChange={handleChange} />
        
    </div>
}

export default React.memo(Gallery)