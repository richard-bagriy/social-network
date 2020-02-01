import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { deletePost } from '../../../../../store/ProfilePage/effects'
import style from './style.module.css'
import classNames from 'classnames'

let DeletePost = class extends Component {

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

DeletePost = reduxForm({ form: 'delete-user-post' })(DeletePost)

const DeletePostContainer = ({ deletePost , ...props }) => {
    const onSubmit = ({ userId, postId }) => deletePost({ userId, postId })
    return <DeletePost onSubmit={onSubmit} {...props} />
}

export default connect(null, { deletePost } )(DeletePostContainer)