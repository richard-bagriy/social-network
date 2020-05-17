import React from 'react'
import style from '../style.module.scss'
import cn from 'classnames'

type Props = {
    saved: boolean,
    disabled: boolean
    onClick: () => void
}

const Button: React.FC<Props> = ({ saved, onClick, disabled }) => (
    <button 
        disabled={disabled} 
        className={cn(style.card__save, saved ? style.active : '') } 
        onClick={onClick}
    >
        <i className={cn('fa-heart', saved ? 'fas' : 'far')}></i>
    </button>
)

export default Button