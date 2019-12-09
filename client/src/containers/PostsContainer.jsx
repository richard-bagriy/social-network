import { connect } from 'react-redux'
import Posts from '../components/Profle/Posts/Posts';
import { addPost } from '../store/ProfilePage/actions';
import { getProfilePosts } from '../store/ProfilePage/selectors';

const mapStateToProps = (state) => {
    return {
        posts: getProfilePosts(state)
    }
}

export default connect(mapStateToProps, { addPost })(Posts);