import { connect } from 'react-redux';
import { addPost } from '../../../../store/ProfilePage/actions';
import NewPost from './NewPost';

const mapStateToProps = (state) =>{
    
    return {
        profileImage: state.profilePage.profile.photos.small
    }
}

export default connect(mapStateToProps, {addPost})(NewPost)