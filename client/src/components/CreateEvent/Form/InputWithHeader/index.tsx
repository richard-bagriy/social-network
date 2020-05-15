import React from 'react'
import style from './style.module.scss'

type Props = {
    title: string
    iconClass: string
    children: React.ReactNode
}

const InputWithHeader: React.FC<Props> = ({
    title,
    iconClass,
    children    
}) => {
    return <div className={`border ${style.border}`}>
        <div className={style.header}>
            <i className={iconClass.toString()}></i>
            { title }
        </div>
        <div className={style.body}>
            { children }
        </div>
    </div>
}

export default InputWithHeader