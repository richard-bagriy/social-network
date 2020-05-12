import React from 'react';
import style from './style.module.scss';

const Preloader: React.FC = () => {
    return <div className={style.wrapper}>
        <div className={style.inner}></div>
    </div>
}

export default Preloader