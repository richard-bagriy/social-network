import Posts from './Posts';
import { addPost } from '../../../store/ProfilePage/actions';
import { connect } from 'react-redux'
import { getProfilePosts } from '../../../store/ProfilePage/selectors';

const mapStateToProps = (state) => {
    return {
        posts: getProfilePosts(state)
    }
}

export default connect(mapStateToProps, {addPost})(Posts);