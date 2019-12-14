import React from 'react';
import style from './style.module.css';

const frineds = [
    {name: 'Rock Willam', message: 'Lore Ipsum'},
    {name: 'Rock Willam', message: 'Lore Ipsum'},
    {name: 'Rock Willam', message: 'Lore Ipsum'},
    {name: 'Rock Willam', message: 'Lore Ipsum'},
    {name: 'Rock Willam', message: 'Lore Ipsum'},
]

const Friends = (props) => {
    const date = new Date();

    return (
        <div className={style.wrapper}>
            <div className={style.inner}>
                <div className={style.filter}>
                    <input type="text" className={style.filterInput} placeholder="Enter a keyword"/>
                </div>
                { frineds.map(f => {
                    return (
                        <div className={style.friendWrapper}>
                            <div className={style.friendInner}>
                                <img src='' alt='' className={style.image} />
                                <div className={style.friendInfo}>
                                    <div className={style.friendName}>
                                        {f.name}
                                    </div>
                                    <div className={style.friendMessage}>
                                        {f.message}
                                    </div>
                                </div>
                                <div className={style.time}>
                                    { date.toLocaleTimeString() }
                                </div>
                            </div>
                        </div>
                    )
                }) }   
            </div>
        </div>
    )
}

export default Friends;