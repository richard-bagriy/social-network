import React from 'react'
import classNames from 'classnames'
import style from './style.module.scss'

type Props = {
    label: string
    text: string
    iconClass: string
}

const BorderBlockWithIcon: React.FC<Props> = ({
    label,
    text,
    iconClass,
    children
}) => {
    return <div className="bg-white p-20 border font-size-14 line-height-24 color-grey">
        <div className={ style.header }>
            <i className={ classNames(iconClass, style.icon, "color-grey") }></i>
            { label } 
        </div>
        { children ? children : text }
    </div>
}

export default BorderBlockWithIcon