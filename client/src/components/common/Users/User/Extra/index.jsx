import React from 'react';
import classNames from 'classnames';
import style from './style.module.css';

export default ({ 
    events, 
    subscribers, 
    subscriptions,
    color = null
}) => {
    return (
        <div className={ classNames(style.wrapper, color) }>
            <div>
                <div className={ style.сount }>{ events }</div>
                <div className={ style.text }>Events</div>
                
            </div>
            <div className={ style.center }>
                <div className={ style.сount }>{ subscribers }</div>
                <div className={ style.text }>Followers</div>
            </div>
            <div>
                <div className={ style.сount }>{ subscriptions }</div>
                <div className={ style.text }>Following</div>
            </div>
        </div>
    )
}