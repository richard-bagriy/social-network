import Posts from './Posts';
import {addPost} from '../../../redux/profile-reducer';
import { connect } from 'react-redux'
import { getProfilePosts } from '../../../redux/selectors/profile-selector';

const mapStateToProps = (state) => {
    return {
        posts: getProfilePosts(state)
    }
}

export default connect(mapStateToProps, {addPost})(Posts);