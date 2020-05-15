import React from 'react'
import { Field, FieldArray } from 'redux-form'
import { Input } from '../../../common/Forms/Forms'
import Social from './Social'
import cl from 'classnames'
import style from './style.module.scss'

const SocialNetwork: React.FC = () => (
    <div>

        <div className={style.socialInner}>
            <FieldArray name="social" component={Social}/>
        </div>

        <div className={style.websiteWrapper}>
            <div className={cl('font-size-14 color-blue', style.websiteHeader)}>Website</div>
            <Field 
                component={Input}
                className="input-border-bottom border w-100"
                name="url"
                placeholder="URL"
            />
        </div>

    </div>
)

export default React.memo(SocialNetwork)