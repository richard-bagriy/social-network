import React from 'react'
import style from './style.module.scss'

type Props = {
    text: string
}

const H2: React.FC<Props> = ({ text }) => (
    <h2 className={style.h2}>
        { text }
        <hr className={style.h2__line} />
    </h2>
)

export default H2