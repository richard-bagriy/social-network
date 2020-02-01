import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { required, maxLength } from '../../../../utils/Validators';
import { Input } from '../../../common/Forms/Forms';
import classNames from 'classnames'
import style from './style.module.css';

const maxLength50 = maxLength(50);

class NewPost extends React.Component {

    componentDidMount() {
        this.props.initialize({ userId: this.props.userId });
    }

    render() {
        const { handleSubmit, profileImage, text } = this.props;

        return (
            <div className={classNames(style.wrapper, 'bg-white')}>
                <form onSubmit={handleSubmit} className={style.inner}>
                    <img className="user-small-image" src={ profileImage } alt={ profileImage } />
                    <Field 
                        component={Input} 
                        className="input border w-100" 
                        value={text} 
                        name="message" 
                        placeholder="Write your activity"
                        validate={[required,maxLength50]} 
                    />
                    <Field component="input" type="hidden" name="userId" />
                    <button className="btn btn-pink p-12">Add post</button>
                </form>
            </div>
        )
    }
}
export default reduxForm({ form: 'add-post' })(NewPost)