import { connect } from 'react-redux'
import Posts from '../components/Profle/Posts/Posts';
import { addPost } from '../store/ProfilePage/actions';
import { getProfilePosts, getProfileImage } from '../store/ProfilePage/selectors';

const mapStateToProps = (state) => {

    return {
        posts: getProfilePosts(state),
        profileImage: getProfileImage(state)
    }

}

export default connect(mapStateToProps, { addPost })(Posts);