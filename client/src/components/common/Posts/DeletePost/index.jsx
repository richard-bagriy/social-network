import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import style from './style.module.css'
import classNames from 'classnames'

class DeletePost extends Component {

    componentDidMount() {
        this.setDefaultValues()
    }

    componentDidUpdate() {
        this.setDefaultValues()
    }

    setDefaultValues = () => {
        const { userId, postId } = this.props;
        this.props.initialize({ userId, postId });
    }

    render() {
        return(
            <form onSubmit={ this.props.handleSubmit } >
                <Field component="input" type="hidden" name="userId" />
                <Field component="input" type="hidden" name="postId" />
                <button className={style.deleteBtn}>
                    <i className={classNames('far fa-times-circle color-grey')}></i>
                </button>
            </form>
        )
    }

}

export default reduxForm({ form: 'delete-post' })(DeletePost)