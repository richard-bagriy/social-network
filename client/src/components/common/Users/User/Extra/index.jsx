import React from 'react';
import classNames from 'classnames';
import style from '../../style.module.scss';

export default ({ 
    events, 
    subscribers, 
    subscriptions,
    color = null
}) => {
    return (
        <div className={ classNames(style.extra, color) }>
            <div>
                <div className={ style.extra__count }>{ events }</div>
                <div className={ style.extra__text }>Events</div>
                
            </div>
            <div className={ style.exta__center }>
                <div className={ style.extra__count }>{ subscribers }</div>
                <div className={ style.extra__text }>Followers</div>
            </div>
            <div>
                <div className={ style.extra__count }>{ subscriptions }</div>
                <div className={ style.extra__text }>Following</div>
            </div>
        </div>
    )
}