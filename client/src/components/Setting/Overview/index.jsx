import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { EditInput } from '../../common/Forms/Forms'
import style from '../style.module.sass'

const Overview = ({
    handleSubmit,
    toggleEdit,
    edit
}) => {
    

    return <>
        <form method="post" onSubmit={handleSubmit}>

            <div className={`${style.overviewButtons} m-bot-20`}>
                <button 
                    type="button"
                    onClick={toggleEdit}
                    className={`font-size-14 color-grey ${style.editBtn} `}
                >Edit account</button>

                {edit && <button className="btn btn-pink" >Save</button> }
            </div>
            
            <div className={style.overviewFields}>
                <Field 
                    component={EditInput}
                    edit={edit}
                    name="about"
                    iconClass="fas fa-bars"
                    textarea="true"
                    className={`input border w-100 ${style.textarea}`}
                />
                <Field 
                    component={EditInput}
                    edit={edit}
                    name="email"
                    iconClass="far fa-envelope"
                    className="input border w-100"
                />
                <Field 
                    component={EditInput}
                    edit={edit}
                    name="phone"
                    iconClass="fas fa-mobile-alt"
                    className="input border w-100"
                />
                <Field 
                    component={EditInput}
                    edit={edit}
                    name="address"
                    iconClass="fas fa-map-marker-alt"
                    className="input border w-100"
                />
                <Field 
                    component={EditInput}
                    edit={edit}
                    name="country"
                    iconClass="fas fa-map-marker-alt"
                    className="input border w-100"
                />
            </div>
            
        </form>
    </>
}

const mapStateToProps = (state, props) => ({ initialValues: { ...props } })

export default connect(mapStateToProps)(reduxForm({ 
    form: 'overview',
    enableReinitialize: true
})(Overview))
